import React, {Component} from 'react';
import Result from "./CountryResult";
import CountryForm from "./CountryForm";

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
            currencies:[],
            nameOfCountry:'',
            items:[]
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
                        items: data[0].currencies.map(item => <tr>{item}</tr> ),
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

                <div className="container"style={{position: 'relative', display: 'block' , height:'550px'}} >
                <div className="list-group-country" style={{ position: 'relative',borderRight:'4px seagreen solid' ,borderLeft:'4px seagreen solid' ,borderTop:'4px seagreen solid' ,borderBottom:'3px seagreen solid' , boxShadow:'0px 0px 8px 3px rgba(0.3,0.5,0.5,0.5)' , borderRadius:'15px'}}>
                    <b>
                        <CountryForm
                            value={this.state.value}
                            change={this.handleInputChange}

                        />
                    </b>
                </div>
                    <Result city={this.state} style={{position: 'center'}}/>
            </div>
            </div>
        );
    }
}

export default CountryApi;