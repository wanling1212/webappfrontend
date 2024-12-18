import React, { useContext } from 'react';
import './Schedule.css';
import { ScheduleContext } from '../../Context.js';
import Location from './ScheduleComponent/Location';
import Path from './ScheduleComponent/Path';
import { GenerateTrip } from '../../ApiTools/generateTrip';

const Schedule = () => {
  const { scheduleData, setSharedData } = useContext(ScheduleContext);

  // 插入 Empty_Spot
  const handleInsertEmptySpot = (index) => {
    const updatedSchedule = [...scheduleData];
    updatedSchedule.splice(index + 1, 0, {
      time_slot: "afternoon",
      estimate_start_time: null,
      estimate_end_time: null
    });
    setSharedData(updatedSchedule); // 更新行程資料
  };

  // 刪除指定項目
  const handleDelete = (index) => {
    const updatedSchedule = [...scheduleData];
    updatedSchedule.splice(index, 1); // 移除指定索引的項目
    setSharedData(updatedSchedule);
  };

  // 發送資料到後端
  const handleSubmit = async () => {
    try {
      const result = await GenerateTrip(
        scheduleData[0]?.name,                 // 起點名稱
        scheduleData[scheduleData.length - 1]?.name, // 終點名稱
        "重新生成行程",                        // 固定描述
        scheduleData                           // 修改後的 travel_plan
      );
      setSharedData(result);
      alert("行程已重新生成！");
    } catch (error) {
      console.error("Error submitting updated trip:", error);
    }
  };

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Your Personalized Schedule</h1>
      <div className="schedule-content">
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-item">
            {/* 判斷顯示地點、路徑或空白點 */}
            {item.time_slot ? (
              <div className="empty-spot">
                <p>Empty Spot</p>
                <p>Time Slot: {item.time_slot}</p>
              </div>
            ) : item.travel_mode ? (
              console.log(item),
              <Path {...item} />
            ) : (
              <Location {...item} />
            )}

            {/* 操作按鈕 */}
            <div className="schedule-actions">
              <button onClick={() => handleInsertEmptySpot(index)}>插入空白地點</button>
              <button onClick={() => handleDelete(index)}>刪除</button>
            </div>
          </div>
        ))}
      </div>

      {/* 送出按鈕 */}
      <button className="submit-button" onClick={handleSubmit}>
        送出修改
      </button>
    </div>
  );
};

export default Schedule;
