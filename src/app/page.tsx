import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import Features from "@/components/Features";
import LearnMore from "@/components/LearnMore";
import ComingSoon from "@/components/ComingSoon";
import SocialProof from "@/components/SocialProof";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Banner />
      <Hero />
      <Differentiators />
      <Features />
      <LearnMore />
      <ComingSoon />
      <SocialProof />
      <Download />
      <Footer />
    </main>
  );
}
