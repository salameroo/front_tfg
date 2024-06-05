// SinglePost.tsx o el archivo donde esté definido SinglePost
import React, { useEffect, useState, FormEvent } from 'react';
import Cookies from 'js-cookie';
import Slider from 'react-slick';
import { IconButton, TextField, CircularProgress, Box, Typography, Modal } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    user?: User;
    text: string;
    created_at: string;
}

interface Image {
    id: number;
    post_id: number;
    url: string;
    created_at: string;
    updated_at: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    images: Image[];
    user_id: number;
    user: User;
    created_at: string;
    likes: Like[];
    comments: Comment[];
}

interface SinglePostProps {
    postId: number;
    isOpen: boolean;
    onClose: () => void;
}

const SinglePostMalone: React.FC<SinglePostProps> = ({ postId, isOpen, onClose }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);

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
        const fetchPost = async () => {
            try {
                const response = await fetch(`${process.env.LARAVEL}/api/posts/${postId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('auth_token')}`
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }

                const data: Post = await response.json();
                setPost(data);
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
            fetchPost();
        }
    }, [userId, postId]);

    const handleLike = async () => {
        if (!post) return;

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
            const updatedLikes = result.liked
                ? [...post.likes, { id: Date.now(), user_id: userId!, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]
                : post.likes.filter(like => like.user_id !== userId);
            setPost({ ...post, likes: updatedLikes });
        } catch (error) {
            console.error('Error liking/unliking the post:', error);
        }
    };

    const handleComment = async (commentText: string) => {
        if (!post) return;

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
            setPost({ ...post, comments: [...post.comments, newComment] });
        } catch (error) {
            console.error('Error commenting on the post:', error);
        }
    };

    const handleSubmitComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const commentText = formData.get('comment') as string;
        handleComment(commentText);
        e.currentTarget.reset(); // Clear the form after submitting
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

    if (!post) {
        return <div>Post not found</div>;
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
        <Modal open={isOpen} onClose={onClose} aria-labelledby="post-modal-title" aria-describedby="post-modal-description">
            <Box className="post-details" sx={{ p: 4, maxWidth: 800, margin: 'auto', bgcolor: 'background.paper', boxShadow: 24, borderRadius: 2 }}>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="mb-2">{post.content}</p>
                {post.images.length > 0 && (
                    <Slider {...sliderSettings}>
                        {post.images.map((image, index) => (
                            <div key={index} className="relative w-full h-96">
                                <img
                                    src={`${process.env.LARAVEL}` + image.url}
                                    alt={post.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                                />
                            </div>
                        ))}
                    </Slider>
                )}
                <small className="block mb-2 text-gray-600">Por: {post.user?.name || 'Usuario Desconocido'} el {new Date(post.created_at).toLocaleString()}</small>
                <div className="flex items-center mb-4">
                    <IconButton onClick={handleLike}>
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
                    <form onSubmit={handleSubmitComment}>
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
            </Box>
        </Modal>
    );
};

export default SinglePostMalone;