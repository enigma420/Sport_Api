import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteTeam} from "../../actions/teamActions";
import {Trans} from "react-i18next";


class TeamItem extends Component {
    onDeleteClick = id => {
        this.props.deleteTeam(id);
    };

    render() {
        const { team } = this.props;
        return (
            <div>
            <div className="container card card-body  bg-primary" >
                <div className="card card-body teamItem mb-6">
                        <div className="row">
                            <div className="col-3 border-3">
                            <text className="nameOfTeam" style={{textAlign:'center'}}>{team.nameOfTeam}</text>
                                <div className="containero">
                                    <button className="teamInfo btn btn-primary" data-toggle="modal"
                                            data-target="#myModal">
                                        <h5>
                                            <Trans i18nKey="teamItem.teamInfo"/>
                                        </h5>
                                    </button>
                                    <div className="modal" tabIndex="-1" role="dialog" >
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title text-center">Information about Team</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <ul className="list-group">
                                                        <h4>Team Name:</h4>
                                                        <li className="list-group-item">{team.nameOfTeam}</li>
                                                        <h4>Team ID:</h4>
                                                        <li className="list-group-item">{team.teamIdentifier}</li>
                                                        <h4>Leader Name:</h4>
                                                        <li className="list-group-item">{team.nameOfTeamLeader}</li>
                                                        <h4>Type of Sport:</h4>
                                                        <li className="list-group-item">{team.typeOfSport}</li>
                                                        <h4>Creational Date:</h4>
                                                        <li className="list-group-item">{team.dateOfCreationTeam}</li>
                                                        <h4>Description:</h4>
                                                        <li className="list-group-item">{team.description}</li>
                                                    </ul>
                                                    </div>

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary"
                                                            data-dismiss="modal">Close
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        <div className="col-7 border-3">
                            <div className="border-1">
                                <li>
                                <text className="nameOfType">{team.typeOfSport}</text>
                                </li>
                                <Link to={`/eventBoard/${team.teamIdentifier}`}>
                                        <i className="fa fa-flag-checkered h3">&nbsp;
                                            <Trans i18nKey="teamItem.events"/>
                                        </i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <ul className="list-group">
                                <div className="dropup">
                                    <button className="dropbtn ">
                                        <Trans i18nKey="teamItem.options"/>
                                    </button>
                                    <div className="dropup-content">
                                        <Link to={`/editTeam/${team.teamIdentifier}`}>
                                            <li className=" delete teamMenu">
                                                <text className="fa btn-group-lg fa-minus-circle ">
                                                    <Trans i18nKey="teamItem.editTeam"/>
                                                </text>
                                            </li>
                                        </Link>
                                        <a href="#">
                                            <li className=" delete teamMenu"
                                                onClick={this.onDeleteClick.bind(
                                                    this,
                                                    team.teamIdentifier
                                                )}>
                                                <i className="fa fa-minus-circle pr-1">
                                                    <Trans i18nKey="teamItem.deleteTeam"/>
                                                </i>
                                            </li>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        </div>
                </div>

            </div>
            <hr/>
            </div>
        );
    }
}


TeamItem.propTypes = {
    deleteTeam: PropTypes.func.isRequired
};

export default connect(null,{deleteTeam})(TeamItem);