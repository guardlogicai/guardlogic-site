import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import LiveDemoSection from "./components/sections/LiveDemoSection";
import PiiMaskingSection from "./components/sections/PiiMaskingSection";
import ProblemSection from "./components/sections/ProblemSection";
import SolutionSection from "./components/sections/SolutionSection";
import WaitlistSection from "./components/sections/WaitlistSection";

function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-white/10 bg-slate-950/65 px-4 py-3 backdrop-blur-md">
        <p className="text-sm font-semibold tracking-wide text-white">GuardLogic</p>
        <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
          <a href="#live-demo" className="transition hover:text-white">
            Demo
          </a>
          <a href="#waitlist" className="transition hover:text-white">
            Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="relative">
      <AnimatedBackground />
      <TopNav />

      <motion.main style={{ y }} className="pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PiiMaskingSection />
        <LiveDemoSection />
        <WaitlistSection />
      </motion.main>

      <Footer />
    </div>
  );
}
