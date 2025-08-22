import React from 'react';

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);


const InputSearch = ({ 
  value, 
  onChange, 
  onSubmit, 
  placeholder,
  disabled = false 
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && value.trim()) {
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none z-10">
        <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder={placeholder || t('location_screen.search_here')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full h-12 sm:h-14 pl-12 sm:pl-14 pr-4 sm:pr-5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        style={{ fontSize: '16px' }} // Prevents zoom on iOS
      />
      <button type="submit" className="sr-only">
        Rechercher
      </button>
    </form>
  );
};

export default InputSearch;