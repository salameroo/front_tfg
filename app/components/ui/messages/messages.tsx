import MessageCard from './messageCard';
import React, { useState, useEffect, FormEvent, Fragment } from 'react';
import Cookies from 'js-cookie';
import { Dialog, Transition } from '@headlessui/react';
import { Close } from '@mui/icons-material';
import { Button, TextField, Box, CircularProgress, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Message, UserDos } from '@/app/components/ui/Seguidores/type';

const Messages: React.FC = () => {
    const [conversations, setConversations] = useState<UserDos[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState<UserDos | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchConversations();
    }, []);

    const fetchConversations = async () => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/conversations`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch conversations');
            }
            const data = await response.json();

            if (Array.isArray(data)) {
                setConversations(data);
            } else {
                throw new Error('Unexpected response format');
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

    const fetchMessages = async (userId: number) => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/messages/${userId}`, {
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

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (selectedUser === null || newMessage.trim() === '') return;

        try {
            const response = await fetch(`${process.env.LARAVEL}/api/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: JSON.stringify({ receiver_id: selectedUser.id, message: newMessage }),
            });

            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.message || 'Failed to send message');
            }

            const messageData: Message = await response.json();
            setMessages([...messages, messageData]);
            setNewMessage('');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    const openModal = (user: UserDos) => {
        setSelectedUser(user);
        fetchMessages(user.id);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedUser(null);
        setMessages([]);
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

    return (
        <div className="p-4">MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button css-bshv44-MuiButtonBase-root-MuiListItem-root
            <List>
                {Array.isArray(conversations) && conversations.map((user) => (
                    <ListItem button key={user.id} onClick={() => openModal(user)}>
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))}
            </List>

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
                                        Chat with {selectedUser?.name}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="mb-4">
                                            {messages.map((msg) => (
                                                <div key={msg.id} className="mb-2 p-2 border rounded-lg">
                                                    <p>
                                                        <strong>{msg.sender_id === selectedUser?.id ? selectedUser.name : 'You'}:</strong> {msg.message}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleString()}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <form onSubmit={handleSendMessage} className="space-y-4">
                                            <TextField
                                                label="Escribe tu mensaje"
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
