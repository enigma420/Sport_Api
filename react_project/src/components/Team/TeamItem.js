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
                            <div className="col-2 border-3">
                            <h1>{team.nameOfTeam}</h1>
                            <h3>{team.teamIdentifier}</h3>
                            <h4>{team.nameOfTeamLeader}</h4>
                            </div>

                        <div className="col-7 border-3">
                            <div className="border-1">
                            <h3>{team.typeOfSport}</h3>
                            <p>{team.description}</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <ul className="list-group">
                                <Link to={`/eventBoard/${team.teamIdentifier}`}>
                                    <li className=" board teamMenu">
                                        <i className="fa fa-flag-checkered pr-1">Events</i>
                                    </li>
                                </Link>
                                <Link to={`/editTeam/${team.teamIdentifier}`}>
                                    <li className=" delete teamMenu">
                                        <i className="fa fa-minus-circle pr-1">Edit Team</i>
                                    </li>
                                </Link>
                                <a href="#">
                                    <li className=" delete teamMenu"
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