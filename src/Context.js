import React, { createContext, useState } from 'react';

// store and update "travel_plan" object from the api and store it in ScheduleData

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const initialTravelPlan = [
    {
      "name": "NTU",
      "address": null,
      "place_id": null,
      "time_slot": null,
      "description": null,
      "visit_duration": null,
      "travel_time_to_prev": null,
      "travel_time_to_next": null,
      "estimate_start_time": null,
      "estimate_end_time": null,
      "reviews": null,
      "rating": null,
      "rating_count": null,
      "price_level": null,
      "tags": null,
      "url": null,
      "location": null
    },
    {
      "time_slot": "afternoon",
      "estimate_start_time": null,
      "estimate_end_time": "12:00:00"
    },
    {
      "name": "台北車站",
      "address": null,
      "place_id": null,
      "time_slot": null,
      "description": null,
      "visit_duration": null,
      "travel_time_to_prev": null,
      "travel_time_to_next": null,
      "estimate_start_time": null,
      "estimate_end_time": null,
      "reviews": null,
      "rating": null,
      "rating_count": null,
      "price_level": null,
      "tags": null,
      "url": null,
      "location": null
    }
  ];

  const [ScheduleData, setScheduleData] = useState(initialTravelPlan);

  return (
    <ScheduleContext.Provider value={{ scheduleData: ScheduleData, setSharedData: setScheduleData }}>
      {children}
    </ScheduleContext.Provider>
  );
};
