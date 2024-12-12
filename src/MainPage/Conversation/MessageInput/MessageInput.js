import React from 'react';
import './MessageInput.css';

function MessageInput({ value, onChange, placeholder }) {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            console.log(value); // 或者觸發父元件的送出邏輯
            onChange(''); // 清空輸入框
        }
    };

    return (
        <div className="message-input-container">
            <input
                className="message-input"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder || "Enter your message..."}
            />
        </div>
    );
}

export default MessageInput;
