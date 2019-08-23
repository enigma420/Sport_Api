import React, {Component} from 'react';


class Header extends Component {

    render() {
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
            <div className="">
            <ul className="navbar-nav ml-auto">
                <div className="btn-group " role="group" aria-label="Basic example">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            <button type="button" className="btn btn-dark font-weight-bold btn-lg btn-space">Dashboard</button>
                        </a>
                    </li>
                </div>
            </ul>
            </div>
        </div>
    </div>
</nav>


        );
    }
}

export default Header;










