import React from 'react';

export default function MessageWindow({ messages }) {
    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <strong>{message.sender}</strong>: {message.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
