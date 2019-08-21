import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Event extends Component {
    render() {
        const{ event } = this.props;

        let priorityString;
        let priorityClass;

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
            <div className="card mb-1 bg-light">
                <div className={`card-header text-primary ${priorityClass}`}>
                    ID: {event.teamSequence} -- Priority:{priorityString}
                    {event.priority}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{event.nameOfEvent}</h5>
                    <p className="card-text text-truncate ">
                        {event.description}
                    </p>
                    <Link to={`/updateEvent/${event.teamIdentifier}/${
                        event.teamSequence}
                        }`} href="#"
                          className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4">Delete</button>
                </div>
            </div>
        );
    }
}

export default Event;