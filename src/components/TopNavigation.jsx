import React from "react";

export default function TopNavigation({ step = "1/3", onSave }) {
  return (
    <div className="flex flex-col gap-2 items-center w-full px-4 py-3" data-name="Navigation/Top Navigation">
      <div className="flex gap-2 h-10 items-center w-full">
        <div className="flex flex-col font-semibold grow text-[#1b181b] text-base">
          <p className="leading-5">{step}</p>
        </div>
        <div className="flex gap-2 items-center justify-end">
          <button className="bg-[#f5f4f5] flex items-center px-4 py-2 rounded-full font-semibold text-[#1b181b] text-sm" onClick={onSave}>
            Save & exit
          </button>
        </div>
      </div>
    </div>
  );
}
