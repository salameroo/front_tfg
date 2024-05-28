import React, { useState } from 'react';

export default function NewMessageForm({ onSend }) {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    );
}
