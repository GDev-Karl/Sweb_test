import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const createCustomIcon = () => new L.Icon({
  iconUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `)}`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
};

// Map click handler component
/*
const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      if (onMapClick) {
        onMapClick(e.latlng);
      }
    },
  });
  return null;
};
*/

// Location info overlay component
const LocationInfoOverlay = ({ location }) => (
  <div className="absolute bottom-4 left-4 right-4 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg z-[1000] transition-all duration-300 ease-in-out">
    <div className="flex items-start space-x-3">
      <div className="mt-0.5 flex-shrink-0">
        <MapPin size={18} className="text-pink-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm sm:text-base leading-tight truncate">
          {location.address}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm mt-0.5 leading-tight">
          {location.city}
        </p>
      </div>
    </div>
  </div>
);

const LocationMap = ({ 
  location, 
  onLocationChange, 
  className = "",
  height = "100%" 
}) => {
  const mapRef = useRef(null);
  const customIcon = createCustomIcon();

  // Update map center when location changes
  useEffect(() => {
    if (mapRef.current && location) {
      mapRef.current.flyTo([location.lat, location.lng], 15);
    }
  }, [location.lat, location.lng]);

  const handleMapClick = async (latlng) => {
    if (!onLocationChange) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`
      );
      const data = await response.json();
      
      const newLocation = {
        lat: latlng.lat,
        lng: latlng.lng,
        address: data.address?.road || data.display_name?.split(',')[0] || 'Unknown address',
        city: `${data.address?.city || data.address?.town || data.address?.village || 'Unknown city'}, ${data.address?.country || ''}`,
      };
      
      onLocationChange(newLocation);
    } catch (error) {
      console.error("Reverse geocoding error:", error);
    }
  };

  if (!location) {
    return (
      <div className={`bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center ${className}`}>
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 ${className}`}>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={15}
        style={{ 
          height: height, 
          width: '100%', 
          borderRadius: 'inherit'
        }}
        ref={mapRef}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker 
          position={[location.lat, location.lng]} 
          icon={customIcon} 
        />
        <MapClickHandler onMapClick={handleMapClick} />
      </MapContainer>
      
      <LocationInfoOverlay location={location} />
    </div>
  );
};

export default LocationMap;