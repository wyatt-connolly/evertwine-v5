import Image from "next/image";

export default function Download() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Connecting?
        </h2>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Join thousands of people already using Evertwine to discover amazing
          activities and meet new people.
        </p>

        <div className="flex justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              alt="Download on the App Store"
              width={200}
              height={56}
              className="h-14 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
