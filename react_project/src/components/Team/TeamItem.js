import React, {Component} from 'react';

class TeamItem extends Component {
    render() {
        const { team } = this.props;
        return (
            <div className="container card card-body bg-info " >
                <div className="card card-body bg-light mb-6">
                    <div className="row">
                        <div className="col-2 border-right">
                            <h1>{team.nameOfTeam}</h1>
                            <h3>{team.teamIdentifier}</h3>
                            <h4>{team.nameOfTeamLeader}</h4>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6 border-right">
                            <h3>{team.typeOfSport}</h3>
                            <p>{team.description}</p>
                        </div>
                        <div className="col-md-4 d-flex d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1">Events</i>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1">Group Information</i>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item delete">
                                        <i className="fa fa-minus-circle pr-1">Delete Group</i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamItem;