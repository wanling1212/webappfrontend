import React, { useState, useContext } from "react";
import MessageInput from "./MessageInput/MessageInput";
import './Conversation.css';
import { GenerateTrip } from "../../ApiTools/generateTrip";
import { ScheduleContext } from "../../Context";

function Conversation() {
    const { scheduleData, setSharedData } = useContext(ScheduleContext);

    const [inputs, setInputs] = useState({
        description: "",
        start: "",
        end: ""
    });

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false); // 新增 loading 狀態

    const handleInputChange = (field, value) => {
        setInputs((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        const { description, start, end } = inputs;
        setLoading(true); // 設定為正在生成

        const newMessage = { description, start, end };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        try {
            const updatedSchedule = [...scheduleData];
            updatedSchedule[0].name = start;
            updatedSchedule[updatedSchedule.length - 1].name = end;

            const result = await GenerateTrip(start, end, description, updatedSchedule);
            setSharedData(result);
            console.log("Generated Trip Data:", result);
        } catch (error) {
            console.error("Error in generating trip:", error);
        } finally {
            setLoading(false); // 無論成功或失敗，結束 loading 狀態
        }
    };

    return (
        <div className="conversation-container">
            <h2 className="conversation-title">Conversation</h2>
            <div className="conversation-content">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className="message-card">
                            <p><strong>行程描述:</strong> {msg.description}</p>
                            <p><strong>起點:</strong> {msg.start}</p>
                            <p><strong>終點:</strong> {msg.end}</p>
                        </div>
                    ))
                ) : (
                    <p className="conversation-placeholder">Your messages will appear here...</p>
                )}
            </div>

            <div className="conversation-form">
                <div className="conversation-input">
                    <label>行程描述</label>
                    <MessageInput
                        value={inputs.description}
                        onChange={(value) => handleInputChange('description', value)}
                        placeholder="輸入行程描述..."
                    />
                </div>
                <div className="conversation-input">
                    <label>起點</label>
                    <MessageInput
                        value={inputs.start}
                        onChange={(value) => handleInputChange('start', value)}
                        placeholder="輸入起點..."
                    />
                </div>
                <div className="conversation-input">
                    <label>終點</label>
                    <MessageInput
                        value={inputs.end}
                        onChange={(value) => handleInputChange('end', value)}
                        placeholder="輸入終點..."
                    />
                </div>
                <button className="submit-button" onClick={handleSubmit} disabled={loading}>
                    {loading ? "正在生成..." : "送出"}
                </button>
                {loading && <p className="loading-indicator">正在生成行程，請稍候...</p>}
            </div>
        </div>
    );
}

export default Conversation;
