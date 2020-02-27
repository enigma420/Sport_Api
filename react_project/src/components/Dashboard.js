import React, {Component} from "react";
import CreateTeamButton from "./Team/CreateTeamButton";
import TeamItem from "./Team/TeamItem";
import {connect} from "react-redux";
import {getTeams} from "../actions/teamActions";
import PropTypes from "prop-types";
import {Trans} from "react-i18next";
import {Link} from "react-router-dom";

const teamBoardStyle = {
    marginLeft: 70,
    marginRight: 70,
    filter: "brightness(115%)",
    background: "linear-gradient(to bottom right,lightskyblue 85%,lightskyblue 100%,#b0bec5 35%,#b0bec5 65% ) no-repeat",
    borderRight: "3px solid dodgerblue",
    borderLeft: "3px solid dodgerblue",
    padding: "0 15px 0 15px",
    borderRadius:'10px',
    borderBottom: "2px solid dodgerblue",
};

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "#007bff",
    fontSize: 55,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};


class Dashboard extends Component {

    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        const {teams} = this.props.team;

        //Counter of teams
        let CountOfTeams = 0;
        for (let i = 0; i < teams.length; i++) {
            CountOfTeams++;
        }

        return (
            <div>
                <div style={teamBoardStyle}>
                    <h2 style={teamLeadStyle}>
                        <Trans i18nKey="dashboard.teams"/>
                    </h2>
                    <h4 style={{alignItems: 'center', textAlign: 'center'}}>
                        <Trans i18nKey="dashboard.amountOfTeams"/>
                        {CountOfTeams}
                        <div>
                            <CreateTeamButton/>
                        </div>
                    </h4>
                    <hr/>
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

export default connect(mapStateToProps, {getTeams})(Dashboard);