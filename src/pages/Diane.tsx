import { BackgroundBeams } from "@/components/BackgroundBeams";
import { BlurFadeDemo } from "@/components/BlurFade";
import { ConfettiFireworks } from "@/components/ConfettiFireworks";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import RubiksCube from "@/components/RubiksCube";
import { SparklesTextDemo } from "@/components/SparklesText";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffect";

// @ts-ignore
import { ShapeBar } from "@/js/ShapeBar";

const Diane = () => {
  return (
    <div>
      <BackgroundBeams/>
      <ConfettiFireworks/>
      <BlurFadeDemo/>
      <TextGenerateEffectDemo/>
      <InfiniteMovingCardsDemo/>
      <SparklesTextDemo/>
      <div className="flex justify-center items-center pt-10">
        <RubiksCube />
        <RubiksCube />
        <RubiksCube />
      </div>
      <div className="flex justify-center items-center">
        <RubiksCube />
        <RubiksCube />
        <RubiksCube />
      </div>
      <div className="flex justify-center items-center pb-11">
        <RubiksCube />
        <RubiksCube />
        <RubiksCube />
      </div>
    </div>
  )
}

export default Diane
