import React, {Component} from 'react';

class Sidebar extends Component {

    render() {
        return (
<div>
            <div id="mySidenav" className="sidenav" >
                <img src={process.env.PUBLIC_URL + './avatar.jpg'} alt="logo" className="logos" />
                <a type="text" >Nickname</a>
                <a href="#">Profile</a>
                <a href="#">Friends</a>
                <a href="#">Groups</a>
                <a href="#">Events</a>
            </div>
        <div className= "main">
    </div>
</div>

        );
    }
}

export default Sidebar;