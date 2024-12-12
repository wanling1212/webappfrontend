const url = 'https://triplan-api.vercel.app/';
const uri = 'generate_trip';

async function GenerateTrip(start_location, end_location, user_input, scheduleData) {
  const requestBody = {
    trip: {
      title: "Sample Trip",
      description: "A sample trip to NTU and Taipei.",
      range: {
        start: "2024-12-11",
        end: "2024-12-11",
      },
      travel_plan: scheduleData},// 從 Context 傳遞的資料
    user_input: user_input
  };

  try {
    const response = await fetch(url + uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    alert('Trip generated successfully!');
    
    return data['generated_trip'];

  } catch (error) {
    console.error('Error during API request:', error);
    throw error;
  }
}

export { GenerateTrip };