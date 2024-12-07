import React , { createContext, useState } from 'react';

// store and update "travel_plan" object from the api and store it in ScheduleData

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
    const [ScheduleData, setScheduleData] = useState({});
  
    return (
      <ScheduleContext.Provider value={{ scheduleData: ScheduleData, setSharedData: setScheduleData }}>
        {children}
      </ScheduleContext.Provider>
    );
  };