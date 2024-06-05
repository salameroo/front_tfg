'use client';
import React, { useState, useEffect } from 'react';
import UserCard from '../Seguidores/card';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Cookies from 'js-cookie';
import User from '../Seguidores/type';

export function Aside() {
    const [isActive, setIsActive] = useState(false);
    const [personas, setPersonas] = useState<User[]>([]);

    // Función para cerrar el aside
    const closeAside = () => {
        setIsActive(false);
    };

    const openAside = () => {
        setIsActive(true);
    };

    // Función para obtener personas aleatorias de la base de datos
    const fetchPersonas = async () => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/random-personas`);
            const data = await response.json();
            setPersonas(data);
        } catch (error) {
            console.error('Error fetching personas:', error);
        }
    };

    useEffect(() => {
        fetchPersonas();
    }, []);

    const handleFollowToggle = async (userId: number, isFollowing: boolean) => {
        try {
            const url = isFollowing
                ? `${process.env.LARAVEL}/api/unfollow`
                : `${process.env.LARAVEL}/api/follow`;
            const method = 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: JSON.stringify({ user_id: userId })
            });

            if (!response.ok) {
                const res = await response.json();
                console.error('Failed to toggle follow status:', res.message);
                return;
            }

            setPersonas(personas.map(persona =>
                persona.id === userId ? { ...persona, is_following: !isFollowing } : persona
            ));
        } catch (error) {
            console.error('An error occurred while toggling follow status:', error);
        }
    };

    return (
        <aside className="hidden md:block">
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 mr-6">
                <button onClick={openAside} className={`bg-blue-500 rounded-full p-1 text-white ${isActive ? 'hidden' : 'block'}`}>
                    <ArrowBackIosIcon />
                </button>
            </div>
            <div className={`bg-gray-400 p-4 fixed right-0 top-0 h-full w-1/6 transform ${isActive ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <button onClick={closeAside} className="text-black absolute top-4 right-4">
                    <CloseIcon />
                </button>
                <h2 className="text-lg font-semibold mb-4">Personas sugeridas</h2>
                {personas.map((persona) => (
                    <UserCard
                        key={persona.id}
                        user={persona}
                        onFollowToggle={handleFollowToggle}
                    />
                ))}
            </div>
        </aside>
    );
}
