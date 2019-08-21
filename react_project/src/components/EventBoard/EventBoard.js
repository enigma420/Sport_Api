import React, { Component } from "react";
import { Link } from "react-router-dom";
import Eventslog from "./Eventslog"

class EventBoard extends Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <div className="container">
                <Link to={`/addEvent/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle">Add Event</i>
                </Link>
                <br />
                <hr />

                <Eventslog/>
            </div>
        );
    }
}

export default EventBoard;