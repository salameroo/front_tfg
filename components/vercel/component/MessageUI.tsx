import { useState, useEffect } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/vercel/ui/avatar";
import { Input } from "@/components/vercel/ui/input";
import { Button } from "@/components/vercel/ui/button";
import Cookies from 'js-cookie';

interface User {
    id: number;
    name: string;
    avatar?: string;
}

interface Message {
    id: number;
    sender_id: number;
    receiver_id: number;
    message: string; // Actualiza la propiedad a 'message' en lugar de 'content'
    created_at: string;
}

interface MessageUIProps {
    selectedUser: User | null;
    onClose: () => void;
}

const MessageUI: React.FC<MessageUIProps> = ({ selectedUser, onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedUser) {
            const fetchMessages = async () => {
                try {
                    const response = await fetch(`${process.env.LARAVEL}/api/messages/${selectedUser.id}`, {
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
                    const data: Message[] = await response.json();
                    console.log('Fetched messages:', data); // Añadir log para verificar los datos
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

            fetchMessages();
        }
    }, [selectedUser]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedUser) return;

        try {
            console.log('Sending message:', { receiver_id: selectedUser.id, message: newMessage });
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!selectedUser) {
        return <div>No user selected</div>;
    }

    return (
        <div className="flex flex-col h-[80vh] max-w-full mx-auto border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b">
                <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage alt={`@${selectedUser.name}`} src={selectedUser.avatar || "/placeholder-user.jpg"} />
                        <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-medium">{selectedUser.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Online</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button size="icon" variant="ghost">
                        <PaperclipIcon className="w-5 h-5" />
                        <span className="sr-only">Attach file</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                        <SmileIcon className="w-5 h-5" />
                        <span className="sr-only">Send emoji</span>
                    </Button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-end gap-3 ${message.sender_id === selectedUser.id ? 'justify-start' : 'justify-end'}`}
                    >
                        {message.sender_id !== selectedUser.id && (
                            <Avatar className="w-8 h-8">
                                <AvatarImage alt={`@${selectedUser.name}`} src={selectedUser.avatar || "/placeholder-user.jpg"} />
                                <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                            </Avatar>
                        )}
                        <div
                            className={`px-4 py-2 rounded-lg max-w-[70%] ${message.sender_id === selectedUser.id ? 'bg-gray-100 dark:bg-gray-800 rounded-bl-none' : 'bg-blue-500 text-white rounded-br-none'
                                }`}
                        >
                            {message.message} {/* Actualiza la referencia aquí */}
                        </div>
                        {message.sender_id === selectedUser.id && (
                            <Avatar className="w-8 h-8">
                                <AvatarImage alt={`@${selectedUser.name}`} src={selectedUser.avatar || "/placeholder-user.jpg"} />
                                <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                            </Avatar>
                        )}
                    </div>
                ))}
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-t">
                <div className="flex items-center gap-3">
                    <Input
                        autoComplete="off"
                        className="flex-1"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button size="icon" variant="ghost" onClick={handleSendMessage}>
                        <SendIcon className="w-5 h-5" />
                        <span className="sr-only">Send message</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MessageUI;

function PaperclipIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}

function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
    );
}
