import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import Features from "@/components/Features";
import SampleContent from "@/components/SampleContent";
import LearnMore from "@/components/LearnMore";
import ComingSoon from "@/components/ComingSoon";
import SocialProof from "@/components/SocialProof";
import BlogPreview from "@/components/BlogPreview";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Differentiators />
      <Features />
      <SampleContent />
      <LearnMore />
      <ComingSoon />
      <SocialProof />
      <BlogPreview />
      <Download />
      <Footer />
    </main>
  );
}
