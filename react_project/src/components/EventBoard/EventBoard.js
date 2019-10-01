import React, { Component } from "react";
import { Link } from "react-router-dom";
import Eventslog from "./Eventslog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { getEventslog} from "../../actions/eventslogActions";
import {Trans} from "react-i18next";


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
                    );} else if (errors.projectIdentifier) {
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            {errors.projectIdentifier}
                        </div>
                    );
                } else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            <Trans i18nKey="eventBoard.noEventsOnBoard"/>
                        </div>
                    );
                }
            } else {
                return <Eventslog events_prop = {events} />;
            }
        };

        BoardContent = boardAlgorithm(errors, events);

        return (
            <div className="dashboard">
            <div className="eventboard"  style={{borderRadius:'8px'}}>
                <h2 className="TEAM_LEAD">
                    <Trans i18nKey="eventBoard.events"/>
                </h2>
                <br />
                <React.Fragment>
                    <Link to={`/addEvent/${id}`} className="btn btn-lg btn-primary">
                        <i className="fas fa-plus-circle">&nbsp;
                            <Trans i18nKey="eventBoard.createEvent"/>
                        </i>
                    </Link>
                </React.Fragment>
                <br />
                <hr />
                {BoardContent}
            </div>
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