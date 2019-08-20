import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { createTeam } from "../../actions/teamActions";
import classnames from "classnames";

class CreateTeam extends Component {
    constructor() {
        super();

        this.state = {
            nameOfTeam: "",
            teamIdentifier: "",
            nameOfTeamLeader: "",
            typeOfSport: "",
            description: "",
            dateOfCreationTeam: "",
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
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newTeam = {
            nameOfTeam: this.state.nameOfTeam,
            teamIdentifier: this.state.teamIdentifier,
            nameOfTeamLeader: this.state.nameOfTeamLeader,
            typeOfSport: this.state.typeOfSport,
            description: this.state.description,
            dateOfCreationTeam: this.state.dateOfCreationTeam
        };
        this.props.createTeam(newTeam, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
                <div class="dashboard">
                <div className="container card card-body bg-info position-fixed" >
                    <form onSubmit={this.onSubmit}>
                <div className="form-row">

                    <div className="form-group col-md-3" >
                        <label htmlFor="inputAddress">Team Name</label>
                        <input
                            type="text"
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.nameOfTeam
                            })}
                            placeholder="Team Name"
                            name="nameOfTeam"
                            value={this.state.nameOfTeam}
                            onChange={this.onChange}
                        />
                        {errors.nameOfTeam && (
                            <div className="invalid-feedback">
                                {errors.nameOfTeam}
                            </div>
                        )}
                    </div>
                    <div className="form-group col-md-4 ml-5">
                        <label htmlFor="inputAddress2">Description</label>
                        <textarea
                            type="text"
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.description
                            })}
                            placeholder="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                        />
                        {errors.description && (
                            <div className="invalid-feedback">
                                {errors.description}
                            </div>
                        )}
                    </div>
                </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4">Leader Group Name</label>
                        <input
                            type="text"
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.nameOfTeamLeader
                            })}
                            placeholder="Password"
                            name="nameOfTeamLeader"
                            value={this.state.nameOfTeamLeader}
                            onChange={this.onChange}
                        />
                        {errors.nameOfTeamLeader && (
                            <div className="invalid-feedback">
                                {errors.nameOfTeamLeader}
                            </div>
                        )}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Team Identifier</label>
                        <input
                            type="text"
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.teamIdentifier
                            })}
                            placeholder="Team Identifier"
                            name="teamIdentifier"
                            value={this.state.teamIdentifier}
                            onChange={this.onChange}
                        />
                        {errors.teamIdentifier && (
                            <div className="invalid-feedback">
                                {errors.teamIdentifier}
                            </div>
                        )}
                    </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputCity">Type of Sport</label>
                        <input
                            type="text"
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.typeOfSport
                            })}
                            name="typeOfSport"
                            value={this.state.typeOfSport}
                            onChange={this.onChange}
                        />
                        {errors.typeOfSport && (
                            <div className="invalid-feedback">
                                {errors.typeOfSport}
                            </div>
                        )}
                    </div>
                    <div className="form-group col-md-4">
                        <div className="custom-file">
                            <label htmlFor="inputavatar">Date Of Create</label>
                            <input
                                type="date"
                                className={classnames("form-control form-control-lg" , {
                                    "is-invalid": errors.dateOfCreationTeam
                                })}
                                name="dateOfCreationTime"
                                value={this.state.dateOfCreationTeam}
                                onChange={this.onChange}
                            />
                            {errors.dateOfCreationTeam && (
                                <div className="invalid-feedback">
                                    {errors.dateOfCreationTeam}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
                </div>
        );
    }
}
CreateTeam.propTypes = {
    createTeam: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps,{createTeam})(CreateTeam);