
import React from 'react';
import { Link} from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { BiLogIn, BiSolidContact, BiTask, BiSolidTimeFive, BiSolidHelpCircle, BiSolidDashboard } from "react-icons/bi";
import img from "./images/timesheet.png"
import img1 from "./images/boy1.jpg"
const Sidenav = () => {
    return (
        <div className='Sidenav'>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">
                   <img src={img} style={{width:"280px",height:"80px"}}/>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard"><BiSolidDashboard className='logo'/>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees"><BiSolidContact className='logo' />Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks"><BiTask className='logo'/>Task</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/performance"><BiSolidTimeFive className='logo'/>Performance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings"><FcSettings className='logo' />Setting</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help"><BiSolidHelpCircle className='logo' />Help</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout"><BiLogIn className='logo'/>Logout</Link>
                    </li>
                    <li className="nav-item">
                       <img src={img1} style={{height:"100px",width:"100px",borderRadius:"20px",boxShadow:" 4px 0px 6px 0px #888888"}}/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidenav;
