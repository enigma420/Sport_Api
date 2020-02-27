import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {deleteEvent} from "../../../actions/eventslogActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Trans} from "react-i18next";
import moment from 'moment'

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
    

    changeTimeStampIntoDateTime = (timeStamp) => {
        return <span>{moment(timeStamp).format('lll')}</span>
    };

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
            <div className={`card mb-2 bg-muted ${disabl}`} style={{ border:'3px solid dodgerblue' , marginTop:'5px'}}>
                <div className={`card-header text-primary text-center ${priorityClass}`} style={{width:'100%' , }}>
                    <div className="eventer">{event.nameOfEvent}</div>
                </div>
                <div className="list-group" style={{textAlign:'center'}}>
                    <h5>
                        <Trans i18nKey="event.place"/>
                    </h5>
                    <li className="list-group-item">{event.place}</li>
                    <h5>
                        <Trans i18nKey="event.eventStart"/>
                    </h5>
                    <li className="list-group-item">{this.changeTimeStampIntoDateTime(event.startDate)}</li>
                    <h5>
                        <Trans i18nKey="event.eventEnd"/>
                    </h5>
                    <li className="list-group-item">{this.changeTimeStampIntoDateTime(event.endDate)}</li>
                </div>



                    <div className="allInfo" style={{margin:'5px'}}>
                        <Button color="primary" onClick={this.toggle} style={{ marginLeft:'3rem' , marginBottom: '1rem' , marginTop: '1rem' }} className="info">
                            <Trans i18nKey="event.allInfo"/>
                        </Button>

                        <Trans i18nKey="event.allInfoCurrentState"/>
                        &nbsp;
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
                                    <ul className=" list-group" style={{textAlign:'center'}}>
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
                                            <Trans i18nKey="event.priot"/>
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
               <Link to={`/updateEvent/${event.teamIdentifier}/${event.teamSequence}`} className="view btn btn-success " >
                   <div style={{fontSize:'10px',fontWeight:'bolder' , color:'white'}}><Trans i18nKey="event.editButton"/></div>
                </Link>
                    <button style={{}}
                        className="delete btn btn-danger "
                        onClick={this.onDeleteClick.bind(
                            this,
                            event.teamIdentifier,
                            event.teamSequence
                        )}
                    >
                       <div style={{fontSize:'10px',fontWeight:'bolder'}}><Trans i18nKey="event.deleteButton"/></div>
                    </button>

                </div>

        );
    }
}

Event.propTypes = {
    deleteEvent: PropTypes.func.isRequired
};

export default connect(null,{deleteEvent})(Event);