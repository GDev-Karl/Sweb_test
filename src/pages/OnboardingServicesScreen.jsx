import React from 'react';


const OnboardingServicesScreen = () => {
    return (
        <div className="min-h-0 bg-white flex flex-col w-full h-screen">
            {/* Header*/}
            <div className="flex flex-row justify-between items-center p-4 sm:px-6 md:px-8 sm:mb-10 md:mb-12">
                <div className="body-base sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black font-dm-sans">
                    <span>2/3</span>
                </div>
                <button
                    className="min-w-0.5 bg-gray-200 text-gray-800 py-2 px-2 sm:py-4 md:py-5 rounded-4xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-200 active:scale-95 font-dm-sans"
                >
                    Save & exit
                </button>
            </div>

            {/* Grid Container */}
            <div className="flex-1 items-center pt-3">
                <div className="text-left">
                    <h1 className="text-2xl font-bold text-black leading-tight px-4 font-dm-sans">
                        What are you looking for ?
                    </h1>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center flex-shrink-0 mb-5 p-4 sm:px-6 md:px-8 pb-3 sm:pb-8 md:pb-10">
                <button
                    className="min-w-0.5 text-gray-800 py-2 px-2 sm:py-4 md:py-5 rounded-4xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-200 active:scale-95 font-dm-sans"
                >
                    Go back
                </button>
                <button
                    className="min-w-18 bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 sm:py-4 md:py-5 rounded-4xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-200 active:scale-95 font-dm-sans"
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export default OnboardingServicesScreen