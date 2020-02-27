import React, {Component} from 'react';
import Result from "../Translate/TranslateResult";


const APIKey = 'trnsl.1.1.20190919T163458Z.347764b4bb598ee6.29c5a7f0b3955d649d1b80f79095aa0096318396';

class TranslateApi extends Component {

    constructor() {
        super();
        this.state = {
            valueFromLang: 'en-pl',
            valueToLang: '',
            valueInputWord: '',
            word: '',
            fromLang: '',
            toLang: '',
            err: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            word: this.state.valueInputWord,
            fromLang: this.valueFromLang,
        })

    }

    componentDidUpdate(prevProps, prevState) {

        // console.log("DID UPDATE value1 len: ", this.state.valueFromLang, " value2 len: ", this.state.valueToLang, " vslur3 len: ", this.state.valueInputWord);

        // console.log("DID UPDATE PREV value1: ", prevState.valueFromLang, this.state.valueFromLang, " value2: ", prevState.valueToLang, this.state.valueToLang, " vslur3: ", prevState.valueInputWord, this.state.valueInputWord);
        if (prevState.valueFromLang !== this.state.valueFromLang || prevState.valueInputWord !== this.state.valueInputWord) {

            fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKey}&text=${this.state.word}&lang=${this.state.fromLang}&options=1`)
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
                        fromLang: this.valueFromLang,
                        word: prevState.valueInputWord,
                        output: data.text[0]
                    }));
                    console.log("data: " , data)
                    // console.log("UPDATE 1 err: ", false, " word: ", prevState.valueInputWord, " fromLang: ", prevState.valueFromLang, " toLang: ", prevState.valueToLang, " output: ", data.outputs[0].output );
                })
                .catch(err => {
                    // console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        fromLang: prevState.valueFromLang,
                        word: prevState.valueInputWord,
                    }));
                    // console.log("UPDATE 2 err: ", true, " word: ", prevState.valueInputWord, " fromLang: ", prevState.valueFromLang, " toLang: ", prevState.valueToLang );
                });
        }
    }

    render() {
        return (
            <div className="list-group-country" style={{ position: 'relative',borderRight:'4px dodgerblue solid' ,borderLeft:'4px seagreen solid' ,borderTop:'4px seagreen solid' ,borderBottom:'3px seagreen solid' , boxShadow:'0px 0px 8px 3px rgba(0.3,0.5,0.5,0.5)' , borderRadius:'15px'}}>
            <form onSubmit={this.onSubmit}>
                    <select name="valueFromLang" value={this.state.valueFromLang} onChange={ this.onChange} style={{textAlignVertical: "center",textAlign: "center", marginLeft:'280px'}}>
                        <option value="en-pl">English-polish</option>
                        <option value="pl-en">Polish-English</option>
                        <option value="en-de">English-Deutsch</option>
                        <option value="de-en">Deutsch-English</option>
                        <option value="en-fr">English-French</option>
                        <option value="fr-en">French-English</option>
                    </select>
                    <input
                        type="text"
                        className="searchCity"
                        value={this.state.valueInputWord}
                        name="valueInputWord"
                        onChange={this.onChange}
                        placeholder="Enter Sentence..."/>
                    <button type="submit" />
                </form>
                <Result word={this.state}/>

            </div>
        );
    }
}

export default TranslateApi;