// Barre de navigation inférieure

const img3 = "http://localhost:3845/assets/7c7a7311d30c24a8a49007477866958664080400.svg";

export default function BottomNavigation({ onBack, onNext }) {
  return (
    <div className="flex flex-col items-start w-full max-w-md">
      <div className="bg-[#e9e7e9] w-full h-1.5" />
      <div className="bg-white flex items-center justify-between px-4 py-3 w-full">
        <button className="flex items-center gap-2 px-0 py-0.5 rounded" onClick={onBack}>
          <img src={img3} alt="back" className="w-5 h-5" />
          <span className="font-semibold text-[#1b181b] text-base">Go back</span>
        </button>
        <button className="flex items-center gap-2 h-12 px-6 py-3 rounded-full font-semibold text-white text-base bg-gradient-to-r from-[#ff7c44] via-[#fe536c] to-[#fd2a94]" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
