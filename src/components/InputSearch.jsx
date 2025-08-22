// Composant de recherche 

const img = "http://localhost:3845/assets/4f9c1bea302b2700e67c610f14e0f464a54d6c68.svg";

export default function InputSearch({ state = "Default", size = "Default", placeholder = "Search here", onSearch }) {
  return (
    <div className="bg-neutral-50 box-border flex gap-1 items-center pl-2 pr-4 py-2 rounded-full w-full relative" data-name={`State=${state}, Size=${size}`}>  
      <div aria-hidden="true" className="absolute border border-[#e9e7e9] inset-0 pointer-events-none rounded-full" />
      <button type="button" className="flex items-center justify-center p-2 rounded-full shrink-0 w-8 h-8" tabIndex={-1}>
        <img src={img} alt="search" className="w-5 h-5" />
      </button>
      <input
        type="text"
        className="flex-grow bg-transparent outline-none text-[#9d919F] text-base min-w-0"
        placeholder={placeholder}
        onKeyDown={e => e.key === 'Enter' && onSearch && onSearch(e.target.value)}
      />
    </div>
  );
}
