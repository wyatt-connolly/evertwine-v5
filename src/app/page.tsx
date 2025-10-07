import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import SampleContent from "@/components/SampleContent";
import SocialProof from "@/components/SocialProof";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Differentiators />
      <Features />
      <Screenshots />
      <SampleContent />
      <SocialProof />
      <Download />
      <Footer />
    </main>
  );
}
