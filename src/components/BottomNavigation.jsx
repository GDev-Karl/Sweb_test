import React from 'react';
import GradientButton from '../components/ui/GratientButton';


const ArrowBackIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const BottomNavigation = ({ 
  onBack, 
  onNext, 
  progress = 33, 
  backText, 
  nextText,
  nextDisabled = false,
  showProgress = true 
}) => {
  return (
    <div className="w-full bg-white border-t border-gray-100 flex-shrink-0">
      {/* Progress Bar */}
      {showProgress && (
        <div className="w-full bg-gray-200 h-1 sm:h-2">
          <div 
            className="bg-gradient-to-r from-orange-400 to-pink-500 h-full transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors active:scale-95 py-2 px-1"
        >
          <ArrowBackIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">
            Go Back
          </span>
        </button>

        {/* Next Button */}
        <GradientButton
          variant="contained"
          isGradient={true}
          isRadial={true}
          gradientDirection="to top"
          gradientOrigin="top"
          gradientFrom="#f97316"
          gradientMiddle="#ec4899"
          gradientTo="#ec4899"
          gradientFromPercent="0%"
          gradientMiddlePercent="100%"
          gradientToPercent="100%"
          onClick={onNext}
          disabled={nextDisabled}
          className="text-sm sm:text-base font-semibold text-white min-w-[120px] sm:min-w-[140px] h-12 sm:h-14 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            fontFamily: 'Rethink Sans, sans-serif', 
            fontWeight: 600 
          }}
        >
          Next
        </GradientButton>
      </div>
    </div>
  );
};

export default BottomNavigation;