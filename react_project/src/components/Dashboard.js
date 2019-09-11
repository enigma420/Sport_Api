import React, { Component } from "react";
import CreateTeamButton from "./Team/CreateTeamButton";
import TeamItem from "./Team/TeamItem";
import { connect } from "react-redux";
import { getTeams } from "../actions/teamActions";
import PropTypes from "prop-types";
import {Trans, useTranslation} from "react-i18next";

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

                <h2 className="TEAM_LEAD">
                    <Trans i18nKey="dashboard.teams"/>
                </h2>
                <hr />
                <br /><h4>
                <Trans i18nKey="dashboard.amountOfTeams"/>
                {CountOfTeams}
                </h4>
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