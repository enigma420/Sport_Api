import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";

class Sidebar extends Component {

    render() {
        const { user } = this.props.security;
        return (
            <div id="mySidenav" className="sidenav">
                <nav className="main-menu bg-info">
                    <ul>
                        <img src={process.env.PUBLIC_URL + './avatar.jpg'}  alt="logo" className="logos" />
                        <div className="PROFILE_LEAD">{user.fullName}</div>
                        <li>
                            <a href="/dashboard">
                                <i  id="sideBarIcons" className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
    Dashboard
    </span>
                            </a>
                        </li>
                            <li>
                            <a href="/profile">
                                <i id="sideBarIcons" className="fa fa-smile-o fa-2x"></i>
                                <span className="nav-text">
    Profile
    </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="/friends">
                                <i  id="sideBarIcons" className="fa fa-users fa-2x"></i>
                                <span className="nav-text">
    Friends
    </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="/dashboard">
                                <i  id="sideBarIcons" className="fa fa-tasks "></i>
                                <span className="nav-text">
    Teams
    </span>
                            </a>

                        </li>
                        <li>
                            <a href="/calendar">
                                <i  id="sideBarIcons" className="fa fa-calendar fa-2x"></i>
                                <span className="nav-text">
    Events Calendar
    </span>
                            </a>
                        </li>

                        <li>
                            <a href="/weather">
                                <i  id="sideBarIcons" className="fa fa-cloud fa-x"></i>
                                <span className="nav-text">
    Check Weather
    </span>
                            </a>
                        </li>
                        <li>
                            <a href="/about_us">
                                <i  id="sideBarIcons" className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
    About us
    </span>
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                <i  id="sideBarIcons" className="fa fa-phone fa-2x"></i>
                                <span className="nav-text">
    Contact
    </span>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li>
                            <a href="/">
                                <i  id="sideBarIcons" className="fa fa-power-off fa-2x"></i>
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

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps,{logout})(Sidebar);