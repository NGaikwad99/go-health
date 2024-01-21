import axios from 'axios';
import React, { useState, useEffect } from 'react';
import info from './info';


function Chat() {
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');
    const [dynamicArray, setDynamicArray] = useState([]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        // Fetch data from Flask server
        axios.get('http://127.0.0.1:5000/receive_data')
            .then(response => setData(response.data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const fetchData = async () => {
        const infoString = JSON.stringify(info);
        const prompt = message + "My details are as follows: " + infoString;
        let jsonResponse = [];
        setDynamicArray(prevArray => [...prevArray, message]);
        setMessage("");

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