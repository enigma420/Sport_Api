import React, {Component} from 'react';
import date from 'date-and-time';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logout } from "../../actions/securityActions";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";


class Header extends Component {
    logout(){
        this.props.logout();
        window.location.href = "/";
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const { validToken , user } = this.props.security;
        const now = new Date();

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-user-circle mr-1" />
                            {user.fullName}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/logout"
                            onClick={this.logout.bind(this)}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        );

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }



        return (
<nav className=" sticky-top navbar-expand-sm header">
    <div className="container">
        <ul className="navbar-nav">
            <li className="nav-item" >
        <a className="navbar-text" href="/dashboard"  class="logoss">
            <img src="logo.png" href="/dashboard" height="50" width="180" className="logo btn-space"/>
        </a>
            </li>
        </ul>
        <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">

                <li>
                    <div className="container h-100">
                        <div className="d-flex justify-content-center h-100">
                            <div className="searchbar">
                                <input className="search_input" type="text" placeholder="Search..."/>
                                <a href="dashboard/search" className="search_icon"><i
                                    className="fas fa-search"/></a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            </div>
        {headerLinks}
        </div>
</nav>

        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps,{logout})(Header);










