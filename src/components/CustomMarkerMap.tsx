"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface CustomMarker {
  position: [number, number];
  title: string;
  imageUrl: string;
}

const markers: CustomMarker[] = [
  {
    position: [25.2085, 55.2764],
    title: "Damak",
    imageUrl: "/about/map/damak-building.png",
  },
  {
    position: [25.2098, 55.2758],
    title: "Emaar",
    imageUrl: "/about/map/emaar-building.png",
  },
  {
    position: [25.2098, 55.2776],
    title: "Sobha",
    imageUrl: "/about/map/sobha-building.png",
  },
];

export default function CustomMarkerMap() {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[25.209, 55.277]}
        zoom={18}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {markers.map((marker, index) => {
          // Create custom icon for each marker
          const customIcon = L.icon({
            iconUrl: marker.imageUrl,
            iconSize: [60, 60], // size of the icon
            iconAnchor: [20, 40], // point of the icon which corresponds to marker's location
            popupAnchor: [0, -40], // where the popup opens relative to the iconAnchor
          });

          return (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>{marker.title}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
