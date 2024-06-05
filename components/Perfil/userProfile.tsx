import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Container, Typography, Box, Card as MuiCard, CardContent } from '@mui/material';
import Cookies from 'js-cookie';

interface UserType {
    name: string;
    email: string;
    profile_image?: string;
    posts_count: number;
    following: Array<FollowedUserType>;
    is_following?: boolean;
}

interface FollowedUserType {
    id: number;
    name: string;
    // Otros campos relevantes para los usuarios seguidos
}

const ProfilePhoto = () => {
    const [user, setUser] = useState<null | UserType>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    const [profileImage, setProfileImage] = useState<null | File>(null);
    const [uploading, setUploading] = useState(false);

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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfileImage(e.target.files[0]);
        }
    };

    const handleImageUpload = async () => {
        if (!profileImage) return;

        setUploading(true);

        const formData = new FormData();
        formData.append('profile_image', profileImage);

        try {
            const response = await fetch(`${process.env.LARAVEL}/api/user/profile-image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            setUser(prevState => {
                if (!prevState) {
                    return {
                        name: '',
                        email: '',
                        posts_count: 0,
                        following: [],
                        profile_image: data.profile_image,
                    };
                }

                return {
                    ...prevState,
                    profile_image: data.profile_image
                };
            });
            setUploading(false);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
            setUploading(false);
        }
    };

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

    return (
        <Container className="mt-10">
            <MuiCard>
                <CardContent>
                    <Box className="mt-4">
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        <Button onClick={handleImageUpload} variant="contained" color="primary" disabled={uploading}>
                            {uploading ? <CircularProgress size={24} /> : 'Subir Imagen'}
                        </Button>
                    </Box>
                </CardContent>
            </MuiCard>
        </Container>
    );
};

export default ProfilePhoto;
