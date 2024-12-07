const url = 'https://triplan-api.vercel.app/';
const uri = 'generate_trip';

async function GenerateTrip(start_date, end_date, user_input) {
    let response = await fetch(url + uri, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "trip": {
              "title": "string",
              "description": "string",
              "range": {
                "start": start_date,
                "end": end_date
              },
              "travel_plan": [
                {
                  "name": "",
                  "address": "",
                  "description": "",
                  "visit_duration": 0,
                  "travel_time_to_prev": 0,
                  "travel_time_to_next": 0,
                  "reviews": [
                    "string"
                  ],
                  "rating": 0,
                  "rating_count": 0,
                  "ticket_price": 0,
                  "tags": [
                    "string"
                  ],
                  "url": "",
                  "location": {
                    "latitude": 0,
                    "longitude": 0
                  }
                },
                {
                    "name": "",
                    "address": "",
                    "description": "",
                    "visit_duration": 0,
                    "travel_time_to_prev": 0,
                    "travel_time_to_next": 0,
                    "reviews": [
                      "string"
                    ],
                    "rating": 0,
                    "rating_count": 0,
                    "ticket_price": 0,
                    "tags": [
                      "string"
                    ],
                    "url": "",
                    "location": {
                      "latitude": 0,
                      "longitude": 0
                    }
                  }
              ]
            },
            "user_input": user_input
        })
    });
    return await response.json();
}

GenerateTrip('2024-12-07', '2024-12-07', 'test_input').then(data => console.log(data));

// export default GenerateTrip;