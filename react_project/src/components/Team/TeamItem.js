import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteTeam} from "../../actions/teamActions";
import {Trans} from "react-i18next";
import {Button, Card, CardBody, Collapse} from "reactstrap";

const buttonStyle = {
    width: '100%',
    height: '100%'
};

const editAndDeleteButtonStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bolder',
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};


class TeamItem extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false, status: 'Closed'};
    }

    onEntering() {
        this.setState({status: 'Opening...'});
    }

    onEntered() {
        this.setState({status: 'Opened'});
    }

    onExiting() {
        this.setState({status: 'Closing...'});
    }

    onExited() {
        this.setState({status: 'Closed'});
    }

    toggle() {
        this.setState(state => ({collapse: !state.collapse}));
    }


    onDeleteClick = id => {
        this.props.deleteTeam(id);
    };

    render() {
        const {team} = this.props;
        return (
            <div>
                <div className="container card card-body  bg-primary">
                    <div className="card card-body teamItem mb-6">
                        <div className="row">
                            <div className="col-3 border-3" style={{textAlign: 'center'}}>
                                <h3>
                                    <text className="nameOfTeam">{team.nameOfTeam}</text>
                                </h3>
                            </div>
                            <div className="col-7 border-3">
                                <div className="border-1">
                                    <li>
                                        <text className="nameOfType">{team.typeOfSport}</text>
                                    </li>
                                    <li>
                                        <Link to={`/eventBoard/${team.teamIdentifier}`}>
                                            <i className="fa fa-flag-checkered h3">&nbsp;
                                                <Trans i18nKey="teamItem.events"/>
                                            </i>
                                        </Link>
                                    </li>
                                    <Trans i18nKey="event.allInfoCurrentState"/>

                                    {this.state.status}
                                    <li>
                                        <Button color="primary" onClick={this.toggle}
                                                style={{marginBottom: '1rem', marginTop: '1rem'}} className="info">
                                            <Trans i18nKey="event.allInfo"/>
                                        </Button>
                                    </li>
                                    <Collapse
                                        isOpen={this.state.collapse}
                                        onEntering={this.onEntering}
                                        onEntered={this.onEntered}
                                        onExiting={this.onExiting}
                                        onExited={this.onExited}
                                    >
                                        <Card>
                                            <CardBody>
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
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="dropup " style={buttonStyle}>
                                    <button className="dropbtn dropright-toggle" style={buttonStyle}>
                                        <Trans i18nKey="teamItem.options"/>
                                    </button>
                                    <div className="dropup-content">
                                        <Link to={`/editTeam/${team.teamIdentifier}`}>
                                            <li className="teamMenu" style={editAndDeleteButtonStyle}>
                                                <Trans i18nKey="teamItem.editTeam"/>
                                            </li>
                                        </Link>
                                        <a href="#">
                                            <li className="teamMenu" style={editAndDeleteButtonStyle}
                                                onClick={this.onDeleteClick.bind(
                                                    this,
                                                    team.teamIdentifier
                                                )}>
                                                <Trans i18nKey="teamItem.deleteTeam"/>
                                            </li>
                                        </a>
                                    </div>
                                </div>
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

export default connect(null, {deleteTeam})(TeamItem);