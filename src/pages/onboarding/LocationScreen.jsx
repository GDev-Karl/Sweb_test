import React, { useState } from 'react';

// Import des composants modulaires
import TopNavigation from '../../components/TopNavigation';
import InputSearch from '../../components/InputSearch';
import LocationMap from '../../components/LocationMap';
import BottomNavigation from '../../components/BottomNavigation';

const LocationScreen = () => {

  // États
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [debugMode, setDebugMode] = useState(true);

  // État pour l'emplacement sélectionné
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 45.7797,
    lng: 3.0959,
    address: '22 Avenue Bergougnan',
    city: 'Chamalières, France',
  });

  // Gestion de la recherche d'adresse
  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const result = data[0];
        const newLocation = {
          lat: parseFloat(result.lat),
          lng: parseFloat(result.lon),
          address: result.display_name.split(',').slice(0, 2).join(',').trim(),
          city: result.display_name.split(',').slice(2).join(',').trim(),
        };
        setSelectedLocation(newLocation);
      }
    } catch (error) {
      console.error("Address search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // Gestion du clic sur "Sauvegarder et quitter"
  const handleSaveExit = () => {
    // Logique de sauvegarde avant de quitter
    navigate('/');
  };

  // Gestion du bouton Retour
  const handleBack = () => {
    navigate('/login');
  };

  // Gestion du bouton Suivant
  const handleNext = async () => {
    if (debugMode) {
      navigate('/services');
      return;
    }

    const locationData = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
      address: selectedLocation.address,
      city: selectedLocation.city,
    };

    try {
      const response = await fetch('http://votre-api.com/api/save-location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Location saved successfully:', result);
        navigate('/services');
      } else {
        console.error('Error saving location:', response.statusText);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Connexion impossible. Vérifiez votre connexion Internet.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation du haut */}
      <TopNavigation
        currentStep={1}
        totalSteps={3}
        onSaveExit={handleSaveExit}
      />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* En-tête et barre de recherche */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-4 sm:pb-6">
          <div className="max-w-md mx-auto lg:max-w-none">
            <h2 className="flex justify-start text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Is this your location?
            </h2>
            <p className=" felx justify-start text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Results will be shown within 15km, and you can change this anytime.
            </p>

            {/* Barre de recherche */}
            <InputSearch
              value={searchQuery}
              onChange={setSearchQuery}
              onSubmit={handleSearch}
              disabled={isSearching}
              placeholder={"Search here"}
            />
          </div>
        </div>

        {/* Conteneur de la carte */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 min-h-0">
          <div className="h-full max-w-md mx-auto lg:max-w-none">
            <LocationMap
              location={selectedLocation}
              onLocationChange={setSelectedLocation}
              className="w-full h-full min-h-[300px] sm:min-h-[400px]"
              height="100%"
            />
          </div>
        </div>
      </div>

      {/* Navigation du bas */}
      <BottomNavigation
        onBack={handleBack}
        onNext={handleNext}
        progress={33}
        nextDisabled={!selectedLocation || isSearching}
      />
    </div>
  );
};

export default LocationScreen;