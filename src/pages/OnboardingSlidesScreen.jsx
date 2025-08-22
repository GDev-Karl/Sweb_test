import React, { useState, useRef, useEffect, useCallback } from "react";
import { onboardingData } from "../data/onboardingData";
import OnboardingSlide from "../components/onboardingSlide";
import ProgressDots from "../components/progressDots";
import SwebLogo from "../components/Logo";

const OnboardingSlidesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Fonction pour scroller vers une slide spécifique
  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
    setCurrentIndex(index);
  };

  // Détection du scroll pour mettre à jour l'index actuel
  const handleScroll = useCallback(() => {
  if (carouselRef.current) {
    const slideWidth = carouselRef.current.offsetWidth;
    const scrollLeft = carouselRef.current.scrollLeft;
    // La méthode Math.round garantit que le point actif est celui qui est le plus proche du centre
    const newIndex = Math.round(scrollLeft / slideWidth);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }
}, [currentIndex]);

  // Écouteur de scroll avec debounce
  useEffect(() => {
  const carousel = carouselRef.current;
  if (carousel) {
    // Écoute l'événement 'scroll' et met à jour l'index directement
    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }
}, [handleScroll]); 

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      scrollToSlide(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    scrollToSlide(onboardingData.length - 1);
  };

  const handleDotClick = (index) => {
    scrollToSlide(index);
  };

  const handleMainAction = () => {
    if (currentIndex === onboardingData.length - 1) {
      alert("Onboarding Terminé");
    } else {
      handleNext();
    }
  };

  const isLastSlide = currentIndex === onboardingData.length - 1;

  return (
    <div className="min-h-0 bg-white flex flex-col w-full h-screen">
      {/* Header avec Logo*/}
      <div className="flex items-star p-4 sm:px-6 md:px-8 sm:mb-10 md:mb-12">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black font-dm-sans">
          <SwebLogo />
        </div>
      </div>

      {/* Carousel Container */}
      <div className="flex flex-grow items-end pt-24">
        <div
          ref={carouselRef}
          className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          <div className="flex">
            {onboardingData.map((slide) => (
              <OnboardingSlide
                key={slide.id}
                data={slide}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 mb-5">
        {/* Progress*/}
        <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-6 px-4 sm:px-6 md:px-8">
          <ProgressDots
            total={onboardingData.length}
            current={currentIndex}
            onDotClick={handleDotClick}
          />
          <button
            onClick={handleSkip}
            className="text-pink-500 text-sm sm:text-base md:text-lg font-medium hover:text-pink-600 transition-colors font-dm-sans"
          >
            Skip
          </button>
        </div>

        {/* Bottom Button */}
        <div className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-8 md:pb-10">
          <button
            onClick={handleMainAction}
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 sm:py-4 md:py-5 rounded-4xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-200 active:scale-95 font-dm-sans"
          >
            {isLastSlide ? "Start booking appointments" : "Next"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default OnboardingSlidesScreen;