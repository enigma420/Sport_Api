import React, { Component } from "react";
import { Link } from "react-router-dom";
import Eventslog from "./Eventslog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { getEventslog} from "../../actions/eventslogActions";

class EventBoard extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getEventslog(id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    render() {
        const { id } = this.props.match.params;
        const { events } = this.props.eventslog;
        const { errors } = this.state;

        let BoardContent;

        const boardAlgorithm = (errors, events) => {
            if(events.length < 1){
                if(errors.teamNotFound){
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            {errors.teamNotFound}
                        </div>
                    );
                } else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            No Events on this board
                        </div>
                    );
                }
            } else {
                return <Eventslog events_prop = {events} />;
            }
        };

        BoardContent = boardAlgorithm(errors, events);

        return (
            <div className="container">
                <Link to={`/addEvent/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle">Add Event</i>
                </Link>
                <br />
                <hr />
                {BoardContent}
            </div>
        );
    }
}

EventBoard.propTypes = {
    eventslog: PropTypes.object.isRequired,
    getEventslog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    eventslog: state.eventslog,
    errors: state.errors
});

export default connect(mapStateToProps,{getEventslog})(EventBoard);