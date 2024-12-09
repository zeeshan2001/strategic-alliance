import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GeoChart = () => {
  return (
    <div style={{ height: "600px" }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>London</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GeoChart;
