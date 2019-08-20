import React, {Component} from "react";
import {getTeam} from "../../actions/teamActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";

class EditTeam extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getTeam(id,this.props.history);
    }

    render() {
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
                                            className="form-control form-control-lg"
                                            placeholder="Team Name"
                                            name="nameOfTeam"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Unique Team ID"
                                            name="teamIdentifier"
                                            disabled
                                        />

                                    </div>
                                    <div className="form-group">
                   <textarea
                       type="text"
                       className="form-control form-control-lg"
                       placeholder="description"
                       name="description"
                   />


                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Name of Team Leader"
                                            name="nameOfTeamLeader"
                                            disabled
                                        />

                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Type Of Sport"
                                            name="typeOfSport"
                                        />

                                    </div>
                                    <h6>Creational Date</h6>
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            className="form-control form-control-lg"
                                            name="dateOfCreationTime"
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

EditTeam.propTypes = {
    getTeam: PropTypes.func.isRequired,
    team: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    team: state.team.team
});

export default connect(mapStateToProps,{getTeam})(EditTeam);
