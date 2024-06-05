import React, { useState, useEffect, useRef } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import UserCard from './card';

interface User {
    id: number;
    name: string;
    email: string;
    is_following: boolean;
}

interface SearchBarDosProps {
    setResults: React.Dispatch<React.SetStateAction<User[]>>;
}

const SearchBarDos: React.FC<SearchBarDosProps> = ({ setResults }) => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const trimmedQuery = query.trim();
                if (trimmedQuery.length === 0) {
                    setUsers([]);
                    setResults([]);
                    return;
                }

                const response = await fetch(`${process.env.LARAVEL}/api/users/search?query=${trimmedQuery}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('auth_token')}`
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch search results');
                }

                const data = await response.json();
                setUsers(data.users);
                setResults(data.users);
            } catch (error) {
                console.error('An error occurred while searching:', error);
            }
        };

        if (query.trim().length > 0) {
            fetchResults();
        } else {
            setResults([]);
        }
    }, [query, setResults]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

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

            setUsers(users.map(user =>
                user.id === userId ? { ...user, is_following: !isFollowing } : user
            ));
            setResults(users.map(user =>
                user.id === userId ? { ...user, is_following: !isFollowing } : user
            ));
        } catch (error) {
            console.error('An error occurred while toggling follow status:', error);
        }
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        if (resultsRef.current && resultsRef.current.contains(event.target as Node)) {
            event.preventDefault();
        }
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center py-4 w-full top-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <TextField
                value={query}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={(event) => {
                    if (resultsRef.current && !resultsRef.current.contains(event.relatedTarget as Node)) {
                        setIsFocused(false);
                    }
                }}
                placeholder="Buscar..."
                variant="outlined"
                className="w-full max-w-md"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon className="text-gray-500" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'gray',
                            borderWidth: '2px',
                            borderRadius: '0.5rem',
                        },
                        '&:hover fieldset': {
                            borderColor: 'blue',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'blue',
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '0.5rem 1rem',
                        },
                    },
                }}
            />
            {isFocused && (
                <motion.div
                    ref={resultsRef}
                    className="mt-4 w-full max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onMouseDown={handleMouseDown}
                >
                    {users.map(user => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onFollowToggle={handleFollowToggle}
                        />
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default SearchBarDos;
