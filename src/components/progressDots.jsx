const ProgressDots = ({ total, current, onDotClick, className = "" }) => (
  <div className={`flex items-center justify-center space-x-2 ${className}`}>
    {Array.from({ length: total }, (_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`rounded-full transition-all duration-500 ease-out hover:opacity-80 ${
          index === current
            ? 'w-4 h-2 bg-pink-500 transform scale-105' // Active
            : 'w-2 h-2 bg-pink-300 hover:bg-gray-400' // Inactive
        }`}
      />
    ))}
  </div>
)

export default ProgressDots;