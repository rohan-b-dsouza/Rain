import RippleGrid from "@/components/Hero/RippleGrid";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import ShortTagline from "../components/ShortTagline";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="absolute inset-0">
          <RippleGrid
            color="#f4f5f8"
            variant="lines"
            cellSize={48}
            lineWidth={0.5}
            glow={0.6}
            rippleStrength={1.2}
            rippleSpeed={0.4}
            rippleSize={0.6}
            autoRipple="random"
            rippleInterval={1.8}
            tilt={0}
            rotation={0}
            fade={0.4}
            opacity={0.4}
            mouseInteraction
            clickRipple
            intro
            lightMode
          />
        </div>
        <div className="flex flex-col mx-auto max-w-7xl px-6 py-4 sm:px-16 sm:py-5 text-sm">
          <Navbar />
          <ShortTagline />
          <Hero />
        </div>
      </div>
    </div>
  );
}
