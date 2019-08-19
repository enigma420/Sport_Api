import React, { Component } from "react";
import CreateTeamButton from "./Team/CreateTeamButton";
import TeamItem from "./Team/TeamItem";
import Footer from "./Layout/Footer";

class Dashboard extends Component {

    render() {
        return (
<div class="dashboard" >
    <div className="container">
        <div className="row">
            <div className="col-md-12">

                <br />
                <CreateTeamButton />

                <br />
                <hr />
                <TeamItem />
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default Dashboard;