import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface ContactFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  businessName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, inquiryType, message, businessName }: ContactFormData =
      await request.json();

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Resend API key not configured" },
        { status: 500 }
      );
    }

    // Format inquiry type for display
    const inquiryTypeFormatted = inquiryType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Create email HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
          New Contact Form Submission - ${inquiryTypeFormatted}
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryTypeFormatted}</p>
          ${
            businessName
              ? `<p><strong>Business Name:</strong> ${businessName}</p>`
              : ""
          }
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
          <p>This message was sent from the Evertwine contact form.</p>
          <p>Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `;

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Evertwine Contact Form <onboarding@resend.dev>",
        to: ["support@evertwine.social"],
        subject: `New ${inquiryTypeFormatted} Inquiry from ${name}`,
        html: emailHtml,
        reply_to: email, // Allow direct replies to the sender
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API error:", errorData);

      return NextResponse.json(
        {
          error: "Failed to send email",
          details: errorData,
        },
        { status: 500 }
      );
    }

    const resendData = await resendResponse.json();
    console.log("Email sent successfully:", resendData);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      emailId: resendData.id,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to process contact form submission",
      },
      { status: 500 }
    );
  }
}
