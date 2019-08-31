import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

//API access key:
const APIKey = '3bd17fcc0af94c30566296526e1f3429';


class WeatherApi extends Component {

    state = {
        value: '',
        date: [],
        city: '',
        temp: [
            {
                datetemp: '',
                temp: ''
            }

        ],
        err: false,
    };

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

                        temp: data.list.map(function (i, elem) {
                            // if (i%2===0){
                                return (
                                    // {
                                        datetemp: elem.dt_txt
                                        // temp: elem.main.temp
                                    // }

                                )
                            // }
                        }),
                        city: prevState.value,
                    }));
                console.log("data.list:", data.list);
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
        return (
            <div>
                <WeatherForm
                value={this.state.value}
                change={this.handleInputChange}
                //submit={this.handleCitySubmit}
                />
                <WeatherResult weather={this.state}/>
            </div>
        );
    }
}

export default WeatherApi;