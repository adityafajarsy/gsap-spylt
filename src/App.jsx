import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger, SplitText } from "gsap/all";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
}
