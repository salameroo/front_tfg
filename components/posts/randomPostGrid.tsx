import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Box, Grid, Modal, CircularProgress, Typography } from '@mui/material';
import SinglePost from './postAlone';

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
    created_at: string;
    likes: Like[];
    comments: Comment[];
}

const RandomPostsGrid = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const postIds = new Set<number>(); // Set para almacenar IDs de posts

    useEffect(() => {
        const fetchPosts = async (page: number) => {
            let token = Cookies.get('auth_token');
            try {
                setLoading(true);
                const response = await fetch(`${process.env.LARAVEL}/api/random-posts?page=${page}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Data received:', data);
                    if (data.data.length > 0) {  // Asegúrate de que los datos están en el formato correcto
                        const uniquePosts = data.data.filter((post: Post) => !postIds.has(post.id));
                        uniquePosts.forEach((post: Post) => postIds.add(post.id));
                        setPosts(prevPosts => {
                            // Limita a mostrar solo 10 posts inicialmente
                            const newPosts = [...prevPosts, ...uniquePosts];
                            return newPosts.length > 12 ? newPosts.slice(0, 12) : newPosts;
                        });
                    } else {
                        setHasMore(false);
                    }
                } else {
                    const errorData = await response.json();
                    console.error('Error fetching posts:', errorData);
                    setError("Error: " + (errorData.message || 'Failed to fetch posts.'));
                }
                setLoading(false);
            } catch (e) {
                console.error('Exception occurred:', e);
                setError("An error occurred while processing your request.");
                setLoading(false);
            }
        };

        if (hasMore) {
            fetchPosts(page);
        }
    }, [page, hasMore]);

    const handleScroll = () => {
        if (loading || window.scrollY + window.innerHeight < document.documentElement.scrollHeight) return;
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    const openModal = (post: Post) => {
        setSelectedPost(post);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedPost(null);
    };

    return (
        <Box p={4}>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
            <Grid container spacing={4}>
                {posts.map(post => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                        <Box onClick={() => openModal(post)} className="post-thumbnail" sx={{ cursor: 'pointer', position: 'relative', paddingBottom: '100%', overflow: 'hidden', borderRadius: 2, boxShadow: 1 }}>
                            {post.images.length > 0 && (
                                <img
                                    src={`${process.env.LARAVEL}` + post.images[0].url}
                                    alt={post.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            )}
                            <Typography variant="h6" className="post-title" sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', textAlign: 'center' }}>
                                {post.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {loading && <CircularProgress />}
            {selectedPost && (
                <SinglePost postId={selectedPost.id} isOpen={modalIsOpen} onClose={closeModal} />
            )}
        </Box>
    );
};

export default RandomPostsGrid;
