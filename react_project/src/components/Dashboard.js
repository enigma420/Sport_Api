import React, { Component } from "react";
import CreateTeamButton from "./Team/CreateTeamButton";
import TeamItem from "./Team/TeamItem";
import { connect } from "react-redux";
import { getTeams } from "../actions/teamActions";
import PropTypes from "prop-types";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        const { teams } = this.props.team;
        return (
<div className="teams" >
    <div className="container">
        <div className="row">
            <div className="col-md-12 bg-warning">
                <h1 className="display-4 text-center">Teams</h1>
                <br />
                <CreateTeamButton />

                <br />
                <hr />
                {teams.map(team => (
                    <TeamItem key={team.id} team={team}/>
                ))}
            </div>
        </div>
    </div>
</div>
        );
    }
}

Dashboard.propTypes = {
    team: PropTypes.object.isRequired,
    getTeams: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    team: state.team
});

export default connect(mapStateToProps,{getTeams})(Dashboard);