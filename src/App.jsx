import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
