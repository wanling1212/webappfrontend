import React from 'react';
import './MessageInput.css';

async function generateTrip(data) {
  const url = 'https://triplan-api.vercel.app/generate_trip';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Assuming the API returns an array of objects
    return result; // Return the list of objects
  } catch (error) {
    console.error('Error:', error);
    return []; // Return an empty array in case of error
  }
}

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
