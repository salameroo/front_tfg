import { JSX, SVGProps, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function EditPostModal() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSaveChanges = () => {
        setLoading(true);
        setError(null);

        axios.post(`${process.env.LARAVEL}/api/posts`, {
            title,
            location,
            description,
            images
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                setLoading(false);
                alert('Post saved successfully!');
            })
            .catch(error => {
                setLoading(false);
                setError('Error saving post. Please try again.');
                console.error('Error saving post:', error);
            });
    };

    const handleDeleteImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const addPlaceholderImage = () => {
        setImages([...images, '/placeholder.svg']);
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSaveChanges(); }}>
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <label htmlFor="title">Título del post</label>
                        <input
                            id="title"
                            placeholder="Ingresa el título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label>Imágenes</label>
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                    <img
                                        src={image}
                                        alt={`Imagen ${index + 1}`}
                                        width={300}
                                        height={300}
                                        className="aspect-square object-cover w-full"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            type="button"
                                            className="text-white"
                                            onClick={() => handleDeleteImage(index)}
                                        >
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-200 rounded"
                                onClick={addPlaceholderImage}
                            >
                                Agregar más
                            </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="location">Ubicación</label>
                        <input
                            id="location"
                            placeholder="Ingresa la ubicación"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label>Etiquetas</label>
                        <div className="flex flex-wrap gap-2">
                            <div>
                                <TagIcon className="w-4 h-4 mr-2" />
                                Viaje
                            </div>
                            <div>
                                <TagIcon className="w-4 h-4 mr-2" />
                                Naturaleza
                            </div>
                            <div>
                                <TagIcon className="w-4 h-4 mr-2" />
                                Amigos
                            </div>
                            <div>
                                <TagIcon className="w-4 h-4 mr-2" />
                                Comida
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="px-4 py-2 bg-gray-200 rounded">
                                Agregar etiqueta
                            </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            placeholder="Escribe una descripción del post"
                            className="block w-full p-2 border border-gray-300 rounded min-h-[150px]"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
                        {loading ? 'Guardando...' : 'Publicar'}
                    </button>
                </div>
            </form>
        </div>
    );
}

function TagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
    );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}
