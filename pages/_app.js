import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = () => {
  const [markers, setMarkers] = useState([]);

  const addMarker = (e) => {
    const newMarker = {
      position: e.latlng,
      name: 'New Location',
      description: 'Enter description here'
    };
    setMarkers([...markers, newMarker]);
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100vh', width: '100%' }}
      onClick={addMarker}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <h3>{marker.name}</h3>
            <p>{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
