import axios from 'axios';
import React, { useState, useEffect } from 'react';
import info from './info';


function Chat() {
    const [message, setMessage] = useState('');
    const [dynamicArray, setDynamicArray] = useState([]);

    const [data, setData] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                console.log("running");
                const response = await fetch('http://127.0.0.1:5000//getHealthData/1');

                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                const result = await response.json();
                setData(result.data[result.data.length - 1]);
                console.log(result.data[result.data.length - 1]);
            } catch (error) {
                setError(error.message);
            }
        };

        const fetchDataInterval = setInterval(fetchData, 1000);
        fetchData();

        return () => clearInterval(fetchDataInterval);

    }, []);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    // if (data.HeartRate > 100) {
    //     message = "Please check the vitals to see if all is well."
    //     fetchData();
    // }

    const fetchData = async () => {
        const infoString = JSON.stringify(info);
        const prompt = message + "My details are as follows: " + infoString + "My current vitals are as follows: " + "Heart rate " +  data.HeartRate + "blood pressure " + data.BloodPressure + " body temperature " + data.BodyTemperature;
        let jsonResponse = [];
        setDynamicArray(prevArray => [...prevArray, message]);
        setMessage("");
        console.log(prompt);

        try {
            const response = await axios.post('http://localhost:11434/api/generate', {
                "model": "llama2",
                "prompt": prompt
            });

            const responseData = response.data.split('\n').filter(Boolean);

            jsonResponse = responseData.map(item => JSON.parse(item));

            console.log('Response from server:', jsonResponse);
        } catch (error) {
            console.error('Error making POST request:', error.message);
        }

        if (Array.isArray(jsonResponse)) {
            // Assuming jsonResponse is an array of objects with a 'response' property
            const decodedResponse = jsonResponse.map(item => item.response).join('');
            console.log(decodedResponse);
            setDynamicArray(prevArray => [...prevArray, decodedResponse]);

        } else {
            // Handle the case when jsonResponse is not an array
            console.error('Unexpected jsonResponse type or format:', jsonResponse);
        }
    };

    return <div>
        <h1>Ask Ollama</h1>
        <ul className='chat'>
            {/* Display the elements of the array */}
            {dynamicArray.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div className='input-div'>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={fetchData}>Send</button>
        </div>
    </div>
}

export default Chat;