import React, { Component } from "react";
import { Link } from "react-router-dom";
import Eventslog from "./Eventslog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { getEventslog} from "../../actions/eventslogActions";

class EventBoard extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getEventslog(id);
    }

    render() {
        const { id } = this.props.match.params;
        const { events } = this.props.eventslog;
        return (
            <div className="container">
                <Link to={`/addEvent/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle">Add Event</i>
                </Link>
                <br />
                <hr />

                <Eventslog events_prop={events}/>
            </div>
        );
    }
}

EventBoard.propTypes = {
    eventslog: PropTypes.object.isRequired,
    getEventslog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    eventslog: state.eventslog
});

export default connect(mapStateToProps,{getEventslog})(EventBoard);