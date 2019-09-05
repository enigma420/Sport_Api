import React, {Component} from 'react';
import Event from "./Events/Event";

class Eventslog extends Component {
    render() {
        const { events_prop } = this.props;

        const events = events_prop.map(event => (
            <Event key={event.id} event={event}/>
        ));

        let countPastEvents = 0;
        let countTodayEvents = 0;
        let countFutureEvents = 0;

        let inPast = [];
        let today = [];
        let inFuture = [];

        for(let i = 0 ; i < events.length ; i++){

            if(events[i].props.event.status === "IN_PAST"){
                inPast.push(events[i]);
                countPastEvents++;
            }

            if(events[i].props.event.status === "TODAY"){
                today.push(events[i]);
                countTodayEvents++;
            }

            if(events[i].props.event.status === "IN_FUTURE"){
                inFuture.push(events[i]);
                countFutureEvents++;
            }
        }

        let totalEvents = countPastEvents + countTodayEvents + countFutureEvents;

        return (
            <div className="container">
                <h2 align="center">Amount of all Events: {totalEvents}</h2>
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>In Past </h3>
                                <p>Amount of Events: {countPastEvents}</p>
                            </div>
                        </div>
                        {inPast}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Today</h3>
                                <p>Amount of Events: {countTodayEvents}</p>
                            </div>
                        </div>
                        {today}
                    </div>
                    <div className="col-md-4 border-left">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Future</h3>
                                <p>Amount of Events: {countFutureEvents}</p>
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