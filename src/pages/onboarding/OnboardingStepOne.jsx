import { useState } from "react";
import TopNavigation from "../../components/TopNavigation";
import InputSearch from "../../components/InputSearch";
import LocationMap from "../../components/LocationMap";
import BottomNavigation from "../../components/BottomNavigation";

export default function OnboardingStepOne() {
  const [position, setPosition] = useState([45.7772, 3.0870]); // Position initiale (Clermont-Ferrand)

  // Fonction de recherche (utilise Nominatim pour géocoder)
  const handleSearch = async (query) => {
    if (!query) return;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data && data[0]) {
      setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between">
      <TopNavigation step="1/3" onSave={() => alert('Save & exit')} />
      <div className="flex flex-col gap-6 w-full max-w-md px-4 py-3">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-bold text-[#1b181b] text-2xl">Is this your location?</h1>
          <p className="text-[#6b5d6c] text-sm">Results will be shown within 15km, and you can change this anytime.</p>
        </div>
        <InputSearch placeholder="Search here" onSearch={handleSearch} />
        <LocationMap position={position} onMove={pos => setPosition([pos.lat, pos.lng])} />
        <div className="bg-white shadow rounded-2xl p-3 flex items-center gap-2 w-full mt-4">
          <span className="font-semibold text-[#1b181b] text-sm">22 Avenue Bergougnan, 63400 Chamalières, France</span>
        </div>
      </div>
      <BottomNavigation onBack={() => alert('Go back')} onNext={() => alert('Next step')} />
    </div>
  );
}
