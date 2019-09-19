import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import ListGroupCollapse from "./ListGroupCollapse";
import Container from "reactstrap/es/Container";
import {Collapse} from "reactstrap";
import NumberFormat from 'react-number-format';
import moment from 'moment'
const { getCode, getName } = require('country-list');

//API access key:
const APIKey = '3bd17fcc0af94c30566296526e1f3429';


class WeatherApi extends Component {
constructor() {
super();
    this.state = {
        value: '',
        city: '',
        weather: [],
        detectedCityParameters: [],
        err: false,
    };

}

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    handleCitySubmit = (e) => {
        this.setState({
            value:e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if(this.state.value.length === 0) return;

        if(prevState.value !== this.state.value){
            const API = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&APPID=${APIKey}&units=metric`;
        fetch(API)
            .then(response => {
                if(response.ok){
                    return response
                }
                throw Error("Fail")
            })
            .then(response => response.json())
            .then(data => {
                    this.setState(prevState => ({
                        err: false,
                        weather: data.list,
                        detectedCityParameters: data.city,
                        city: prevState.value,
                    }));
                // console.log("data.list:", data.list);
            })
            .catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    err: true,
                    city: prevState.value
                }))
            });
            console.log("temp: ", this.state.temp);
        }

    }

    getWeatherParameters = () => {
    const weatherParameters = this.state.weather;

        return (

            <div style={{  backgroundColor:'lightskyblue' , borderRadius:'25px'}}>

                {Object.keys(weatherParameters).map((key, index) =>
                    <ListGroupCollapse key={index} parameters={weatherParameters[key]}/>
                )}
            </div>
            )
    };

    changeTimeZoneIntoGMT = (timeZone) => {
        if(timeZone === -43200){
            return <span>GMT-12</span>
        }
        if(timeZone === -41400){
            return <span>GMT-11.5</span>
        }
        if(timeZone === -39600){
            return <span>GMT-11</span>
        }
        if(timeZone === -37800){
            return <span>GMT-10.5</span>
        }
        if(timeZone === -36000){
            return <span>GMT-10</span>
        }
        if(timeZone === -34200){
            return <span>GMT-9.5</span>
        }
        if(timeZone === -32400){
            return <span>GMT-9</span>
        }
        if(timeZone === -30600){
            return <span>GMT-8.5</span>
        }
        if(timeZone === -28800){
            return <span>GMT-8</span>
        }
        if(timeZone === -27000){
            return <span>GMT-7.5</span>
        }
        if(timeZone === -25200){
            return <span>GMT-7</span>
        }
        if(timeZone === -23400){
            return <span>GMT-6.5</span>
        }
        if(timeZone === -21600){
            return <span>GMT-6</span>
        }
        if(timeZone === -19800){
            return <span>GMT-5.5</span>
        }
        if(timeZone === -18000){
            return <span>GMT-5</span>
        }
        if(timeZone === -16200){
            return <span>GMT-4.5</span>
        }
        if(timeZone === -14400){
            return <span>GMT-4</span>
        }
        if(timeZone === -12600){
            return <span>GMT-3.5</span>
        }
        if(timeZone === -10800){
            return <span>GMT-3</span>
        }
        if(timeZone === -9000){
            return <span>GMT-2.5</span>
        }
        if(timeZone === -7200){
            return <span>GMT-2</span>
        }
        if(timeZone === -5400){
            return <span>GMT-1.5</span>
        }
        if(timeZone === -3600){
            return <span>GMT-1</span>
        }
        if(timeZone === -1800){
            return <span>GMT-0.5</span>
        }
        if(timeZone === 0){
            return <span>GMT 0</span>
        }
        if(timeZone === 1800){
            return <span>GMT+0.5</span>
        }
        if(timeZone === 3600){
            return <span>GMT+1</span>
        }
        if(timeZone === 5400){
            return <span>GMT+1.5</span>
        }
        if(timeZone === 7200){
            return <span>GMT+2</span>
        }
        if(timeZone === 9000){
            return <span>GMT+2.5</span>
        }
        if(timeZone === 10800){
            return <span>GMT+3</span>
        }
        if(timeZone === 12600){
            return <span>GMT+3.5</span>
        }
        if(timeZone === 14400){
            return <span>GMT+4</span>
        }
        if(timeZone === 16200){
            return <span>GMT+4.5</span>
        }
        if(timeZone === 18000){
            return <span>GMT+5</span>
        }
        if(timeZone === 19800){
            return <span>GMT+5.5</span>
        }
        if(timeZone === 21600){
            return <span>GMT+6</span>
        }
        if(timeZone === 23400){
            return <span>GMT+6.5</span>
        }
        if(timeZone === 25200){
            return <span>GMT+7</span>
        }
        if(timeZone === 27000){
            return <span>GMT+7.5</span>
        }
        if(timeZone === 28800){
            return <span>GMT+8</span>
        }
        if(timeZone === 30600){
            return <span>GMT+8.5</span>
        }
        if(timeZone === 32400){
            return <span>GMT+9</span>
        }
        if(timeZone === 34200){
            return <span>GMT+9.5</span>
        }
        if(timeZone === 36000){
            return <span>GMT+10</span>
        }
        if(timeZone === 37800){
            return <span>GMT+10.5</span>
        }
        if(timeZone === 39600){
            return <span>GMT+11</span>
        }
        if(timeZone === 41400){
            return <span>GMT+11.5</span>
        }
        if(timeZone === 43200){
            return <span>GMT+12</span>
        }
    };

    changeTimeStampIntoDateTime = (timeStamp) => {
        return <span>{moment(timeStamp).format('lll')}</span>
    };

    getCityParameters = () => {
        const city = this.state.city;
        const error = this.state.err;
        const cityParameters = this.state.detectedCityParameters;
        let content = null;

        if (!error && city) {

            content = (
                <div className="list-group-country" style={{ marginTop:'10px' , marginRight:'120px' , marginLeft:'120px' , backgroundColor:'lightskyblue' , borderRadius:'20px' , border:'5px solid seagreen' , padding:'1px'}}>
                    <div className="cityApiResult" >
                        <h2><b>Detected City: {cityParameters.name}</b></h2>
                        <hr/>
                        <h3><b>Country Code: {cityParameters.country}</b></h3>
                        <h3><b>Country Name: {getName(cityParameters.country)}</b></h3>
                        <h4><b>Population: <NumberFormat value={cityParameters.population} displayType={'text'} thousandSeparator={true}/>

                        </b></h4>
                        <h4><b>Time-Zone: {this.changeTimeZoneIntoGMT(cityParameters.timezone)}</b></h4>
                        <h4><b>Sunrise: {this.changeTimeStampIntoDateTime(cityParameters.sunrise)}</b></h4>
                        <h4><b>Sunset: {this.changeTimeStampIntoDateTime(cityParameters.sunset)}</b></h4>
                        <hr/>
                    </div>
                </div>
            )
        }

        return (
            <div className="result">
                {error ? `We don't find anything` : content}
            </div>
        )
    }

    render() {
        return (
            <div style={{ minHeight:'80%' , marginBottom:'8%'}}>
            <WeatherForm
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
    />
            {this.getCityParameters()}
            <div>

                <div className="collapseItems list-group-country" style={{ marginRight:'5px' , marginLeft:'5px' , backgroundColor:'lightskyblue' , borderRadius:'20px' , border:'5px solid seagreen' }}>
                    {this.getWeatherParameters()}
            </div>
            </div>
            </div>
        );
    }
}

export default WeatherApi;