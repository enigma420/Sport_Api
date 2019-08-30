import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {login} from "../../actions/securityActions";
import {Link} from "react-router-dom";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
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
        if (nextProps.security.validToken){
            this.props.history.push("/dashboard")
        }
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }



    onSubmit(e){
        e.preventDefault();
        const LoginRequest = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(LoginRequest);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="login">
            <div className="dashboard">
                    <Link to="/">
                        <div id="back">Back to Welcome Page</div>
                    </Link>
                    <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="TEAM_LEAD">Login</h1>
                        <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg" , {
                                            "is-invalid": errors.username
                                        })}
                                        placeholder="Email Address"
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
                                <input type="submit" className="btn btn-success btn-block mt-4" value="Sign in" />
                            </form>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});


export default connect(mapStateToProps,{login})(Login);