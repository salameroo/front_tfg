import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import LocationPicker from '../maps/locationPicker';
import SearchBox from '../maps/search';
import { LatLngLiteral } from 'leaflet';

export default function CreatePostPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag_ppl: '',
        location: '',
        alias: '',
    });
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mapOpen, setMapOpen] = useState(false);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [center, setCenter] = useState<LatLngLiteral>({ lat: 51.505, lng: -0.09 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === 'images' && files) {
            const totalImages = images.length + files.length;
            if (totalImages > 10) {
                setError('No se pueden subir más de 10 imágenes.');
                return;
            }
            setLoading(true);
            setConfirmation(false);
            setError(null);
            const newImages: File[] = Array.from(files);
            const newImagePreviews: string[] = newImages.map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImages]);
            setImagePreviews(prevPreviews => [...prevPreviews, ...newImagePreviews]);
            setLoading(false);
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Attempting to submit post");

        let token = Cookies.get('auth_token');
        setLoading(true);
        setConfirmation(false);
        setError(null);

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('tag_ppl', formData.tag_ppl);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('alias', formData.alias);
        if (latitude) formDataToSend.append('latitude', latitude.toString());
        if (longitude) formDataToSend.append('longitude', longitude.toString());

        images.forEach((image, index) => {
            formDataToSend.append('images[]', image, image.name);
        });

        try {
            const response = await fetch(`${process.env.LARAVEL}/api/postnuevopublicacion`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include',
                body: formDataToSend,
            });

            console.log("Response status:", response.status);

            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message || 'Error al crear la publicación');
            }

            setConfirmation(true);
            setLoading(false);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            setLoading(false);
        }
    };



    const handleLocationSelected = (latlng: LatLngLiteral, displayName: string) => {
        setLatitude(latlng.lat);
        setLongitude(latlng.lng);
        setCenter(latlng);
        setFormData(prevData => ({
            ...prevData,
            location: displayName
        }));
    };

    return (
        <div className="max-w-md mx-auto p-2 min-h-screen sm:h-dvh flex flex-col">
            <h1 className="text-black font-bold text-center mt-8 mb-2 font-sans text-2xl dark:text-white">Nuevo Post</h1>
            <form onSubmit={handleSubmit} className="flex-1 overflow-auto">
                <div className="mb-4">
                    <label htmlFor="images" className="block text-gray-700 font-semibold mb-4">Imágenes</label>
                    <label className="bg-black dark:text-black dark:bg-green-400 text-white font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200 ease-in-out w-full text-center">
                        Subir Imágenes
                        <input type="file" id="images" name="images" accept="image/*" multiple style={{ display: 'none' }} onChange={handleChange} />
                    </label>
                    {loading && <div className="text-center mt-2">Cargando...</div>}
                    {imagePreviews.length > 0 && !loading && (
                        <div className="mt-2">
                            {imagePreviews.map((preview, index) => (
                                <img key={index} src={preview} alt="Preview" className="rounded-md border mb-2" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                            ))}
                        </div>
                    )}
                    {error && <div className="text-red-500 text-center mt-2">{error}</div>}
                    {confirmation && <div className="text-green-500 text-center mt-2">Las imágenes se han cargado correctamente. Post publicado</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold">Título</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="text-black mt-1 p-2 border rounded-md w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="tag_ppl" className="block text-gray-700 font-semibold">Etiqueta Personas</label>
                    <input type="text" id="tag_ppl" name="tag_ppl" value={formData.tag_ppl} onChange={handleChange} className="text-black mt-1 p-2 border rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-semibold">Descripción</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} className="text-black mt-1 p-2 border rounded-md w-full"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 font-semibold">Ubicación</label>
                    <input type="text" id="location" name="location" value={formData.location} readOnly className="text-black mt-1 p-2 border rounded-md w-full" hidden />
                    <Button onClick={() => setMapOpen(true)} className="mt-2 p-2 bg-yellow-500 text-white rounded-md">Seleccionar Ubicación</Button>
                </div>
                <Button type="submit" className="bg-black dark:bg-green-400 dark:text-black hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-4 mt-2 w-full">
                    Publicar
                </Button>
                <div className='p-8'>
                    <h1> </h1>
                </div>
            </form>

            <Dialog open={mapOpen} onClose={() => setMapOpen(false)} fullWidth maxWidth="md">
                <DialogTitle className='p-0 flex items-center justify-center mt-2'>Selecciona la Ubicación</DialogTitle>
                <DialogContent>
                    <SearchBox onLocationSelected={handleLocationSelected} />
                    <LocationPicker onLocationSelected={handleLocationSelected} center={center} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setMapOpen(false)} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
