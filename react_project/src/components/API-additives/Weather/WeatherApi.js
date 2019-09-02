import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
//API access key:
const APIKey = '3bd17fcc0af94c30566296526e1f3429';


class WeatherApi extends Component {
constructor() {
super();
    this.state = {
        value: '',
        date: [],
        city: '',
        temp: [],
        weather: [],
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

    weatherMapMethod = () => {
    let content = null;
    const weather = this.state.weather;
    const err = this.state.err;
    const city = this.state.city;
    if(!err && city){

        return content = (
     weather.map((maps, i) => (

        <div className="cards" key={i}>
        <h5 className="card-header">
        <a data-toggle="collapse" href={`#/${i}`}  >
        <i className="fa fa-chevron-down pull-right"></i> Date: {maps.dt_txt}
        </a>
        </h5>

        <div id={`/${i}`} className="collapse" role="tabpanel" aria-labelledby="heading-example">
        <div className="card-body">
        <p>Temperature: {maps.main.temp} &#176;C</p>
    <p>Pressure: {maps.main.pressure} hPa</p>
    <p>Humidity: {maps.main.humidity} %</p>
    <p>Cloudy:{maps.weather.main} , {maps.weather.description}</p>
    <p>Percentage of cloud cover: {maps.clouds.all} %</p>
    <p>Wind speed: {maps.wind.speed} mph</p>
    </div>
    </div>
    </div>
    )
    )
    )
        }else {
    <div className="citySearch">
            We don't find {city}
            </div>
    }
}

    render() {
        const { city } = this.state;
        return (
            <div>
            <WeatherForm
    value={this.state.value}
    change={this.handleInputChange}
    //submit={this.handleCitySubmit}
    />
            <div className="cityResult">City: {city} </div>
            <div>

            <div className="container wrap 5">

                <div id="accordion" role="tablist" aria-multiselectable="true">
                    {this.weatherMapMethod()}
                </div>
                {/*<WeatherResult weather={this.state}/>*/}
            </div>
            </div>
            </div>
        );
    }
}

export default WeatherApi;