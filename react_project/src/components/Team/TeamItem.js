import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteTeam} from "../../actions/teamActions";

class TeamItem extends Component {
    onDeleteClick = id => {
        this.props.deleteTeam(id);
    };

    render() {
        const { team } = this.props;
        return (
            <div className="container card card-body bg-info " >
                <div className="card card-body bg-light mb-6">
                    <div className="row">
                        <div className="col-2 border-right">
                            <h1>{team.nameOfTeam}</h1>
                            <h3>{team.teamIdentifier}</h3>
                            <h4>{team.nameOfTeamLeader}</h4>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6 border-right">
                            <h3>{team.typeOfSport}</h3>
                            <p>{team.description}</p>
                        </div>
                        <div className="col-md-4 d-flex d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1">Events</i>
                                    </li>
                                </a>
                                <Link to={`/editTeam/${team.teamIdentifier}`}>
                                    <li className="list-group-item delete">
                                        <i className="fa fa-minus-circle pr-1">Edit Team</i>
                                    </li>
                                </Link>
                                <a href="#">
                                    <li className="list-group-item delete"
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        team.teamIdentifier
                                    )}>
                                        <i className="fa fa-minus-circle pr-1">Delete Team</i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


TeamItem.propTypes = {
    deleteTeam: PropTypes.func.isRequired
};

export default connect(null,{deleteTeam})(TeamItem);