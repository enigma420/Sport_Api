import React, {Component} from 'react';
import Result from "../Currency/CurrencyResult";

class CurrencyApi extends Component {
    constructor() {
        super();
        this.state = {
            valueAmount: '',
            valueFromCurrency: 'EUR',
            valueToCurrency: 'USD',
            err: false,
            rate:''
        };

    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidMount() {
        // Call this function so that it fetch first time right after mounting the component
        this.getApiResponse();

        // set Interval
        this.interval = setInterval(this.getApiResponse, 5000);
    }

    componentWillUnmount() {
        // Clear the interval right before component unmount
        clearInterval(this.interval);
    }


    getApiResponse = () => {

            fetch(`https://currency-exchange.p.rapidapi.com/exchange?q=${this.state.valueAmount}&from=${this.state.valueFromCurrency}&to=${this.state.valueToCurrency}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
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
                        amount: prevState.valueAmount,
                        fromCurrency: prevState.valueFromCurrency,
                        toCurrency: prevState.valueToCurrency,
                        rate: data
                    }));
                    console.log("data: " , data)
                    // console.log("UPDATE 1 err: ", false, " word: ", prevState.valueInputWord, " fromLang: ", prevState.valueFromLang, " toLang: ", prevState.valueToLang, " output: ", data.outputs[0].output );
                })
                .catch(err => {
                    // console.log(err);
                    this.setState(prevState => ({
                        err: false,
                        amount: prevState.valueAmount,
                        fromCurrency: prevState.valueFromCurrency,
                        toCurrency: prevState.valueToCurrency
                    }));
                    // console.log("UPDATE 2 err: ", true, " word: ", prevState.valueInputWord, " fromLang: ", prevState.valueFromLang, " toLang: ", prevState.valueToLang );
                });
        }

allCurrencyOptions = (name,value,onChange) => {
        return (
            <select name={name} value={value} onChange={onChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="PLN">PLN</option>
            <option value="SGD">SGD</option>
            <option value="MYR">MYR</option>
            <option value="RUB">RUB</option>
            <option value="CNH">CNH</option>
            <option value="HKD">HKD</option>
            <option value="INR">INR</option>
            <option value="DKK">DKK</option>
            <option value="NZD">NZD</option>
            <option value="MXN">MXN</option>
            <option value="IDR">IDR</option>
            <option value="TWD">TWD</option>
            <option value="THB">THB</option>
            <option value="VND">VND</option>
            </select>
        )
}

    render() {
        return (
            <div className="container"style={{position: 'relative', display: 'block'}} >
                <div className="list-group-currency" style={{ position: 'relative',border:'5px wheat solid' , boxShadow:'0px 12px 25px 0px rgba(0.3,0.5,0.5,0.5)'}}>
                    <div className="list-group-item" style={{position: 'relative' , backgroundColor:"powderblue" , height:'100px'}}>
                <form>
                    <div className="card-columns">
                   From: {this.allCurrencyOptions("valueFromCurrency",this.state.valueFromCurrency,this.handleInputChange)}
                   <div/>
                   To: {this.allCurrencyOptions("valueToCurrency",this.state.valueToCurrency,this.handleInputChange)}

                   <input
                        className="searchCity"
                        value={this.state.valueAmount}
                        name="valueAmount"
                        onChange={this.handleInputChange}
                        placeholder="Amount"/>
                    </div>
                </form>
                    </div>
                        <Result  className="card-columns" currency={this.state}/>

                    </div>
            </div>
        );
    }
}




export default CurrencyApi;