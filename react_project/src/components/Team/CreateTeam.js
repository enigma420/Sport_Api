import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { createTeam } from "../../actions/teamActions";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {Trans} from "react-i18next";

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "#007bff",
    fontSize: 55,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

class CreateTeam extends Component {
    constructor(props) {
        super(props);

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
            dateOfCreationTeam: Date.now()
        };
        this.props.createTeam(newTeam, this.props.history);
    }

    createTeamForm = () => {
        const {errors} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h5>
                        <Trans i18nKey="createTeam.teamName"/>
                    </h5>
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
                    <h5>
                        <Trans i18nKey="createTeam.teamId"/>
                    </h5>
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
                    <h5>
                        <Trans i18nKey="createTeam.description"/>
                    </h5>
                    <textarea

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
                    <h5>
                        <Trans i18nKey="createTeam.teamLeader"/>
                    </h5>
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
                    <h5>
                        <Trans i18nKey="createTeam.typeOfSport"/>
                    </h5>
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
                <br/>
                <button type="submit" className="btn btn-primary btn-block ">
                    <h2><Trans i18nKey="createTeam.create"/></h2>
                </button>
            </form>
        )
    }

    render() {

        return (
            <div>
                <Link to="/dashboard">
                    <div id="back">
                        <Trans i18nKey="createTeam.back"/>
                    </div>
                </Link>
                <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h6 style={teamLeadStyle}>
                                <Trans i18nKey="createTeam.createTeam"/>
                            </h6>
                            <hr/>
                            {this.createTeamForm()}
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