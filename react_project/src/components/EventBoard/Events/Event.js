import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {deleteEvent} from "../../../actions/eventslogActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Collapse, Button, CardBody, Card } from 'reactstrap';


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
            <div className={`card mb-2 bg-light ${disabl}`}>
                <div className={`card-header text-primary text-center ${priorityClass}`}>
                    <div className="eventer">{event.nameOfEvent}</div>
                </div>
                <div className="list-group">
                    <h5>Place:</h5>
                    <li className="list-group-item">{event.place}</li>
                    <h5>Start Date:</h5>
                    <li className="list-group-item">{event.startDate}</li>
                    <h5>End Date:</h5>
                    <li className="list-group-item">{event.endDate}</li>
                </div>



                    <div className="allInfo">
                        <Button color="primary" onClick={this.toggle} style={{ marginLeft:'1rem' , marginBottom: '2rem' , marginTop: '1rem' }} className="info">All Information:</Button>
                        Current state: {this.state.status}
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

                                        <div className="row">
                                        <h6>Cost:</h6>
                                        <li className="list-group-item col-md-2">{event.cost+"zł"}</li>
                                        <h6>Min Members:</h6>
                                        <li className="list-group-item col-md-1">{event.minNumberOfMembers}</li>
                                        <h6>Max Members:</h6>
                                        <li className="list-group-item col-md-1">{event.maxNumberOfMembers}</li>
                                        </div>
                                            <div className="row">
                                        <h5>Priority:</h5>
                                        <li className="list-group-item">{priorityString}</li>
                                        <h5>Status:</h5>
                                        <li className="list-group-item">{event.status}</li>
                                            </div>
                                        <h5>Event ID:</h5>
                                        <li className="list-group-item">{event.teamIdentifier}</li>
                                        <h5>Required Equipment:</h5>
                                        <li className="list-group-item">{event.requiredEquipment}</li>
                                        <h5>Description:</h5>
                                        <li className="list-group-item">{event.description}</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                <div className="row ">
                    <Link to={`/updateEvent/${event.teamIdentifier}/${
                        event.teamSequence}
                        }`}
                          className="view btn btn-success col-5">
                        View / Update
                    </Link>

                    <button
                        className="btn btn-danger col-5"
                        onClick={this.onDeleteClick.bind(
                            this,
                            event.teamIdentifier,
                            event.teamSequence
                        )}
                    >
                        Delete
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