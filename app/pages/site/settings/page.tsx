'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Typography, Box, Card as MuiCard, CardContent } from '@mui/material';
import Cookies from 'js-cookie';
import UserCard from '@/app/components/ui/Seguidores/card'; // Asegúrate de importar UserCard
import Logout from '@/app/components/ui/Login_Logout/LogoutButton';

const Settings = () => {
    // app/types.ts
    interface User {
        id: number;
        name: string;
        email: string;
        is_following: boolean;
        profile_image?: string;
        following: FollowedUser[]; // Cambia a FollowedUser[]
        posts_count: number;
    }

    interface FollowedUser {
        id: number;
        name: string;
        email: string;
        is_following: boolean;
        profile_image?: string;
    }

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.LARAVEL}/api/settings`, {
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

        fetchUser();
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

    if (!user) {
        return (
            <Box className="flex justify-center items-center min-h-screen">
                <Typography color="error">No se pudo cargar la información del usuario.</Typography>
            </Box>
        );
    }

    return (
        <Container className="mt-10">
            <MuiCard>
                <CardContent>
                    <Typography variant="h4" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Email: {user.email}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Publicaciones subidas: {user.posts_count}
                    </Typography>
                    <Typography variant="h5" className="mt-4">
                        Usuarios Seguidos
                    </Typography>
                    {user.following && user.following.length > 0 ? (
                        user.following.map((followedUser: FollowedUser) => (
                            <UserCard
                                key={followedUser.id}
                                user={followedUser}
                                onFollowToggle={(userId, isFollowing) => {
                                    // Lógica para seguir o dejar de seguir
                                }}
                            />
                        ))
                    ) : (
                        <Typography variant="body1" color="text.secondary">
                            No estás siguiendo a ningún usuario.
                        </Typography>
                    )}
                </CardContent>
            </MuiCard>
            <Logout />
        </Container>
    );
};

export default Settings;
