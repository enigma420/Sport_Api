import React, { Component } from "react";
import {createNewUser} from "../../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
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

class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            fullName: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };

        this.props.createNewUser(newUser, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    registrationForm = () => {
        const {errors} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg" , {
                            "is-invalid": errors.fullName
                        })}
                        placeholder="Full Name"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.onChange}
                    />
                    {errors.fullName && (
                        <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.username
                        })}
                        placeholder="Email Address (Username)"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                    />
                    {errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className={classnames("form-control form-control-lg" , {
                            "is-invalid": errors.password
                        })}
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className={classnames("form-control form-control-lg" , {
                            "is-invalid": errors.confirmPassword
                        })}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                    />
                    {errors.confirmPassword && (
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-success btn-block mt-4 col-auto" value="Create Account">
                    <h2><Trans i18nKey="register.create"/></h2>
                </button>
            </form>
        )
    }

    render() {

        return (
            <div className="dashboard">
                <Link to="/">
                    <div id="back">
                        <Trans i18nKey="register.back"/>
                    </div>
                </Link>
                <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 style={teamLeadStyle}>
                                <Trans i18nKey="header.signUp"/>
                            </h1>
                            <hr/>
                            <p className="lead text-center">
                                <Trans i18nKey="register.info"/>
                            </p>
                            {this.registrationForm()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});

export default connect(mapStateToProps,{createNewUser})(Register);