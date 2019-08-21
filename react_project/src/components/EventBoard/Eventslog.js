import React, {Component} from 'react';
import Event from "./Events/Event";

class Eventslog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>In Past</h3>
                            </div>
                        </div>
                    <Event/>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Today</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 border-left">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Future</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Eventslog;