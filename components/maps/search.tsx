import React, { useState } from 'react';
import { LatLngLiteral } from 'leaflet';

interface SearchBoxProps {
    onLocationSelected: (latlng: LatLngLiteral, displayName: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onLocationSelected }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        // Realiza la búsqueda de ubicaciones usando una API adecuada (ej. Mapbox, OpenStreetMap)
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        const data = await response.json();
        setResults(data);
    };

    const handleSelectLocation = (lat: number, lon: number, displayName: string) => {
        onLocationSelected({ lat, lng: lon }, displayName);
        setQuery(displayName);
        setResults([]);
    };

    return (
        <div>
            <form onSubmit={handleSearch} className='p-2'>
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar ubicación..."
                        className="p-2 border rounded w-full"
                    />
                    <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 p-2 bg-yellow-500 text-white rounded self-center sm:self-auto">
                        Buscar
                    </button>
                </div>
            </form>
            {results.length > 0 && (
                <ul className="mt-2 mb-2 border rounded p-2">
                    {results.map((result) => (
                        <li key={result.place_id} onClick={() => handleSelectLocation(result.lat, result.lon, result.display_name)} className="cursor-pointer p-4 hover:bg-gray-200">
                            {result.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBox;
