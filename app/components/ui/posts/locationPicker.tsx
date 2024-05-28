import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngLiteral, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

const DynamicMapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const DynamicMarker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

interface LocationPickerProps {
    onLocationSelected: (latlng: LatLngLiteral) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelected }) => {
    const [position, setPosition] = useState<LatLngLiteral | null>(null);

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                const newPosition: LatLngLiteral = { lat: e.latlng.lat, lng: e.latlng.lng };
                setPosition(newPosition);
                onLocationSelected(newPosition);
            },
        });

        return position === null ? null : (
            <DynamicMarker position={position}></DynamicMarker>
        );
    };

    // Coordenadas de Torres del Obispo
    const defaultCenter: LatLngExpression = [42.1952, 0.4640];

    return (
        <DynamicMapContainer
            center={defaultCenter}
            zoom={12}
            style={{ height: '400px', width: '100%' }}
        >
            <DynamicTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </DynamicMapContainer>
    );
};

export default LocationPicker;
