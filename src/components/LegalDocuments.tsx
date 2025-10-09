"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LegalDocuments() {
  const searchParams = useSearchParams();
  const docParam = searchParams.get("doc");
  const [activeDocument, setActiveDocument] = useState(
    docParam || "privacy-policy"
  );

  useEffect(() => {
    if (docParam) {
      setActiveDocument(docParam);
    }
  }, [docParam]);

  const documents = {
    "privacy-policy": {
      title: "Privacy Policy",
      lastUpdated: "April 18, 2025",
      content: `Welcome to Evertwine! Your privacy and the security of your personal information are our top priorities. This Privacy Policy explains how Evertwine, LLC ("we," "us," or "our") collects, uses, shares, and protects information when you use our website, mobile application, and related services (collectively, the "Services"). By accessing or using the Services, you agree to this Privacy Policy.

1. Information We Collect

A. Personal Information
• Account Details: Name, email address, phone number, profile photo.
• Verification Data: Selfie + ID documents (optional today, becoming mandatory for full account activation), background check data (optional, launching late 2025), AR-face data (planned Q2 2026).
• Location Data: GPS coordinates or approximate location to power our Interactive Map and List View.
• Usage & Preferences: Filters you set, events you join or host, message and connection history.
• Support & Communications: Correspondence with our support team, survey responses.

B. Non-Personal Information
• Technical Data: Device type, operating system, browser version, IP address.
• Analytics Data: Feature usage, crash reports, performance logs collected via cookies, SDKs, and similar technologies.

2. How We Use Your Information

• Provide & Improve Services: Deliver core functionality (map, event discovery, messaging). Analyze usage to optimize performance and develop new features.
• Enhance Trust & Security: Verify identities and detect fraud or misuse. Monitor for suspicious behavior and enforce our Terms of Service.
• Personalize Your Experience: Remember preferences and recommend relevant meetups. Tailor in-app prompts based on your activity.
• Communicate with You: Send account notifications, feature announcements, and critical security alerts. Provide customer support and respond to your inquiries.
• Legal & Compliance: Respond to lawful requests by public authorities. Enforce our Terms, protect rights, and comply with applicable laws.

3. Cookies & Tracking Technologies

We use cookies, web beacons, and SDKs to:
• Remember your login and preferences.
• Measure feature adoption and app performance.
• Detect and prevent security threats.
You can manage cookies through your browser or device settings. Disabling cookies may limit certain features.

4. Information Sharing & Disclosure

• Service Providers: We share data with vendors who help operate the app (e.g., hosting, analytics, verification services).
• Legal Requirements: We disclose data to comply with subpoenas, court orders, or legal processes.
• Business Transfers: If Evertwine is acquired or merges, user data may be transferred under the same privacy commitments.
• Aggregate or De-identified Data: We may share insights that do not identify individual users.

5. Your Privacy Rights

Depending on your jurisdiction, you may have the right to:
• Access your personal information.
• Correct or update inaccuracies.
• Delete your account and personal data.
• Restrict or object to certain processing activities.
• Port your data to another service.

To exercise these rights, contact us at support@evertwine.social. We may verify your identity before fulfilling requests.

6. Data Security

We implement industry-standard safeguards, including:
• Encryption of data in transit (TLS) and at rest.
• Access Controls limiting internal access to authorized personnel.
• Regular Audits and penetration testing.
While we strive to protect your data, no system is entirely immune to breach. We will notify you promptly if a security incident affects your personal information.

7. Data Retention

We retain your personal data only as long as necessary to:
• Provide the Services.
• Comply with legal obligations.
• Resolve disputes or enforce our agreements.
When data is no longer needed, we securely delete or anonymize it.

8. International Transfers

Currently, all data is collected, processed, and stored within the United States. Should we expand internationally or transfer data across borders, we will implement appropriate safeguards (e.g., Standard Contractual Clauses) and update this policy accordingly.

9. Children's Privacy

Evertwine is intended for users aged 18 and above. We do not knowingly collect personal data from anyone under 18. If we learn we have collected data from a minor, we will promptly delete it.

10. Changes to This Policy

We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will post the revised policy with a new "Last updated" date and, where required by law, notify you of significant changes. Continued use of the Services after such updates constitutes acceptance of the revised policy.

11. Contact Us

If you have questions, requests, or concerns about this Privacy Policy or our data practices, please reach out to:
support@evertwine.social

Thank you for trusting Evertwine with your information. We're committed to keeping your data safe and your experience secure.`,
    },
    "cookie-policy": {
      title: "Cookie Policy",
      lastUpdated: "April 18, 2025",
      content: `Evertwine ('we,' 'us,' or 'our') uses cookies and similar technologies to make our website and mobile app work, to improve performance, and to enhance your experience. This Cookie Policy explains what these technologies are, why we use them, and your choices regarding their use. For more details on how we handle your data generally, please see our Privacy Policy.

1. What Are Cookies?

Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit our website or use our mobile application. They store information about your activity and preferences.

2. Types of Cookies We Use

• Essential Cookies: Necessary for basic site and app functionality—enabling secure log-in, session management, and core features.
• Analytical/Performance Cookies: Collect anonymous data on how you interact with Evertwine (e.g., pages visited, errors encountered) so we can optimize performance and usability.
• Functionality Cookies: Remember choices you make (e.g., language or region) to personalize your experience and speed up your next visit.
• Security Cookies: Support fraud prevention and account-protection measures, such as login monitoring and breach detection.

3. How We Use Cookies

We deploy cookies to:
• Enable Core Functionality: Keep you signed in, secure your sessions, and power interactive features.
• Improve Performance: Analyze usage patterns and troubleshoot issues.
• Personalize Your Experience: Remember your settings and deliver content that matches your preferences.
• Protect Security: Detect suspicious activity and help prevent unauthorized access.

4. Cookies in Our Mobile Applications

While traditional cookies are web-based, our mobile apps use similar technologies:
• Local Storage: Retains user preferences and settings on your device.
• Web Beacons & SDKs: Track in-app interactions and performance metrics.
• Device Fingerprinting: Gathers non-personal device details to help prevent fraud.
These function like cookies, improving app stability and customizing your experience.

5. Third-Party Cookies & Tracking Technologies

We partner with trusted analytics providers who set their own cookies and use tracking tools to gather aggregate data:
• Google Analytics
• Firebase Analytics
These services help us understand overall usage trends; they do not collect personally identifiable information unless you have given consent elsewhere.

6. No Advertising or Targeting Cookies

Evertwine does not use cookies for advertising or cross-site tracking. You will not be served targeted ads based on your activity in our Services.

7. Managing Your Cookie Preferences

Most browsers and devices allow you to control cookies via settings:
• Browser Settings: Block or delete cookies in Chrome, Safari, Firefox, Edge, etc.
• Device Settings: On mobile, adjust privacy and storage settings to limit local data.
Disabling certain cookies may prevent features from working properly.

8. Changes to This Cookie Policy

We may update this policy to reflect new technologies, legal requirements, or operational changes. Significant revisions will be noted by updating the 'Last updated' date. Your continued use of our Services after changes indicates your acceptance.

9. Contact Us

If you have questions about our use of cookies, please reach out to:
support@evertwine.social

Thank you for choosing Evertwine. We're committed to protecting your privacy and delivering a seamless, personalized experience.`,
    },
    "terms-of-service": {
      title: "Terms of Service",
      lastUpdated: "April 18, 2025",
      content: `Welcome to Evertwine! These Terms of Service ("Terms") are a binding agreement between you ("User," "you," or "your") and Evertwine, LLC ("Evertwine," "we," "us," or "our"). They govern your access to and use of our website, mobile application, and related services (collectively, the "Services"). By accessing or using the Services, you accept and agree to these Terms in full. If you do not agree, please discontinue use immediately.

1. Purpose of Evertwine

Evertwine is an activity-based meetup platform for both casual and professional connections. We provide an Interactive Map and List View to help you discover and join local coffee meetups, fitness classes, networking mixers, and more—so you can spend less time messaging and more time meeting face-to-face.

2. License and Access

We grant you a limited, revocable, non-exclusive license to access and use the Services for your personal and professional networking only. This license does not allow you to:
• Copy, modify, distribute, or publicly display any part of the Services.
• Use the Services for unauthorized commercial purposes.
• Reverse-engineer or attempt to extract source code.
• Violate any applicable laws or regulations.

3. User Accounts & Verification

To use certain features, you must register and create an account. You agree to:
• Provide accurate, up-to-date information during registration.
• Maintain the security of your account credentials.
• Complete verification steps when prompted:
  - ID + Selfie Verification is currently optional for enhanced trust features but will become mandatory for full account activation in the near future.
  - Optional Background Checks will roll out in late 2025.
  - AR-Based Facial Recognition is planned for Q2 2026.
Failure to complete mandatory verification once required may limit or suspend your ability to use certain features.

4. User Responsibilities

You agree to:
• Keep your profile information truthful and current.
• Respect other users' privacy and rights.
• Follow all local, state, federal, and international laws.
• Use the Services only as intended—do not exploit or misuse features.

5. Prohibited Activities

You must not:
• Harass, intimidate, or defraud other users.
• Post abusive, defamatory, or infringing content.
• Impersonate any person or entity.
• Distribute spam, malware, or unauthorized data-scraping tools.
• Host or promote unsafe or unlawful meetups.
• Interfere with the operation or security of the Services.

6. User-Generated Content

When you upload text, photos, or other content ("UGC"), you grant Evertwine a non-exclusive, royalty-free, worldwide license to display, reproduce, and distribute that UGC in connection with the Services. You retain ownership, provided it does not infringe others' rights or violate applicable laws.

7. Operation Through App Stores

Our mobile app is distributed via the Apple App Store and Google Play Store. You agree to comply with their respective terms and policies in addition to these Terms.

8. Termination

We may suspend or terminate your access at our discretion—without notice—for violating these Terms or for any other reason. Upon termination, your rights under these Terms immediately cease.

9. Disclaimer of Warranties

THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." EVERTWINE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE SERVICE.

10. Limitation of Liability

TO THE FULLEST EXTENT PERMITTED BY LAW, EVERTWINE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES.

11. Indemnification

You agree to indemnify and hold harmless Evertwine and its affiliates from any claim or demand, including reasonable attorneys' fees, arising from your breach of these Terms or your misuse of the Services.

12. Governing Law & Dispute Resolution

These Terms are governed by the laws of the State of Nevada, without regard to its conflict-of-law rules. Any dispute must be brought exclusively in the state or federal courts located in Nevada.

13. Changes to These Terms

We may update these Terms for operational, legal, or regulatory reasons. Substantial changes will be communicated via the app or email. Continued use after an update constitutes acceptance of the revised Terms.

14. Contact Information

For questions or disputes, please contact us at:
support@evertwine.social

Thank you for choosing Evertwine, where real connections happen.`,
    },
    eula: {
      title: "End User License Agreement",
      lastUpdated: "April 18, 2025",
      content: `This End User License Agreement ("EULA") is a legal contract between you ("User," "you," or "your") and Evertwine, LLC ("Evertwine," "we," "us," or "our") governing your use of our website, mobile application, and related services (collectively, the "Services"). By accessing or using the Services, you agree to this EULA in full and to comply with all other Evertwine policies—including our Privacy Policy, Terms of Service, Cookie Policy, and any other guidelines or rules we publish. If you do not agree, do not use the Services.

1. License Grant

Subject to your compliance with this EULA, Evertwine grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal and professional networking. This license does not permit you to:
• Modify, reproduce, distribute, or publicly display any part of the Services.
• Use the Services for unauthorized commercial purposes.
• Decompile, reverse-engineer, or extract source code.
• Violate any applicable laws or regulations.

2. Operation Through App Stores

Our mobile app is available via the Apple App Store and Google Play Store. You must also comply with:
• Apple App Store Terms: All guidelines on privacy, security, and content.
• Google Play Developer Policies: All requirements for functionality, content, and security.
Non-compliance may result in suspension or removal from those platforms.

3. User Obligations

You agree to:
• Provide Accurate Information: Registration and profile details must be truthful and up to date.
• Maintain Account Security: Safeguard your credentials and report any unauthorized access.
• Follow All Laws: Comply with local, state, federal, and international laws.
• Respect Others: Treat all users courteously; do not infringe on their rights.
• Avoid Prohibited Content: Do not post abusive, defamatory, infringing, or unlawful material.

4. Prohibited Uses

You may not use Evertwine to:
• Engage in fraud, harassment, or other harmful conduct.
• Distribute spam, malware, or malicious software.
• Impersonate individuals or misrepresent affiliations.
• Scrape, harvest, or collect data without permission.
• Host or promote unlawful or unsafe meetups.
• Interfere with platform operations or security.

5. User-Generated Content

By posting content ("UGC"), you grant Evertwine a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your UGC in connection with the Services. You retain ownership, but you represent that your UGC does not violate any rights or laws. We may remove any UGC that breaches these terms without notice.

6. Ownership & Intellectual Property

All aspects of the Services—text, graphics, logos, software, and data—are owned by Evertwine or our licensors and protected by copyright, trademark, and other laws. You agree not to use, copy, or create derivative works without our prior written permission.

7. Agreement to Other Policies

Your use of Evertwine is also governed by our Privacy Policy, Cookie Policy, Terms of Service, and any other policies we publish. By using the Services, you acknowledge that you have read, understood, and agreed to be bound by all such policies.

8. Meetup Risk & Liability Disclaimer

While we strive to maintain industry-leading safety standards—including mandatory ID + selfie verification—meetups are organized and attended by users in real-world settings. You assume all risks associated with attending or hosting any meetup. Evertwine is not responsible for any injury, loss, or damage arising out of or in connection with meetups or in-person interactions facilitated through the Services.

9. Termination

We may suspend or terminate your access at any time, with or without cause. Upon termination, your license ends immediately. Sections 5 (UGC), 6 (Ownership), 8 (Liability Disclaimer), 9 (Termination), 11 (Indemnification), and 12 (Governing Law) survive termination.

10. Disclaimers & Limitation of Liability

• Disclaimer of Warranties: The Services are provided "as is" and "as available," without warranties of any kind.
• Limitation of Liability: To the fullest extent permitted by law, Evertwine will not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services including meetups-related incidents even if advised of the possibility.

11. Indemnification

You agree to indemnify and hold harmless Evertwine, its affiliates, officers, and employees from any claims, damages, or expenses (including attorneys' fees) arising out of your breach of this EULA, your use of the Services, or your participation in any meetups.

12. Governing Law & Dispute Resolution

This EULA is governed by Nevada law, without regard to conflict-of-law principles. All disputes must be resolved exclusively in the state or federal courts in Nevada. You consent to jurisdiction and venue in those courts.

13. Changes to This EULA

We may update this EULA for legal, operational, or regulatory reasons. We will notify you of significant changes by posting the revised EULA with a new "Last updated" date. Continued use after changes indicates acceptance.

14. Contact Information

For questions or concerns about this EULA, please contact:
support@evertwine.social

Thank you for using Evertwine. We're committed to providing a safe, engaging, and reliable platform for real-world connections.`,
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Document Navigation */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Legal Documents</h1>
          <div className="flex flex-wrap gap-2">
            {Object.entries(documents).map(([key, doc]) => (
              <button
                key={key}
                onClick={() => setActiveDocument(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDocument === key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {doc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {documents[activeDocument as keyof typeof documents].title}
            </h2>
            <p className="text-gray-400 text-sm">
              Last updated:{" "}
              {documents[activeDocument as keyof typeof documents].lastUpdated}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-gray-300 leading-relaxed">
              {documents[activeDocument as keyof typeof documents].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
