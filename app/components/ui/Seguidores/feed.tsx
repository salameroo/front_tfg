import { useEffect, useState, FormEvent } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { Button, IconButton, TextField, CircularProgress, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

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
}

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
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
                    likes: result.liked ? [...post.likes, { id: Date.now(), post_id: postId, user_id: userId!, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]
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

    if (loading) {
        return (
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
                <Typography variant="body1" style={{ marginLeft: '10px' }}>Cargando...</Typography>
            </Box>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (message) {
        return <div>{message}</div>;
    }

    return (
        <div>
            <h1 className="text-center mx-auto mb-2 mt-0 text-black dark:text-white text-3xl md:text-4xl font-bold decoration-indigo-500 dark:decoration-indigo-300 text-shadow-lg">
                Your Feed
            </h1>
            <ul>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <li key={post.id} className="mb-6 p-4 bg-white rounded shadow-md">
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="mb-2">{post.content}</p>
                            {post.images && post.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={post.title}
                                    width={300}
                                    height={300}
                                    className="mb-2 rounded"
                                />
                            ))}
                            <small className="block mb-2 text-gray-600">By User {post.user_id} on {new Date(post.created_at).toLocaleString()}</small>
                            <div className="flex items-center mb-4">
                                <IconButton
                                    onClick={() => handleLike(post.id)}
                                >
                                    <FavoriteIcon color={post.likes.some(like => like.user_id === userId) ? "error" : "secondary"} />
                                </IconButton>
                                <span>{post.likes.length} Likes</span>
                                <IconButton>
                                    <CommentIcon />
                                </IconButton>
                                <span>{post.comments.length} Comments</span>
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
                                    <Button type="submit" variant="contained" color="primary">
                                        Comment
                                    </Button>
                                </form>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </ul>
        </div>
    );
};

export default Feed;
