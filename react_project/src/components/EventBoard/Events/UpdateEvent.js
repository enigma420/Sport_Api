import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getEvent, updateEvent} from "../../../actions/eventslogActions";
import {Trans} from "react-i18next";

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "#007bff",
    fontSize: 55,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

class UpdateEvent extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            teamSequence: "",
            nameOfEvent: "",
            description: "",
            place: "",
            cost: "",
            startDate: "",
            endDate: "",
            minNumberOfMembers: "",
            maxNumberOfMembers: "",
            priority: "",
            status: "",
            requiredEquipment: "",
            teamIdentifier: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        const {eventslog_id, pt_id} = this.props.match.params;
        this.props.getEvent(eventslog_id, pt_id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        const {
            id,
            teamSequence,
            nameOfEvent,
            description,
            place,
            cost,
            startDate,
            endDate,
            minNumberOfMembers,
            maxNumberOfMembers,
            priority,
            status,
            requiredEquipment,
            teamIdentifier
        } = nextProps.event;

        this.setState({
            id,
            teamSequence,
            nameOfEvent,
            description,
            place,
            cost,
            startDate,
            endDate,
            minNumberOfMembers,
            maxNumberOfMembers,
            priority,
            status,
            requiredEquipment,
            teamIdentifier
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const UpdateEvent = {
            id: this.state.id,
            teamSequence: this.state.teamSequence,
            nameOfEvent: this.state.nameOfEvent,
            description: this.state.description,
            place: this.state.place,
            cost: this.state.cost,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            minNumberOfMembers: this.state.minNumberOfMembers,
            maxNumberOfMembers: this.state.maxNumberOfMembers,
            priority: this.state.priority,
            status: this.state.status,
            requiredEquipment: this.state.requiredEquipment,
            teamIdentifier: this.state.teamIdentifier
        };

        this.props.updateEvent(
            this.state.teamIdentifier,
            this.state.teamSequence,
            UpdateEvent,
            this.props.history
        );

    }

    editEventForm = () => {
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h5>
                        <Trans i18nKey="editEvent.eventName"/>
                    </h5>
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.nameOfEvent
                        })}
                        name="nameOfEvent"
                        placeholder="Name..."
                        value={this.state.nameOfEvent}
                        onChange={this.onChange}
                    />
                    {errors.nameOfEvent && (
                        <div className="invalid-feedback">
                            {errors.nameOfEvent}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <h5>
                        <Trans i18nKey="editEvent.description"/>
                    </h5>
                    <textarea
                        className="form-control form-control-lg"
                        rows="3"
                        placeholder="description..."
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="editEvent.place"/>
                    </label>
                    <div className="col-3">
                                    <textarea
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.place
                                        })}
                                        placeholder="place..."
                                        name="place"
                                        value={this.state.place}
                                        onChange={this.onChange}
                                    />
                        {errors.place && (
                            <div className="invalid-feedback">
                                {errors.place}
                            </div>
                        )}
                    </div>
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="editEvent.cost"/>
                    </label>
                    <div className="col-2">
                        <input
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.cost
                            })}
                            type="number"
                            placeholder="Cost"
                            name="cost"
                            value={this.state.cost}
                            onChange={this.onChange}
                        />
                        {errors.cost && (
                            <div className="invalid-feedback">
                                {errors.cost}
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="editEvent.eventStart"/>
                    </label>
                    <div className="col-3">
                        <input
                            type="datetime-local"
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.startDate
                            })}
                            name="startDate"
                            value={this.state.startDate}
                            onChange={this.onChange}
                        />
                        {errors.startDate && (
                            <div className="invalid-feedback">
                                {errors.startDate}
                            </div>
                        )}
                    </div>
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="editEvent.eventEnd"/>
                    </label>
                    <div className="col-3">
                        <input
                            type="datetime-local"
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.endDate
                            })}
                            name="endDate"
                            value={this.state.endDate}
                            onChange={this.onChange}
                        />
                        {errors.endDate && (
                            <div className="invalid-feedback">
                                {errors.endDate}
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="editEvent.minMembers"/>
                    </label>
                    <div className="col-3">
                        <input
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.minNumberOfMembers
                            })}
                            type="number"
                            placeholder="Minimal Players"
                            name="minNumberOfMembers"
                            value={this.state.minNumberOfMembers}
                            onChange={this.onChange}
                        />
                        {errors.minNumberOfMembers && (
                            <div className="invalid-feedback">
                                {errors.minNumberOfMembers}
                            </div>
                        )}
                    </div>
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="editEvent.maxMembers"/>
                    </label>
                    <div className="col-3">
                        <input
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.maxNumberOfMembers
                            })}
                            type="number"
                            placeholder="Maximal Players"
                            name="maxNumberOfMembers"
                            value={this.state.maxNumberOfMembers}
                            onChange={this.onChange}
                        />
                        {errors.maxNumberOfMembers && (
                            <div className="invalid-feedback">
                                {errors.maxNumberOfMembers}
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <select
                            className="form-control form-control-lg"
                            name="priority"
                            value={this.state.priority}
                            onChange={this.onChange}
                        >
                            <option value={0}>Select Priority</option>
                            <option value={1}>High</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Low</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <select
                            className="form-control form-control-lg"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value="">Select Status</option>
                            <option value="IN_PAST">In Past</option>
                            <option value="TODAY">Today</option>
                            <option value="IN_FUTURE">In Future</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <h5>
                        <Trans i18nKey="editEvent.requiredEq"/>
                    </h5>
                    <textarea
                        className="form-control form-control-lg "
                        rows="3"
                        name="requiredEquipment"
                        placeholder="Required Equipment"
                        value={this.state.requiredEquipment}
                        onChange={this.onChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                >
                    <h2><Trans i18nKey="editEvent.edit"/></h2>
                </button>
            </form>
        )
    };


    render() {
        return (
            <div className="dashboard">
                <Link to={`/eventBoard/${this.state.teamIdentifier}`}>
                    <div id="back">
                        <Trans i18nKey="editEvent.back"/>
                    </div>
                </Link>
                <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h6 style={teamLeadStyle}>
                                <Trans i18nKey="editEvent.editEvent"/>
                            </h6>
                            <hr/>
                            {this.editEventForm()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateEvent.propTypes = {
    getEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
    updateEvent: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    event: state.eventslog.event,
    errors: state.errors
});

export default connect(mapStateToProps, {getEvent, updateEvent})(UpdateEvent);