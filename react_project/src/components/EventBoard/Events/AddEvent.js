import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";
import {addEvent} from "../../../actions/eventslogActions";
import PropTypes from "prop-types";

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

    render() {
        const { id } = this.props.match.params;

        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/eventBoard/${id}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Add Event</h4>
                            <p className="lead text-center">Team Name + Team Code</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <h5>Event name</h5>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="nameOfEvent"
                                        placeholder="Name..."
                                        value={this.state.nameOfEvent}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <h5>Description</h5>
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
                                           className="col-3 col-form-label">Place</label>
                                    <div className="col-3">
                                    <textarea
                                    className="form-control"
                                    placeholder="place..."
                                    name="place"
                                    value={this.state.place}
                                    onChange={this.onChange}
                                />
                                    </div>
                                    <label htmlFor="example-number-input"
                                           className="col-3 col-form-label">Cost</label>
                                    <div className="col-2">
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Cost"
                                            name="cost"
                                            value={this.state.cost}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-number-input"
                                           className="col-3 col-form-label">Start Date</label>
                                    <div className="col-3">
                                    <input
                                        type="datetime-local"
                                        className="form-control form-control-lg"
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <label htmlFor="example-number-input"
                                       className="col-3 col-form-label">End Date</label>
                                <div className="col-3">
                                    <input
                                        type="datetime-local"
                                        className="form-control form-control-lg"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-number-input"
                                           className="col-3 col-form-label">Minimal Members</label>
                                    <div className="col-3">
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Minimal Players"
                                            name="minNumberOfMembers"
                                            value={this.state.minNumberOfMembers}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <label htmlFor="example-number-input"
                                           className="col-3 col-form-label">Maximal Members</label>
                                    <div className="col-3">
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Maximal Players"
                                            name="maxNumberOfMembers"
                                            value={this.state.maxNumberOfMembers}
                                            onChange={this.onChange}
                                            />
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
                                    <h5>Required Equipment</h5>
                                    <textarea
                                        type="text"
                                        className="form-control form-control-lg "
                                        rows="3"
                                        name="requiredEquipment"
                                        placeholder="Required Equipment"
                                        value={this.state.requiredEquipment}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddEvent.propTypes = {
    addEvent: PropTypes.func.isRequired
};

export default connect(null,{addEvent})(AddEvent);