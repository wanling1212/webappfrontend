import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className="schedule-container">
            <h1 className="schedule-title">Your Personalized Schedule</h1>
            <div className="schedule-content">
                {/* Dynamic schedule content will be rendered here after connecting to the backend */}
                <p className="schedule-placeholder">Your schedule will appear here once ready...</p>
            </div>
        </div>
    );
};

export default Schedule;
