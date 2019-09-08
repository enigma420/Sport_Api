import React, {Component} from 'react';
import WeatherForm from "../Weather/WeatherForm";
import Result from "./CountryResult";

class CountryApi extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            country: '',
            details: [],
            population: 0,
            err: false,
            capital: '',
            region: '',
            subregion:'',
            area:0,
            currencies:'',
            nameOfCountry:''
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

            fetch(`https://restcountries-v1.p.rapidapi.com/name/${this.state.value}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
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
                        population: data[0].population,
                        capital: data[0].capital,
                        region: data[0].region,
                        subregion: data[0].subregion,
                        area: data[0].area,
                        currencies: data[0].currencies,
                        nameOfCountry: data[0].name,

                        country: prevState.value
                    }));
                    console.log("data:" , data);
                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        country: prevState.value
                    }))
                });
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
                <Result city={this.state} style={{position: 'center'}}/>

            </div>
        );
    }
}

export default CountryApi;