'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Typography, Box, Card as MuiCard, CardContent } from '@mui/material';
import Cookies from 'js-cookie';
import UserCard from '@/app/components/ui/Seguidores/card';
import ProfilePhoto from './userProfile';
import Image from 'next/image';

interface User {
    id: number;
    name: string;
    email: string;
    profile_image?: string;
    is_following: boolean; // No puede ser undefined
}

interface UserType extends User {
    posts_count: number;
    following: Array<User>;
}

const Settings = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const defaultProfileImage = 'https://i.imgur.com/1i2fcbF.png';

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

    const profileImage = user?.profile_image ? `${process.env.LARAVEL_STORAGE}/${user.profile_image}` : defaultProfileImage;

    return (
        <Container className="mt-10">
            <MuiCard>
                <CardContent>
                    <Box className="mt-4">
                        <Image
                            src={profileImage}
                            alt="Profile"
                            width={128}
                            height={128}
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </Box>
                    <Typography variant="h4" component="div">
                        {user?.name ?? 'Usuario Desconocido'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Email: {user?.email ?? 'No disponible'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Publicaciones subidas: {user?.posts_count ?? 0}
                    </Typography>
                    <ProfilePhoto />
                    <Typography variant="h5" className="mt-4">
                        Usuarios Seguidos
                    </Typography>
                    {user?.following && user.following.length > 0 ? (
                        user.following.map(followedUser => (
                            <UserCard
                                key={followedUser.id}
                                user={{
                                    ...followedUser,
                                    is_following: followedUser.is_following ?? false // Asegurar que is_following no sea undefined
                                }}
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
        </Container>
    );
};

export default Settings;
