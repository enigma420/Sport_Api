import React, {Component} from 'react';

class Sidebar extends Component {

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <nav className="main-menu bg-info">
                    <ul>
                        <img src={process.env.PUBLIC_URL + './avatar.jpg'}  alt="logo" className="logos" width="55px" height="65px"/>
                        <h2 align="center">Nick</h2>
                        <li>
                            <a href="/profile">
                                <i className="fa fa-smile-o fa-2x"></i>
                                <span className="nav-text">
                            Profile
                        </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="/friends">
                                <i className="fa fa-users fa-2x"></i>
                                <span className="nav-text">
    Friends
    </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="/dashboard">
                                <i className="fa fa-tasks "></i>
                                <span className="nav-text">
    Teams
    </span>
                            </a>

                        </li>
                        <li>
                            <a href="/calendar">
                                <i className="fa fa-calendar fa-2x"></i>
                                <span className="nav-text">
    Events Calendar
    </span>
                            </a>
                        </li>

                        <li>
                            <a href="/weather">
                                <i className="fa fa-cloud fa-x"></i>
                                <span className="nav-text">
    Check Weather
    </span>
                            </a>
                        </li>
                        <li>
                            <a href="/about_us">
                                <i className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
    About us
    </span>
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                <i className="fa fa-phone fa-2x"></i>
                                <span className="nav-text">
    Contact
    </span>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li>
                            <a href="/">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">
    Logout
    </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;