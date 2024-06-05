// components/MessageCard.tsx

import React from 'react';
import { Message } from '@/components/Seguidores/type';

interface MessageCardProps {
    message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
    return (
        <div key={message.id} className="mb-2 p-2 border rounded-lg w-full bg-gray-400">
            <p>
                <strong>{message.sender_name}</strong> {message.message}
                
            </p>
            <p className="text-sm text-gray-500">{new Date(message.created_at).toLocaleString()}</p>
        </div>
    );
};

export default MessageCard;
