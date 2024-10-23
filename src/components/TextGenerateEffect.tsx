"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Why don't scientists trust atoms? Because they make up everything! Meanwhile, in a parallel universe, cats are the ones who walk humans on leashes. Remember, if life gives you melons, you might be dyslexic.`;

export function TextGenerateEffectDemo() {
  return (
    <div style={{ padding: '50px' }}>
      <TextGenerateEffect words={words} />
    </div>
  );
}
