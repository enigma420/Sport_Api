import React, {Component} from 'react';
import date from 'date-and-time';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logout } from "../../actions/securityActions";
import {Link} from "react-router-dom";
import {Trans, translate, useTranslation, withTranslation} from 'react-i18next';

class Header extends Component {
    constructor(props){
        super(props)
    }
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
        const { t, i18n } = this.props;
        const { validToken , user } = this.props.security;
        const now = new Date();

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <a className="navbar-text" href="/"  className="logoss">
                            <img src="logo.png" href="/" height="50" width="180" className="logo btn-space"/>
                        </a>
                    </li>
                </ul>
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
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="" href="https://www.timeanddate.com/worldclock/">
                            <div className="clockAuth">
                                <i className="fa fa-clock-o">&nbsp;{date.format(new Date(), 'YYYY/MM/DD HH:mm:ss') }</i>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="logout"
                            className="nav-link"
                            to="/logout"
                            onClick={this.logout.bind(this)}
                        >
                            <i className="fa fa-sign-out">
                                &nbsp;
                                <Trans i18nKey="header.logout"/>
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <a className="navbar-text" href="/"  className="logoss">
                            <img src="logo.png" href="/" height="50" width="180" className="logo btn-space"/>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        <a className="" href="https://www.timeanddate.com/worldclock/">
                            <div className="clock">
                                <i className="fa fa-clock-o">&nbsp;{date.format(new Date(), 'YYYY/MM/DD HH:mm:ss') }</i>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link id="signUp" className="nav-link" to="/register">
                            <i className="fa fa-check-square">
                                &nbsp;
                                <Trans i18nKey="header.signUp"/>
                            </i>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link id="login" className="nav-link" to="/login">
                            <i id="loginIcon" className="fa fa-sign-in">
                                &nbsp;
                                <Trans i18nKey="header.login"/>
                            </i>
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
<nav className=" navbar-expand-sm header">
        {headerLinks}
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










