import React, { useState } from 'react';
import './MessageInput.css';

function MessageInput() {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (message.trim() !== '') {
            console.log(message);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="message-input-container">
            <input
                className="message-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your message..."
            />
            <button className="message-send-button" onClick={handleSubmit}>Send</button>
        </div>
    );
}

export default MessageInput;
