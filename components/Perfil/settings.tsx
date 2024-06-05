import React, { useEffect, useState } from 'react';
import {
    CircularProgress,
    Container,
    Typography,
    Box,
    Card as MuiCard,
    CardContent,
    Button,
    List,
    ListItem,
    ListItemText,
    Avatar,
    IconButton,
} from '@mui/material';
import Cookies from 'js-cookie';
import UserCard from '@/components/Seguidores/card';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';

interface User {
    id: number;
    name: string;
    email: string;
    profile_photo?: string;
    is_following: boolean;
}

interface UserType extends User {
    posts_count: number;
    following: Array<User>;
    followers_count: number;  // Asegúrate de que esta propiedad esté definida en tu API
}

interface Post {
    id: number;
    title: string;
    description: string;
}

const Settings = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const defaultProfileImage = 'https://i.imgur.com/1i2fcbF.png';

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.LARAVEL}/api/ajustes`, {
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

                const data: UserType = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
                setLoading(false);
            }
        };

        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.LARAVEL}/api/user/posts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('auth_token')}`
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data: Post[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchUser();
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <Box className="flex justify-center items-center min-h-screen">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box className="flex justify-center items-center min-h-screen">
                <Typography color="error">Error: {error}</Typography>
            </Box>
        );
    }

    const profileImage = user?.profile_photo ? user.profile_photo : defaultProfileImage;

    return (
        <Container className="mt-10">
            <MuiCard className="p-4 shadow-md mb-4">
                <CardContent className="flex items-center justify-between">
                    <Box className="flex items-center">
                        <Avatar
                            src={profileImage}
                            alt="Profile"
                            sx={{ width: 64, height: 64 }}
                        />
                        <Box className="ml-4">
                            <Typography variant="h5">
                                {user?.name ?? 'Usuario Desconocido'}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Email: {user?.email ?? 'No disponible'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex items-center flex-col">
                        <Box className="flex items-center flex-row">
                            <Button className="mr-4">
                                Seguidores: {user?.followers_count ?? 0}
                            </Button>
                            <Button className="mr-4">
                                Siguiendo: {user?.following.length ?? 0}
                            </Button>
                        </Box>
                        <Button variant="outlined" onClick={() => alert('Manejar seguidores y seguidos')}>
                            Manejar Seguidores
                        </Button>
                    </Box>
                </CardContent>
            </MuiCard>
            <Typography variant="h4" component="div" className="text-center mt-4">
                Publicaciones subidas
            </Typography>
            <List>
                {posts.map(post => (
                    <ListItem key={post.id}>
                        <ListItemText
                            primary={post.title}
                            secondary={post.description}
                        />
                        <IconButton
                            edge="end"
                            aria-label="edit"
                            onClick={() => {
                                // Lógica para editar la publicación
                                alert(`Editar publicación ${post.id}`);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Settings;
