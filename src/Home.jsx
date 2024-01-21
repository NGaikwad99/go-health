import { FaHeartbeat } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

// fetch data from the python server 
// displaying data bigger especially for people who might have trouble reading the 
// information displayed on a wearable device screen due to its small font size 
function Home() {
    return <div>
        <h1>Summary</h1>
        <div className="vitals-grid">
            <div class="vitals-cell">
                <FaHeartbeat className="vitals-icon" size="70px" />
                <p>80 bpm</p>
            </div>
            <div class="vitals-cell">
                <FaTemperatureLow className="vitals-icon" size="70px" />
                <p>97 F</p>
            </div>
            <div class="vitals-cell">
                <FaDroplet className="vitals-icon" size="70px" />
                <p>100 mmHg</p>
            </div>
        </div>
    </div>
}

export default Home;