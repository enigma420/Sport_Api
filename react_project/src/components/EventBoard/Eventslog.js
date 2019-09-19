import React, {Component} from 'react';
import Event from "./Events/Event";
import {Trans} from "react-i18next";

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
                <h2 align="center">
                    <Trans i18nKey="eventslog.amountOfEvents"/>
                    {totalEvents}
                </h2>
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="cards text-center mb-2" style={{minWidth:'100%'}}>
                            <div className="card-header bg-secondary text-white">
                                <h3>
                                    <Trans i18nKey="eventslog.past"/>
                                </h3>
                                <p>
                                    <Trans i18nKey="eventslog.amountOfEachEvents"/>
                                    {countPastEvents}
                                </p>
                            </div>
                        </div>
                        {inPast}
                    </div>
                    <div className="col-md-4">
                        <div className="cards text-center ">
                            <div className="card-header bg-success text-white">
                                <h3>
                                    <Trans i18nKey="eventslog.today"/>
                                </h3>
                                <p>
                                    <Trans i18nKey="eventslog.amountOfEachEvents"/>
                                    {countTodayEvents}
                                </p>
                            </div>
                        </div>
                        {today}
                    </div>
                    <div className="col-md-4 border-left">
                        <div className="cards text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>
                                    <Trans i18nKey="eventslog.future"/>
                                </h3>
                                <p>
                                    <Trans i18nKey="eventslog.amountOfEachEvents"/>
                                    {countFutureEvents}
                                </p>
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