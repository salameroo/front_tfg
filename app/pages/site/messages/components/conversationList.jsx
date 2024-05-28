import React from 'react';

export default function ConversationList({ conversations, onSelect }) {
    return (
        <div>
            <h2>Conversations</h2>
            <ul>
                {conversations.map((conversation) => (
                    <li key={conversation.id} onClick={() => onSelect(conversation)}>
                        {conversation.user.name} {/* Suponiendo que cada conversación tiene información del usuario */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
