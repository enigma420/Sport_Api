import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";
import {addEvent} from "../../../actions/eventslogActions";
import PropTypes from "prop-types";
import {Trans} from "react-i18next";

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "#007bff",
    fontSize: 55,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

class AddEvent extends Component {
    constructor(props){
        super(props);
        const{id} = this.props.match.params;

        this.state = {
            nameOfEvent: "",
            description: "",
            place: "",
            cost: 0,
            startDate: "",
            endDate: "",
            minNumberOfMembers: 0,
            maxNumberOfMembers: "",
            priority: 0,
            status: "",
            requiredEquipment: "",
            teamIdentifier: id,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    if(nextProps.errors){
        this.setState({errors: nextProps.errors});
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const newEvent = {
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
        };

        this.props.addEvent(
            this.state.teamIdentifier,
            newEvent,
            this.props.history
        );

    }

    addEventForm = () =>{
        const { errors } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h5>
                        <Trans i18nKey="createEvent.eventName"/>
                    </h5>
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg" , {
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
                        <Trans i18nKey="createEvent.description"/>
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
                        <Trans i18nKey="createEvent.place"/>
                    </label>
                    <div className="col-3">
                                    <textarea
                                        className={classnames("form-control form-control-lg" , {
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
                        <Trans i18nKey="createEvent.cost"/>
                    </label>
                    <div className="col-2">
                        <input
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.cost
                            })}
                            type="number"
                            placeholder="Cost"
                            name="cost"
                            value={this.state.cost}
                            onChange={this.onChange}
                        />
                        { errors.cost && (
                            <div className="invalid-feedback">
                                {errors.cost}
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="createEvent.eventStart"/>
                    </label>
                    <div className="col-3">
                        <input
                            type="datetime-local"
                            className={classnames("form-control form-control-lg" , {
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
                        <Trans i18nKey="createEvent.eventEnd"/>
                    </label>
                    <div className="col-3">
                        <input
                            type="datetime-local"
                            className={classnames("form-control form-control-lg" , {
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
                        <Trans i18nKey="createEvent.minMembers"/>
                    </label>
                    <div className="col-3">
                        <input
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.minNumberOfMembers
                            })}
                            type="number"
                            placeholder="Minimal Players"
                            name="minNumberOfMembers"
                            value={this.state.minNumberOfMembers}
                            onChange={this.onChange}
                        />
                        { errors.minNumberOfMembers && (
                            <div className="invalid-feedback">
                                {errors.minNumberOfMembers}
                            </div>
                        )}
                    </div>
                    <label htmlFor="example-number-input"
                           className="col-3 col-form-label">
                        <Trans i18nKey="createEvent.maxMembers"/>
                    </label>
                    <div className="col-3">
                        <input
                            className={classnames("form-control form-control-lg" , {
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
                            <option value={0}>Select Priority...</option>
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
                            <option value="">Select Status...</option>
                            <option value="IN_PAST">In Past</option>
                            <option value="TODAY">Today</option>
                            <option value="IN_FUTURE">In Future</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <h5>
                        <Trans i18nKey="createEvent.requiredEq"/>
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
                    className="btn btn-success btn-block mt-4"
                    value="Create"
                >
                    <h2><Trans i18nKey="createEvent.create"/></h2>
                </button>
            </form>
        )
    };


    render() {
        const { id } = this.props.match.params;
        return (
                <div className="dashboard">
                    <Link to={`/eventBoard/${id}`} >
                        <div id="back">
                            <Trans i18nKey="createEvent.back"/>
                        </div>
                    </Link>
                <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 style={teamLeadStyle}>
                                <Trans i18nKey="createEvent.createEvent"/>
                            </h1>
                            <hr/>
                            {this.addEventForm()}
                        </div>
                    </div>
                    </div>
                    </div>
        );
    }
}

AddEvent.propTypes = {
    addEvent: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{addEvent})(AddEvent);