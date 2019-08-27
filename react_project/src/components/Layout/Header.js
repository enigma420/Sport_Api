import React, {Component} from 'react';
import date from 'date-and-time';

class Header extends Component {
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const now = new Date();
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
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link" href="https://www.timeanddate.com/worldclock/">
                    <div className="clock">
                    {date.format(new Date(), 'YYYY/MM/DD HH:mm:ss') }
                    </div>
                </a>
                </li>
                    <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                    Dashboard
                </Link>
                    </li>
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
        </div>
</nav>


        );
    }
}

export default Header;










