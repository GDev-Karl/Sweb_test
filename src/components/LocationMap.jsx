// LocationMap.jsx
// Carte Leaflet réutilisable et personnalisable
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const pinIcon = new L.Icon({
  iconUrl: "http://localhost:3845/assets/c8d50054ca31df443b864aa8164872908c6ef794.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function LocationMap({ position, onMove }) {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-full h-64 rounded-2xl">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={pinIcon} draggable={true} eventHandlers={{ dragend: (e) => onMove(e.target.getLatLng()) }}>
        <Popup>Drag the map to relocate</Popup>
      </Marker>
    </MapContainer>
  );
}
