import React, { useState } from 'react'
import ImageSkeleton from './imageSkeleton';

const OnboardingSlide = ({ data }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Handle the image loading
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Handle the image error when loading
  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div className="w-full flex-shrink-0 snap-center snap-always">
      <div className="flex flex-col gap-y-6 sm:gap-y-6 md:gap-y-8 p-4 sm:p-6 md:p-8 py-4 sm:py-6 md:py-8">
        {/* Image Container */}
        <div>
          {imageLoading || imageError ? (
            <ImageSkeleton isLoading={imageLoading} />
          ) : null}
          <img
            src={data.image}
            alt={`Onboarding step ${data.id}`}
            className={`w-full h-80 object-cover rounded-xl ${imageLoading || imageError ? 'hidden' : 'block'
              }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-black leading-tight px-4 font-dm-sans">
            {data.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlide;