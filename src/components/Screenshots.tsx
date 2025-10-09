import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    {
      title: "Discover Activities",
      description: "Find meetups that match your interests",
      image: "/screenshots/discover-activities.png",
    },
    {
      title: "Join Meetups",
      description: "Get all the details and RSVP",
      image: "/screenshots/meetup-details.png",
    },
    {
      title: "Connect & Chat",
      description: "Message other attendees",
      image: "/screenshots/messages.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See Evertwine in Action
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="phone-mockup-small mb-6">
                <div className="phone-screen-small">
                  <Image
                    src={screenshot.image}
                    alt={`${screenshot.title} Screen`}
                    width={400}
                    height={800}
                    className="w-full h-full object-cover rounded-[15px]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {screenshot.title}
              </h3>
              <p className="text-gray-300">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
