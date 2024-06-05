import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';
import SinglePost from './postAlone'; // Asegúrate de importar el componente
import { Button, Box } from '@mui/material';

interface Post {
    id: number;
    title: string;
    content: string;
    latitude?: number;
    longitude?: number;
}

interface ErrorResponse {
    message: string;
}

// Crear un contenedor HTML para el ícono de MUI
const carIconHtml = renderToStaticMarkup(<LocationOnIcon style={{ color: 'black', fontSize: '24px' }} />);

const customIcon = L.divIcon({
    html: carIconHtml,
    className: '', // Agrega clases si necesitas estilos adicionales
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const MapView = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            let token = Cookies.get('auth_token');
            try {
                setLoading(true);
                const response = await fetch(`${process.env.LARAVEL}/api/feed/mapa`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data: Post[] = await response.json();
                    setPosts(data);
                } else {
                    const errorData: ErrorResponse = await response.json();
                    setErrorMessage("Error: " + (errorData.message || 'Failed to fetch posts.'));
                }
                setLoading(false);
            } catch (e) {
                setErrorMessage("An error occurred while processing your request.");
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleMarkerClick = (post: Post) => {
        setSelectedPost(post);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <MapContainer center={[42.1399, 0.3379]} zoom={13} style={{ height: "600px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                        />
                        <Marker position={[42.1399, 0.3379]} icon={customIcon} eventHandlers={{ click: () => handleMarkerClick({ id: 0, title: 'Torres del Obispo', content: 'This is Torres del Obispo', latitude: 42.1399, longitude: 0.3379 }) }}>
                            <Popup>
                                <b>Torres del Obispo</b>
                            </Popup>
                        </Marker>
                        {posts.map(post => (
                            <Marker key={post.id} position={[post.latitude!, post.longitude!]} icon={customIcon} eventHandlers={{ click: () => handleMarkerClick(post) }}>
                                <Popup>
                                    <b>{post.title}</b>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                    {selectedPost && (
                        <Box mt={2}>
                            <h2>{selectedPost.title}</h2>
                            <p>{selectedPost.content}</p>
                            <Button onClick={openModal} variant="contained" color="primary">
                                Abrir Post
                            </Button>
                        </Box>
                    )}
                    {selectedPost && (
                        <SinglePost postId={selectedPost.id} isOpen={modalIsOpen} onClose={closeModal} />
                    )}
                </>
            )}
        </div>
    );
};

export default MapView;
