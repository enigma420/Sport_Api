import React, {Component} from "react";
import {getTeam, createTeam} from "../../actions/teamActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";

class EditTeam extends Component {
constructor(){
    super();

    this.state = {
        id: "",
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
        this.setState({errors: nextProps.errors });
    }
const{
    id,
    nameOfTeam,
    teamIdentifier,
    nameOfTeamLeader,
    typeOfSport,
    description,
    dateOfCreationTeam
} = nextProps.team;

this.setState({
    id,
    nameOfTeam,
    teamIdentifier,
    nameOfTeamLeader,
    typeOfSport,
    description,
    dateOfCreationTeam
})

}

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getTeam(id,this.props.history);
    }


    onChange(e){
    this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
    e.preventDefault();

    const editTeam = {
        id: this.state.id,
        nameOfTeam: this.state.nameOfTeam,
        teamIdentifier: this.state.teamIdentifier,
        nameOfTeamLeader: this.state.nameOfTeamLeader,
        typeOfSport: this.state.typeOfSport,
        description: this.state.description,
        dateOfCreationTeam: this.state.dateOfCreationTeam
    };

    this.props.createTeam(editTeam, this.props.history);
    }

    render() {
    const{errors} = this.state;
        return (
            <div className="dashboard">
                <Link to="/dashboard">
                    <div id="back">Back to Dashboard</div>
                </Link>
                <div className="container2">

                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="TEAM_LEAD">Modify Team</h1>
                                <hr/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <h5>Team Name:</h5>
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
                                        <h5>Team Identifier:</h5>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Unique Team ID"
                                            name="teamIdentifier"
                                            value={this.state.teamIdentifier}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <h5>Description:</h5>
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
                                        <h5>Team Leader:</h5>
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
                                        <h5>Type of Sport:</h5>
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
                                    <input
                                        type="submit"
                                        className="btn btn-success btn-block mt-4"
                                        value="Modify"
                                    />
                                </form>
                            </div>
                        </div>
            </div>
            </div>

        );
    }
}

EditTeam.propTypes = {
    getTeam: PropTypes.func.isRequired,
    createTeam: PropTypes.func.isRequired,
    team: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    team: state.team.team,
    errors: state.errors
});

export default connect(mapStateToProps,{getTeam, createTeam})(EditTeam);
