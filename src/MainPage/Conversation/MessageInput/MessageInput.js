import React, { useState } from 'react';
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

function MessageInput() {
    const [message, setMessage] = useState('');
    const data = {
      trip: {
        title: "string",
        description: "string",
        range: {
          start: "2024-12-11",
          end: "2024-12-11"
        },
        travel_plan: [
          {
            name: "string",
            address: "string",
            place_id: "string",
            time_slot: "morning",
            description: "string",
            visit_duration: 0,
            travel_time_to_prev: 0,
            travel_time_to_next: 0,
            estimate_start_time: "07:42:25.975Z",
            estimate_end_time: "07:42:25.975Z",
            reviews: ["string"],
            rating: 0,
            rating_count: 0,
            ticket_price: 0,
            tags: ["string"],
            url: "",
            location: {
              latitude: 0,
              longitude: 0
            }
          },
          {
            travel_mode: "string",
            from_location: "string",
            to_location: "string",
            time: 0,
            notes: "string"
          },
          {
            time_slot: "morning",
            estimate_start_time: "07:42:25.975Z",
            estimate_end_time: "07:42:25.975Z"
          }
        ]
      },
      user_input: "string"
    };

    const handleSubmit = () => {
        if (message.trim() !== '') {
            data.description = message;
            setMessage('');
            var result = generateTrip(data);
            console.log(result);
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
