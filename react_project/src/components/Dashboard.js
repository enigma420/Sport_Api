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

        //Counter of teams
        let CountOfTeams = 0;
       for(let i = 0 ; i < teams.length ; i++){
           CountOfTeams++;
       }

        return (
        <div className="dashboard">
            <div className="teamboard">

                <h2 className="TEAM_LEAD">Your Teams:</h2>
                <hr />
                <br /><h4>Amount of Teams: {CountOfTeams}</h4>
                <CreateTeamButton/>
                <br />

                <hr />
                {teams.map(team => (
                    <TeamItem key={team.id} team={team}/>
                ))}
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