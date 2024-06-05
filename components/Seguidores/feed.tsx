import { useEffect, useState, FormEvent } from 'react';
import Cookies from 'js-cookie';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { IconButton, TextField, CircularProgress, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'tailwindcss/tailwind.css';

interface User {
    id: number;
    name: string;
}

interface Like {
    id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
}

interface Comment {
    id: number;
    user?: User; // Hacer que el usuario sea opcional
    text: string;
    created_at: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    images: string[];
    user_id: number;
    created_at: string;
    likes: Like[];
    comments: Comment[];
    user: User;
}

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.LARAVEL}/api/user`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('auth_token')}`
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }

                const data = await response.json();
                setUserId(data.id);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await fetch(`${process.env.LARAVEL}/api/feed`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('auth_token')}`
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch feed');
                }

                const data = await response.json();
                console.log(data); // Para depuración

                if (data.message) {
                    setMessage(data.message);
                } else {
                    setPosts(data.posts || []); // Asegúrate de que sea un array
                }

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

        if (userId !== null) {
            fetchFeed();
        }
    }, [userId]);

    const handleLike = async (postId: number) => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/posts/${postId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to like/unlike the post');
            }

            const result = await response.json();
            const updatedPosts = posts.map(post =>
                post.id === postId ? {
                    ...post,
                    likes: result.liked ? [...post.likes, { id: Date.now(), user_id: userId!, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]
                        : post.likes.filter(like => like.user_id !== userId)
                } : post
            );
            setPosts(updatedPosts);
        } catch (error) {
            console.error('Error liking/unliking the post:', error);
        }
    };

    const handleComment = async (postId: number, commentText: string) => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/posts/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: JSON.stringify({ text: commentText }),
            });

            if (!response.ok) {
                throw new Error('Failed to comment on the post');
            }

            const newComment: Comment = await response.json();

            const updatedPosts = posts.map(post =>
                post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
            );
            setPosts(updatedPosts);
        } catch (error) {
            console.error('Error commenting on the post:', error);
        }
    };

    const handleSubmitComment = (postId: number) => (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const commentText = formData.get('comment') as string;
        handleComment(postId, commentText);
        e.currentTarget.reset(); // Clear the form after submitting
    };

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    if (loading) {
        return (
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
                <Typography variant="body1" className="ml-2">Cargando...</Typography>
            </Box>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (message) {
        return <div>{message}</div>;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div>
            <h1 className="text-center mx-auto mb-2 mt-0 text-black dark:text-white text-3xl md:text-4xl font-bold decoration-indigo-500 dark:decoration-indigo-300 text-shadow-lg">
                Publicaciones
            </h1>
            <ul>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <li key={post.id} className="mb-6 p-4 bg-white rounded shadow-md">
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="mb-2">{post.content}</p>
                            {post.images && post.images.length > 1 ? (
                                <Slider {...sliderSettings}>
                                    {post.images.map((image, index) => (
                                        <div key={index} className="relative w-full h-96" onClick={() => openModal(image)}>
                                            <img
                                                src={image}
                                                alt={post.title}
                                                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                post.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={post.title}
                                        className="mb-2 rounded w-full h-96 object-cover cursor-pointer"
                                        onClick={() => openModal(image)}
                                    />
                                ))
                            )}
                            <small className="block mb-2 text-gray-600">Por: {post.user?.name || 'Usuario Desconocido'} el {new Date(post.created_at).toLocaleString()}</small>
                            <div className="flex items-center mb-4">
                                <IconButton onClick={() => handleLike(post.id)}>
                                    <FavoriteIcon color={post.likes.some(like => like.user_id === userId) ? "error" : "secondary"} />
                                </IconButton>
                                <span>{post.likes.length} Likes</span>
                                <IconButton>
                                    <CommentIcon />
                                </IconButton>
                                <span>{post.comments.length} Comentarios</span>
                            </div>
                            <div>
                                {post.comments.map(comment => (
                                    <div key={comment.id} className="mb-2">
                                        <strong>{comment.user?.name || 'Unknown'}:</strong> {comment.text}
                                        <small className="block text-gray-500">{new Date(comment.created_at).toLocaleString()}</small>
                                    </div>
                                ))}
                                <form onSubmit={handleSubmitComment(post.id)}>
                                    <TextField
                                        name="comment"
                                        label="Add a comment"
                                        variant="outlined"
                                        fullWidth
                                        className="mb-2"
                                    />
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                                        Comentar
                                    </button>
                                </form>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="absolute inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white p-4 rounded shadow-lg max-h-screen overflow-y-auto flex items-center justify-center md:max-w-3xl md:w-full"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            >
                <button onClick={closeModal} className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    X
                </button>
                {selectedImage && (
                    <div className="flex items-center justify-center w-full h-full">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Feed;
