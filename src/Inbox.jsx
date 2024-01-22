import React, { useState, useEffect } from 'react';

function Inbox() {
    const [dynamicArray, setDynamicArray] = useState([]);

    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5000//getHealthData/1');
            
            if (!response.ok) {
              throw new Error(`Request failed with status: ${response.status}`);
            }
    
            const result = await response.data.json();
            setData(result);
            console.log(result);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);

    var heartrate = 120;

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const delay = 2000; // 2000 milliseconds = 2 seconds

        const timeoutId = setTimeout(() => {
            setShowContent(true);
        }, delay);

        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures that the effect runs once after the initial render


    return <div>
        <h1>Inbox</h1>
        <ul className='inbox'>
            {
                showContent && <li>
                Slow down! Your heartbeat is increasing too fast and has been high for a while. Drink some water.
            </li>
            }
            
        </ul>
    </div>
}

export default Inbox;