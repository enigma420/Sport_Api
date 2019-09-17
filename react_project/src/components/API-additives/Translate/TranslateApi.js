import React, {Component} from 'react';
import Result from "../Translate/TranslateResult";

class TranslateApi extends Component {
    constructor() {
        super();
        this.state = {
            valueFromLang: 'en',
            valueToLang: 'pl',
            valueInputWord: '',
            word: '',
            fromLang: '',
            toLang: '',
            err: false
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("DID UPDATE value1 len: ", this.state.valueFromLang, " value2 len: ", this.state.valueToLang, " vslur3 len: ", this.state.valueInputWord);
        if (this.state.valueFromLang.length === 0 && this.state.valueToLang.length === 0 && this.state.valueInputWord.length === 0) return;

        // console.log("DID UPDATE PREV value1: ", prevState.valueFromLang, this.state.valueFromLang, " value2: ", prevState.valueToLang, this.state.valueToLang, " vslur3: ", prevState.valueInputWord, this.state.valueInputWord);
        if (prevState.valueFromLang !== this.state.valueFromLang || prevState.valueToLang !== this.state.valueToLang || prevState.valueInputWord !== this.state.valueInputWord) {

            fetch(`https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?key=d5c8fb8f-cf89-43a3-9e84-7ced027f529c&source=${this.state.valueFromLang}&target=${this.state.valueToLang}&input=%${this.state.valueInputWord}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",

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
                        fromLang: prevState.valueFromLang,
                        toLang: prevState.valueToLang,
                        word: prevState.valueInputWord,
                        output: data.outputs[0].output
                    }));
                    // console.log("UPDATE 1 err: ", false, " word: ", prevState.valueInputWord, " fromLang: ", prevState.valueFromLang, " toLang: ", prevState.valueToLang, " output: ", data.outputs[0].output );
                })
                .catch(err => {
                    // console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        fromLang: prevState.valueFromLang,
                        toLang: prevState.valueToLang,
                        word: prevState.valueInputWord,
                    }));
                    // console.log("UPDATE 2 err: ", true, " word: ", prevState.valueInputWord, " fromLang: ", prevState.valueFromLang, " toLang: ", prevState.valueToLang );
                });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <select name="valueFromLang" value={this.state.valueFromLang} onChange={ this.handleInputChange}>
                        <option value="en">English</option>
                        <option value="pl">Polski</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">French</option>
                    </select>
                    <select name="valueToLang" value={this.state.valueToLang} onChange={this.handleInputChange}>
                        <option value="en">English</option>
                        <option value="pl">Polski</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">French</option>
                    </select>
                    <input
                        className="searchCity"
                        value={this.state.valueInputWord}
                        name="valueInputWord"
                        onChange={this.handleInputChange}
                        placeholder="Enter Sentence..."/>

                </form>
                <Result word={this.state}/>

            </div>
        );
    }
}

export default TranslateApi;