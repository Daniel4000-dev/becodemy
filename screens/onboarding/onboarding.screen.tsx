import React, { useState } from "react";
import { onboardingSlides } from "@/config/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Slider from "@/components/onboarding/slider";
import Slide from "@/components/onboarding/slide";

export default function OnboardingScreen() {
  const [index, setIndex] = useState(0);
  const prev = onboardingSlides[index - 1];
  const next = onboardingSlides[index + 1];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={
          prev && (
            <Slide
              index={index}
              setIndex={setIndex}
              slide={prev}
              totalSlides={onboardingSlides.length}
            />
          )
        }
        next={
          next && (
            <Slide
              index={index}
              setIndex={setIndex}
              slide={next}
              totalSlides={onboardingSlides.length}
            />
          )
        }
      >
        <Slide
          slide={onboardingSlides[index]}
          index={index}
          setIndex={setIndex}
          totalSlides={onboardingSlides.length}
        />
      </Slider>
    </GestureHandlerRootView>
  );
}
