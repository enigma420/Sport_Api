import React, {Component} from 'react';
import Result from "../Translate/TranslateResult";

class TranslateApi extends Component {
    constructor() {
        super();
        this.state = {
            value1: 'en',
            value2: 'pl',
            value3: '',
            word: '',
            fromLang: '',
            toLang: '',
            err: false
        };
    }

    handleInputChange1 = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DID UPDATE value1 len: ", this.state.value1, " value2 len: ", this.state.value2, " vslur3 len: ", this.state.value3);
        if (this.state.value1.length === 0 && this.state.value2.length === 0 && this.state.value3.length === 0) return;

        console.log("DID UPDATE PREV value1: ", prevState.value1, this.state.value1, " value2: ", prevState.value2, this.state.value2, " vslur3: ", prevState.value3, this.state.value3);
        if (prevState.value1 !== this.state.value1 || prevState.value2 !== this.state.value2 || prevState.value3 !== this.state.value3) {

            fetch(`https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=${this.state.value1}&target=${this.state.value2}&input=%${this.state.value3}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
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
                        fromLang: prevState.value1,
                        toLang: prevState.value2,
                        word: prevState.value3,
                        output: data.outputs[0].output
                    }));
                    console.log("UPDATE 1 err: ", false, " word: ", prevState.value3, " fromLang: ", prevState.value1, " toLang: ", prevState.value2, " output: ", data.outputs[0].output );
                    console.log("data:" , data);
                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        word: prevState.value3,
                        fromLang: prevState.value1,
                        toLang: prevState.value2,
                    }));
                    console.log("UPDATE 2 err: ", true, " word: ", prevState.value3, " fromLang: ", prevState.value1, " toLang: ", prevState.value2 );
                });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <select name="value1" value={this.state.value1} onChange={ this.handleInputChange1}>
                        <option value="en">English</option>
                        <option value="pl">Polski</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">French</option>
                    </select>
                    <select name="value2" value={this.state.value2} onChange={this.handleInputChange1}>
                        <option value="en">English</option>
                        <option value="pl">Polski</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">French</option>
                    </select>
                    <input
                        className="searchCity"
                        value={this.state.value3}
                        name="value3"
                        onChange={this.handleInputChange1}
                        placeholder="Enter Sentence..."/>

                </form>
                <Result word={this.state}/>

            </div>
        );
    }
}

export default TranslateApi;