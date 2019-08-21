import React, {Component} from 'react';
import Event from "./Events/Event";

class Eventslog extends Component {
    render() {
        const { events_prop } = this.props;

        const events = events_prop.map(event => (
            <Event key={event.id} event={event}/>
        ));

        let inPast = [];
        let today = [];
        let inFuture = [];

        for(let i = 0 ; i < events.length ; i++){

            if(events[i].props.event.status === "IN_PAST"){
                inPast.push(events[i]);
            }

            if(events[i].props.event.status === "TODAY"){
                today.push(events[i]);
            }

            if(events[i].props.event.status === "IN_FUTURE"){
                inFuture.push(events[i]);
            }

        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>In Past</h3>
                            </div>
                        </div>
                        {inPast}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Today</h3>
                            </div>
                        </div>
                        {today}
                    </div>
                    <div className="col-md-4 border-left">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Future</h3>
                            </div>
                        </div>
                        {inFuture}
                    </div>
                </div>
            </div>
        );
    }
}

export default Eventslog;