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
            <div>
            <div className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Team form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
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
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.teamIdentifier
                                        })}
                                        placeholder="Unique Team ID"
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
                                <div className="form-group">
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
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.nameOfTeamLeader
                                        })}
                                        placeholder="Name of Team Leader"
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
                         <div className="form-group">
                                <input
                                    type="text"
                                    className={classnames("form-control form-control-lg" , {
                                        "is-invalid": errors.typeOfSport
                                    })}
                                    placeholder="Type Of Sport"
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
                        <h6>Creational Date</h6>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                name="dateOfCreationTime"
                                value={this.state.dateOfCreationTeam}
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
});

export default connect(mapStateToProps,{createTeam})(CreateTeam);