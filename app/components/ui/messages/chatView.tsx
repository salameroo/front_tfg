import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Button, TextField, Box, CircularProgress, Typography } from '@mui/material';
import { Message } from '@/app/components/ui/Seguidores/type';

const ChatView: React.FC = () => {

    const router = useRouter()

    const { chatId } = router.query

    // const { chatId } = useParams<{ chatId: string }>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMessages();
    }, [chatId]);

    const fetchMessages = async () => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/messages/${chatId}`, {
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

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        try {
            const response = await fetch(`${process.env.LARAVEL}/api/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: JSON.stringify({ receiver_id: chatId, message: newMessage }),
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
            <div className="mb-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="mb-2 p-2 border rounded-lg">
                        <p>
                            <strong>{msg.sender_name}</strong> {msg.message}
                        </p>
                        <p className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage}>
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
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ChatView;
