import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {deleteEvent} from "../../../actions/eventslogActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Trans} from "react-i18next";


class Event extends Component {
    /* for expand text */
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, status: 'Closed' };
    }

    onDeleteClick(eventslog_id,pt_id){
        this.props.deleteEvent(eventslog_id,pt_id);
    }

    onEntering() {
        this.setState({ status: 'Opening...' });
    }

    onEntered() {
        this.setState({ status: 'Opened' });
    }

    onExiting() {
        this.setState({ status: 'Closing...' });
    }

    onExited() {
        this.setState({ status: 'Closed' });
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    /* end of expand text */
    onDeleteClick(eventslog_id,pt_id){
        this.props.deleteEvent(eventslog_id,pt_id);
    }

    render() {
        const{ event } = this.props;

        let priorityString;
        let priorityClass;
        let disabl;

        if(event.status === "IN_PAST"){
            disabl = "disabl";
        }

        if (event.priority === 1) {
            priorityClass = "bg-danger text-light";
            priorityString = "HIGH";
        }

        if (event.priority === 2) {
            priorityClass = "bg-warning text-light";
            priorityString = "MEDIUM";
        }

        if (event.priority === 3) {
            priorityClass = "bg-info text-light";
            priorityString = "LOW";
        }

        return (
            <div className={`card mb-2 bg-muted ${disabl}`}>
                <div className={`card-header text-primary text-center ${priorityClass}`}>
                    <div className="eventer">{event.nameOfEvent}</div>
                </div>
                <div className="list-group">
                    <h5>
                        <Trans i18nKey="event.place"/>
                    </h5>
                    <li className="list-group-item">{event.place}</li>
                    <h5>
                        <Trans i18nKey="event.eventStart"/>
                    </h5>
                    <li className="list-group-item">{event.startDate}</li>
                    <h5>
                        <Trans i18nKey="event.eventEnd"/>
                    </h5>
                    <li className="list-group-item">{event.endDate}</li>
                </div>



                    <div className="allInfo">
                        <Button color="primary" onClick={this.toggle} style={{ marginLeft:'1rem' , marginBottom: '2rem' , marginTop: '1rem' }} className="info">
                            <Trans i18nKey="event.allInfo"/>
                        </Button>
                        <Trans i18nKey="event.allInfoCurrentState"/>
                         {this.state.status}
                        <Collapse
                            isOpen={this.state.collapse}
                            onEntering={this.onEntering}
                            onEntered={this.onEntered}
                            onExiting={this.onExiting}
                            onExited={this.onExited}
                        >
                            <Card>
                                <CardBody>
                                    <ul className=" list-group">
                                        <h5>
                                            <Trans i18nKey="event.cost"/>
                                        </h5>
                                        <li className="list-group-item">{event.cost+"zł"}</li>
                                        <h5>
                                            <Trans i18nKey="event.minMembers"/>
                                        </h5>
                                        <li className="list-group-item">{event.minNumberOfMembers}</li>
                                        <h5>
                                            <Trans i18nKey="event.maxMembers"/>
                                        </h5>
                                        <li className="list-group-item">{event.maxNumberOfMembers}</li>
                                        <h5>
                                            <Trans i18nKey="event.priority"/>
                                        </h5>
                                        <li className="list-group-item">{priorityString}</li>
                                        <h5>
                                            <Trans i18nKey="event.status"/>
                                        </h5>
                                        <li className="list-group-item">{event.status}</li>
                                        <h5>
                                            <Trans i18nKey="event.eventId"/>
                                        </h5>
                                        <li className="list-group-item">{event.teamIdentifier}</li>
                                        <h5>
                                            <Trans i18nKey="event.requiredEq"/>
                                        </h5>
                                        <li className="list-group-item">{event.requiredEquipment}</li>
                                        <h5>
                                            <Trans i18nKey="event.description"/>
                                        </h5>
                                        <li className="list-group-item">{event.description}</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                <div className="row">
                    <Link to={`/updateEvent/${event.teamIdentifier}/${
                        event.teamSequence}
                        }`}
                          className="view btn btn-success ">
                        <Trans i18nKey="event.editButton"/>
                    </Link>

                    <button
                        className="delete btn btn-danger "
                        onClick={this.onDeleteClick.bind(
                            this,
                            event.teamIdentifier,
                            event.teamSequence
                        )}
                    >
                        <Trans i18nKey="event.deleteButton"/>
                    </button>
                </div>
                </div>

        );
    }
}

Event.propTypes = {
    deleteEvent: PropTypes.func.isRequired
};

export default connect(null,{deleteEvent})(Event);