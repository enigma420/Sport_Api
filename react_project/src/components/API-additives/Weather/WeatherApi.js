import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import ListGroupCollapse from "./ListGroupCollapse";
import Container from "reactstrap/es/Container";
import {Collapse} from "reactstrap";

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
            value:e.target.value
        })
    };

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

            <div style={{ marginRight:'10px' , marginLeft:'10px' , backgroundColor:'lightskyblue' , borderRadius:'20px'}}>

                {Object.keys(weatherParameters).map((key, index) =>
                    <ListGroupCollapse key={index} parameters={weatherParameters[key]}/>
                )}
            </div>
            )
    };

    getCityParameters = () => {
        const city = this.state.city;
        const error = this.state.err;
        const cityParameters = this.state.detectedCityParameters;
        let content = null;

        if (!error && city) {

            content = (
                <div className="list-group-country" style={{ marginTop:'10px' , marginRight:'180px' , marginLeft:'180px' , backgroundColor:'lightskyblue' , borderRadius:'20px' , border:'5px solid seagreen' , padding:'1px'}}>
                    <div className="cityApiResult" >
                        <h2><b>Detected City: {cityParameters.name}</b></h2>
                        <hr/>
                        <h3><b>Country Code: {cityParameters.country}</b></h3>
                        <h4><b>Population: {cityParameters.population}</b></h4>
                        <h4><b>TimeZone: {cityParameters.timezone}</b></h4>
                        <h4><b>Sunrise: {cityParameters.sunrise}</b></h4>
                        <h4><b>Sunset: {cityParameters.sunset}</b></h4>
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
            <div className="container" style={{position:"fixed"}}>
            <WeatherForm
    value={this.state.value}
    change={this.handleInputChange}
    //submit={this.handleCitySubmit}
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