import { SplittingText } from "@/components/Hero/SplittingText";
import { TextGenerateEffect } from "@/components/Hero/TextGenerateEffect";
import { RippleGrid } from "@/components/Hero/RippleGrid";

export default function Hero() {
  return (
    <div className="max-w-xl pt-8">
        <h1 className="text-4xl md:text-5xl font-bold md:text-page-title">
          <SplittingText
            duration={700}
            by="words"
            stagger={130}
            text="Send, save and spend, without the friction."
          />
        </h1>
        <p className="pt-5 text-muted text-md sm:text-lg">
          <TextGenerateEffect
            duration={600}
            stagger={50}
            text="Rain puts your balance, transfers and friends in one calm place. Pay someone in seconds, move money to your bank, and see every transaction clearly."
          />
        </p>
    </div>
  );
}
