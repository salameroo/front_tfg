import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvent } from 'react-leaflet';
import L, { LatLngLiteral } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa los íconos de marcador
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configura Leaflet para usar los íconos importados
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

interface LocationPickerProps {
    onLocationSelected: (latlng: LatLngLiteral, displayName: string) => void;
    center?: LatLngLiteral;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelected, center }) => {
    const markerRef = useRef<any>(null);

    const LocationMarker = () => {
        const map = useMap();

        useEffect(() => {
            if (center) {
                map.setView(center, 13);
                if (markerRef.current) {
                    markerRef.current.setLatLng(center);
                }
            }
        }, [center, map]);

        useMapEvent('click', (event) => {
            const { lat, lng } = event.latlng;
            if (markerRef.current) {
                markerRef.current.setLatLng(event.latlng);
            }
            onLocationSelected({ lat, lng }, `Lat: ${lat}, Lng: ${lng}`);
        });

        return center ? <Marker position={center} ref={markerRef} /> : null;
    };

    return (
        <MapContainer center={center || { lat: 51.505, lng: -0.09 }} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default LocationPicker;
