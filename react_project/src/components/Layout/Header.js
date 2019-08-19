import React, {Component} from 'react';


class Header extends Component {

    render() {
        return (
<nav className="navbar sticky-top navbar-expand-sm  navbar-dark bg-primary mb-4">

    <div className="container">
        <a className="navbar-text" href="/dashboard" class="logoss">
            <h1 class="logoss" className="btn-group-lg ">Active Sport</h1>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link " href="/dashboard">
                        <button type="button" className="btn btn-dark font-weight-bold">News</button>
                    </a>

                </li>
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
                <div className="btn-group " role="group" aria-label="Basic example">
                    <a className="nav-link " href="/profile">
                        <button type="button" className="btn btn-secondary glyphicon glyphicon-user">User</button>
                    </a>
                    <a className="nav-link" href="/logout">
                        <button type="button" className="btn btn-secondary">logout</button>
                    </a>
                </div>
            </ul>
        </div>
    </div>
</nav>


        );
    }
}

export default Header;










