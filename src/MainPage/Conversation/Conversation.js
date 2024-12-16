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

    const [messages, setMessages] = useState([]); // 用於儲存歷史訊息

    const handleInputChange = (field, value) => {
        setInputs((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        const { description, start, end } = inputs;

        // 將新的輸入打包成單一卡片格式
        const newMessage = {
            description: description,
            start: start,
            end: end
        };

        // 新增到歷史訊息區域
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        // 更新行程資料
        const updatedSchedule = [...scheduleData];
        updatedSchedule[0].name = start;
        updatedSchedule[updatedSchedule.length - 1].name = end;

        setSharedData(updatedSchedule);

        try {
            const result = await GenerateTrip(start, end, description, updatedSchedule);
            setSharedData(result);
            console.log("Generated Trip Data:", result);
        } catch (error) {
            console.error("Error in generating trip:", error);
        }
    };

    return (
        <div className="conversation-container">
            <h2 className="conversation-title">Conversation</h2>
            {/* 歷史訊息統一展示 */}
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

            {/* 輸入表單 */}
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
                <button className="submit-button" onClick={handleSubmit}>送出</button>
            </div>
        </div>
    );
}

export default Conversation;
