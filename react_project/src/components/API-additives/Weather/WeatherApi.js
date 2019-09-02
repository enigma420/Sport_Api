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


    render() {
        const{weather} = this.state;
        const weathermap = weather && weather.map(maps => (

            <div>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                <h1>Date: {maps.dt_txt}</h1>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body">
                            <p>Temperature: {maps.main.temp} &#176;C</p>
                            <p>Pressure: {maps.main.pressure} hPa</p>
                            <p>Humidity: {maps.main.humidity} %</p>
                            {/*<h2>Cloudy:{maps.weather.main} , {maps.weather.description}</h2>*/}
                            <p>Percentage of cloud cover: {maps.clouds.all} %</p>
                            <p>Wind speed: {maps.wind.speed} mph</p>
                                                 </div>
                    </div>


            </div>
            </div>
                ));
        return (
            <div>
                <WeatherForm
                value={this.state.value}
                change={this.handleInputChange}
                //submit={this.handleCitySubmit}
                />
                <div className="accordion">
                {weathermap}
                </div>
                {/*<WeatherResult weather={this.state}/>*/}
            </div>
        );
    }
}

export default WeatherApi;