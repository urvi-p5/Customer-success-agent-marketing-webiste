import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import ProblemStatement from "@/components/sections/ProblemStatement";
import HowItWorks from "@/components/sections/HowItWorks";
import KeyCapabilities from "@/components/sections/KeyCapabilities";
import WhyVigilAI from "@/components/sections/WhyVigilAI";
import SocialProof from "@/components/sections/SocialProof";
import CTAFooter from "@/components/sections/CTAFooter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <ProblemStatement />
        <HowItWorks />
        <KeyCapabilities />
        <WhyVigilAI />
        <SocialProof />
        <CTAFooter />
      </main>
      <Footer />
    </>
  );
}
