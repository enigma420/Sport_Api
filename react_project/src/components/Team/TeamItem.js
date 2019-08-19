import React, {Component} from 'react';

class TeamItem extends Component {
    render() {
        return (
            <div className="container card card-body bg-info position-fixed" >
                <div className="card card-body bg-light mb-6">
                    <div className="row">
                        <div className="col-2 border-right">
                            <span className="mx-auto">Group</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6 border-right">
                            <h3>Spring / React Project</h3>
                            <p>Project to create Group and Teams with Spring Boot and React</p>
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