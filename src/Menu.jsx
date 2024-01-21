import { FaInbox } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa";

function Menu() {
    return (
        <div className="menu">
            <NavLink to="/" activeClassName="active">
                <div>
                    <div className="menu-icon"><FaHome size="40px" /></div>
                    <p>Home</p>
                </div>
            </NavLink>
            <div>
                <NavLink to="/inbox" activeClassName="active">
                    <div className="menu-icon"><FaInbox size="40px" /></div>
                    <p>Inbox</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/askollama" activeClassName="active">
                    <div className="menu-icon"><FaQuestion size="40px" /></div>
                    <p>Ask</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/profile" activeClassName="active">
                    <div className="menu-icon"><IoIosContact size="40px" /></div>
                    <p>Profile</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
