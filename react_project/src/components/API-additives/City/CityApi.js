import React, {Component} from 'react';
import WeatherForm from "../Weather/WeatherForm";
import Result from "./CityResult";

class CityApi extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            city: '',
            details: [],
            err: false
        };
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.value.length === 0) return;

        if (prevState.value !== this.state.value) {

            fetch(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${this.state.value}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
                    "x-rapidapi-key": "7c0501c546msh09c18d73d2cc4bep17fb82jsnd91a54a80822"
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error("Fail")
                })
                .then(response => response.json())
                .then(data => {
                    this.setState(prevState => ({
                        err: false,
                        details: data.population,
                        city: prevState.value
                    }));
                    console.log("data:" , data);
                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        city: prevState.value
                    }))
                });
        }
    }

    render() {
        const {city} = this.state;
        return (
            <div>
                <WeatherForm
                    value={this.state.value}
                    change={this.handleInputChange}
                    //submit={this.handleCitySubmit}
                />
                <Result city={this.state}/>

            </div>
        );
    }
}

export default CityApi;