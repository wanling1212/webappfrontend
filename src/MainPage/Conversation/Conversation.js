import React, { useState, useContext } from "react";
import MessageInput from "./MessageInput/MessageInput";
import './Conversation.css';
import { GenerateTrip } from "../../ApiTools/generateTrip";
import { ScheduleContext } from "../../Context";

function Conversation() {
    const { scheduleData, setSharedData } = useContext(ScheduleContext);

    // 定義狀態來儲存輸入欄位的值
    const [inputs, setInputs] = useState({
        description: "",
        start: "",
        end: ""
    });

    // 更新輸入欄位的值
    const handleInputChange = (field, value) => {
        setInputs((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        console.log("start submitting...");

        // 更新第一個 travel_plan 的 name 為起點名稱
        const updatedSchedule = [...scheduleData];
        updatedSchedule[0].name = inputs.start;

        // 更新最後一個 travel_plan 的 name 為終點名稱
        updatedSchedule[updatedSchedule.length - 1].name = inputs.end;
    
        // 使用 Context 更新 ScheduleData
        setSharedData(updatedSchedule);
    
        // 將更新後的 ScheduleData 傳遞給 API
        try {
            const result = await GenerateTrip(inputs.start, inputs.end, inputs.description, updatedSchedule);
            console.log("Generated Trip Data:", result);
            setSharedData(result);
            console.log("Updated Schedule Data:", JSON.stringify(result));
            
        } catch (error) {
            console.error("Error in generating trip:", error);
        }
        
    };
    

    return (
        <div className="conversation-container">
            <h2 className="conversation-title">Conversation</h2>
            <div className="conversation-content">
                {/* Messages will be rendered here in the future */}
                <p className="conversation-placeholder">Your messages will appear here...</p>
            </div>
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
                <button onClick={handleSubmit}>送出</button>
        </div>
    );
}

export default Conversation;
