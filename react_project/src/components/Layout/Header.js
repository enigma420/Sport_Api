import React, {Component} from 'react';
import date from 'date-and-time';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";
import {Link} from "react-router-dom";
import {Trans} from 'react-i18next';
import logo from '../../logo.png';

const headerStyle = {
    backgroundColor: "white",
    borderBottom: "2px solid seagreen",
    padding: 0,
    position: "relative"
};

const logoStyle = {
    width: 180,
    height: 50
};

const headerButtonsStyle = {
    color: 'white',
    backgroundColor: 'grey',
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    padding: "6px 40px 1px 45px",
    border: "2px solid black",
    width: 150,
    height: 40,
    borderRadius: 20,
    position: "sticky",
    right: "3%",
    top: "2%",
    display: "inline-block",
    fontSize: 16,
    margin: "auto",
    whiteSpace: "nowrap"
};

const headerIconStyle = {
    textAlign: "center",
    verticalAlign: "middle"
};

const clockStyle = {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    fontFamily: "'Share Tech Mono', monospace",
    position: "sticky",
    transform: "translate(0, -25%)",
    textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
    borderTop: "2px dotted",
    borderBottom: "2px dotted",
    marginRight: 35,
    marginLeft: 35,
    top: "8%"
};

class Header extends Component {
    constructor(props) {
        super(props)
    }

    logout() {
        this.props.logout();
        window.location.href = "/";
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({time: Date.now()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    userIsAuthenticated() {
        return (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="navbar-text" href="/">
                            <img src={logo} style={logoStyle} className="logo btn-space" alt="logo"/>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li>
                        <div className="h-100">
                            <div className="d-flex justify-content-center h-100">
                                <div className="searchbar">
                                    <input className="search_input" type="text" placeholder="Search..."/>
                                    <a href="#" className="search_icon"><i
                                        className="fas fa-search"/></a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="" href="https://www.timeanddate.com/worldclock/">
                            <div style={clockStyle}>
                                <i className="fa fa-clock-o">&nbsp;{date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')}</i>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="logout"
                            className="nav-link"
                            to="/logout"
                            onClick={this.logout.bind(this)}
                            style={headerButtonsStyle}
                        >
                            <i style={headerIconStyle} className="fa fa-sign-out">
                                &nbsp;
                                <Trans i18nKey="header.logout"/>
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    userIsNotAuthenticated() {
        return (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="navbar-text" href="/">
                            <img src={logo} style={logoStyle} className="logo btn-space" alt="logo"/>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="https://www.timeanddate.com/worldclock/">
                            <div style={clockStyle}>
                                <i className="fa fa-clock-o">&nbsp;{date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')}</i>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item" style={{marginRight: '5px'}}>
                        <Link style={headerButtonsStyle} className="nav-link" to="/register">
                            <i style={headerIconStyle} className="fa fa-check-square">
                                &nbsp;
                                <Trans i18nKey="header.signUp"/>
                            </i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link style={headerButtonsStyle} className="nav-link" to="/login">
                            <i style={headerIconStyle} className="fa fa-sign-in">
                                &nbsp;
                                <Trans i18nKey="header.login"/>
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        const {validToken, user} = this.props.security;

        const IsAuthenticated = (this.userIsAuthenticated());
        const IsNotAuthenticated = (this.userIsNotAuthenticated());

        let headerLinks;

        if (validToken && user) {
            headerLinks = IsAuthenticated;
        } else {
            headerLinks = IsNotAuthenticated;
        }


        return (
            <nav className=" navbar-expand-md" style={headerStyle}>
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

export default connect(mapStateToProps, {logout})(Header);