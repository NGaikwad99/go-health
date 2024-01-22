import { FaHeartbeat } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { TbYoga } from "react-icons/tb";
import { IoMdWalk } from "react-icons/io";
import React, { useState, useEffect } from 'react';

// fetch data from the python server 
// displaying data bigger especially for people who might have trouble reading the 
// information displayed on a wearable device screen due to its small font size 
function Home() {
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
        // fetchData();

        return () => clearInterval(fetchDataInterval);
      }, []);

    return <div>
        <h1>Summary</h1>
        <div className="vitals-grid">
            <div class="vitals-cell">
                <FaHeartbeat className="vitals-icon" size="70px" />
                <p>{data.HeartRate} bpm</p>
            </div>
            <div class="vitals-cell">
                <FaTemperatureLow className="vitals-icon" size="70px" />
                <p>{data.BodyTemperature} F</p>
            </div>
            <div class="vitals-cell">
                <FaDroplet className="vitals-icon" size="70px" />
                <p>{data.BloodPressure} mmHg</p>
            </div>
            <div class="vitals-cell">
                <FaWalking className="vitals-icon" size="70px" />
                <p>2354</p>
            </div>
            <div class="vitals-cell">
                <FaFireAlt className="vitals-icon" size="70px" />
                <p>312</p>
            </div>
            <div class="vitals-cell">
                <MdNightlightRound className="vitals-icon" size="70px" />
                <p>7</p>
            </div>
        </div>
        
        <div className="exercise-grid">
            <div class="exercise-cell">
                <TbYoga className="exercise-icon" size="70px" />
                <p>Yoga improves strength, balance and flexibility. Try these new exercises to feel mentally relieved!</p>
            </div>
            <div class="exercise-cell">
                <IoMdWalk className="exercise-icon" size="70px" />
                <p>Dance boosts cardiovascular health, flexibility, strength, and balance. Plus it has stress-boosting mental health benefits.</p>
            </div>
            
        </div>
    </div>
}

export default Home;