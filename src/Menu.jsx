import { FaInbox } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <Link to="/">
                <div>
                    <div className="menu-icon"><FaHome /></div>
                    <p>Home</p>
                </div>
            </Link>
            <div>
                <Link to="/inbox">
                    <div className="menu-icon"><FaInbox /></div>
                    <p>Inbox</p>
                </Link>
            </div>
            <div>
                <Link to="/profile">
                    <div className="menu-icon"><IoIosContact /></div>
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    );
}

export default Menu;
