import RippleGrid from "@/components/Hero/RippleGrid";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Features from "@/components/Features/Features";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import SecurityCTA from "@/components/SecurityCTA/SecurityCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0">
          <RippleGrid
            color="#f4f5f8"
            variant="dots"
            cellSize={50}
            lineWidth={0.6}
            glow={0.7}
            rippleStrength={1.3}
            rippleSpeed={0.6}
            rippleSize={0.6}
            autoRipple="random"
            rippleInterval={1.8}
            tilt={0}
            rotation={0}
            fade={0.5}
            opacity={0.4}
            mouseInteraction
            clickRipple
            intro
            lightMode
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm sm:px-16 sm:py-5">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-16 sm:py-10 text-sm">
        <Features />
      </div>
      <HowItWorks />
      <SecurityCTA />
      <Footer />
    </div>
  );
}
