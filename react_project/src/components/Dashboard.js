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
    <div className="dash">
        <div className="dashboard">
            <div className="container2">
                    <div id="myCarousel" className="carousel slide " data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                        </ol>

                        <div className="carousel-inner ">
                            <div className="item active ">
                                <img src="carousel1.jpg" alt="Los Angeles" className="carouselItems"/>
                            </div>

                            <div className="item">
                                <img src="carousel2.jpg" alt="Chicago"  className="carouselItems"/>
                            </div>

                            <div className="item">
                                <img src="carousel3.jpg" alt="New york" className="carouselItems"/>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="active glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="active glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
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