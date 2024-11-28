import React, { useState } from 'react';
import './MessageInput.css';

function MessageInput() {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        console.log(message);
        setMessage('');
    };

    return (
        <div className="message-input-container">
            <input className='message-input'
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message..."
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
}

export default MessageInput;