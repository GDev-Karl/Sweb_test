import React from 'react';

const TopNavigation = ({ currentStep = 1, totalSteps = 3, onSaveExit }) => {

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <span className="text-sm sm:text-base font-medium text-gray-700">
          {currentStep}/{totalSteps}
        </span>
        <button 
          onClick={onSaveExit}
          className="text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-full transition-colors border border-gray-300 active:scale-95"
        >
          save & exit
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;


/*
// ===== COMPOSANT TopNavigation =====
const TopNavigation = ({ step, onSave }) => {
  return (
    <div className="flex justify-between items-center p-4 pt-12 w-full max-w-md">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-medium text-gray-900">Onboarding</span>
      </div>
      <button 
        onClick={onSave}
        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        Save & exit
      </button>
      <div className="absolute left-4 top-20">
        <div className="text-sm font-medium text-gray-900">{step}</div>
      </div>
    </div>
  );
};
*/