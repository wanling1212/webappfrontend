import React from 'react';
import './Schedule.css';
import { ScheduleContext } from '../../Context.js';
import Location from './ScheduleComponent/Location';
import Path from './ScheduleComponent/Path';

const Schedule = () => {
    const { scheduleData } = React.useContext(ScheduleContext);

    return (
        <div className="schedule-container">
            <h1 className="schedule-title">Your Personalized Schedule</h1>
            <div className="schedule-content">
            {scheduleData.map((item, index) => {
                // check if the item is a location object or a path object
                if (item.name && item.address) {
                    // location object
                    return (
                    <Location
                        key={index}
                        name={item.name}
                        address={item.address}
                        description={item.description}
                        visitDuration={item.visit_duration}
                        rating={item.rating}
                        tags={item.tags}
                    />
                    );
                } else if (item.travel_mode && item.from_location && item.to_location) {
                    // path objext
                    return (
                    <Path
                        key={index}
                        travelMode={item.travel_mode}
                        from={item.from_location}
                        to={item.to_location}
                        time={item.time}
                        notes={item.notes}
                    />
                    );
                } else {
                    return null; // 如果資料格式不符合預期，則不渲染
                }
                })}
                <p className="schedule-placeholder">Your schedule will appear here once ready...</p>
            </div>
        </div>
    );
};

export default Schedule;
