import React, { useState, useEffect, FormEvent, Fragment } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Dialog, Transition } from '@headlessui/react';
import { Close } from '@mui/icons-material';
import { Button, TextField, Box, CircularProgress, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Message, UserDos } from '@/app/components/ui/Seguidores/type';

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [receiverId, setReceiverId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [followedUsers, setFollowedUsers] = useState<UserDos[]>([]);

    useEffect(() => {
        fetchMessages();
        fetchFollowedUsers();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/messages`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            setMessages(data);
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

    const fetchFollowedUsers = async () => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/followed-users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch followed users');
            }
            const data = await response.json();
            setFollowedUsers(data);
        } catch (error) {
            console.error('Error fetching followed users:', error);
        }
    };

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (receiverId === null || newMessage.trim() === '') return;

        try {
            const response = await fetch(`${process.env.LARAVEL}/api/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: JSON.stringify({ receiver_id: receiverId, message: newMessage }),
            });

            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message || 'Failed to send message');
            }

            const messageData: Message = await response.json();
            setMessages([...messages, messageData]);
            setNewMessage('');
            setReceiverId(null);
            closeModal();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
            setLoading(false);
        }
    };

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

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

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <div className="mb-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="mb-2 p-2 border rounded-lg">
                        <p>
                            <strong>{msg.sender.name}:</strong> {msg.message}
                        </p>
                        <p className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <Button
                onClick={openModal}
                variant="contained"
                color="primary"
            >
                New Message
            </Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        New Message
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form onSubmit={handleSendMessage} className="space-y-4">
                                            <FormControl fullWidth>
                                                <InputLabel id="receiver-label">Receiver</InputLabel>
                                                <Select
                                                    labelId="receiver-label"
                                                    value={receiverId ?? ''}
                                                    onChange={(e) => setReceiverId(Number(e.target.value))}
                                                    label="Receiver"
                                                    required
                                                >
                                                    {followedUsers.map((user) => (
                                                        <MenuItem key={user.id} value={user.id}>
                                                            {user.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                label="Write your message"
                                                value={newMessage}
                                                onChange={(e) => setNewMessage(e.target.value)}
                                                multiline
                                                rows={4}
                                                fullWidth
                                                required
                                            />
                                            <div className="mt-4 flex justify-end">
                                                <Button
                                                    type="button"
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className="ml-2"
                                                >
                                                    Send
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="absolute top-0 right-0 pt-4 pr-4">
                                        <button
                                            type="button"
                                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            <Close className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Messages;
