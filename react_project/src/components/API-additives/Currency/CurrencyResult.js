import React from 'react';

const Result = props => {
    const{err,amount,fromCurrency,toCurrency,rate} = props.currency;

    let content = null;

    //Set money symbols to currency:
    /**
     * @return {string}
     */
    function CurrencySignFrom(fromCurrency) {
        if(fromCurrency === "EUR"){
            return "€"
        }
        else if(fromCurrency === "USD"){
            return "$"
        }
        else if(fromCurrency === "GBP"){
            return "£"
        }
        else if(fromCurrency === "JPY"){
            return "¥"
        }
        else if(fromCurrency === "AUD"){
            return "$"
        }
        else if(fromCurrency === "CAD"){
            return "$"
        }
        else if(fromCurrency === "PLN"){
            return "zł"
        }
        else if(fromCurrency === "SGD"){
            return "$"
        }
        else if(fromCurrency === "MYR"){
            return "RM"
        }
        else if(fromCurrency === "RUB"){
            return "₽"
        }
        else if(fromCurrency === "CNH"){
            return "¥"
        }
        else if(fromCurrency === "HKR"){
            return "kn"
        }
        else if(fromCurrency === "INR"){
            return "₹"
        }
        else if(fromCurrency === "DKK"){
            return "kr"
        }
        else if(fromCurrency === "NZD"){
            return "$"
        }
        else if(fromCurrency === "MXN"){
            return "$"
        }
        else if(fromCurrency === "IDR"){
            return "Rp"
        }
        else if(fromCurrency === "TWD"){
            return "NT$"
        }
        else if(fromCurrency === "THB"){
            return "฿"
        }
        else if(fromCurrency === "VND"){
            return "₫"
        }

    }
    /**
     * @return {string}
     */
    function CurrencySignTo(toCurrency) {

        if(toCurrency === "EUR"){
            return "€"
        }
        else if(toCurrency === "USD"){
            return "$"
        }
        else if(toCurrency === "GBP"){
            return "£"
        }
        else if(toCurrency === "JPY"){
            return "¥"
        }
        else if(toCurrency === "AUD"){
            return "$"
        }
        else if(toCurrency === "CAD"){
            return "$"
        }
        else if(toCurrency === "PLN"){
            return "zł"
        }
        else if(toCurrency === "SGD"){
            return "$"
        }
        else if(toCurrency === "MYR"){
            return "RM"
        }
        else if(toCurrency === "RUB"){
            return "₽"
        }
        else if(toCurrency === "CNH"){
            return "¥"
        }
        else if(toCurrency === "HKR"){
            return "kn"
        }
        else if(toCurrency === "INR"){
            return "₹"
        }
        else if(toCurrency === "DKK"){
            return "kr"
        }
        else if(toCurrency === "NZD"){
            return "$"
        }
        else if(toCurrency === "MXN"){
            return "$"
        }
        else if(toCurrency === "IDR"){
            return "Rp"
        }
        else if(toCurrency === "TWD"){
            return "NT$"
        }
        else if(toCurrency === "THB"){
            return "฿"
        }
        else if(toCurrency === "VND"){
            return "₫"
        }

    }
    /**
     * @return {number}
     */
    function Approximately(n,k) {
        var factor = Math.pow(10,k);
        return Math.round(n*factor)/factor
    }

    if(!err && amount && fromCurrency && toCurrency && rate) {

const converter = rate * amount;
const converterRevert = (amount)/(rate);

        console.log("RESULT err: ", err, " fromCurr: ", fromCurrency, " toCurr: ", toCurrency, " amount: ", amount , "rate:",rate , "converter:", converter);
        content = (
            <div>
                <div className="cityApiResult">
                    <h1><b>{fromCurrency}/{toCurrency}</b></h1>
                    <h5><b>Amount: {Approximately(amount,2)}{CurrencySignFrom(fromCurrency)} -> Amount: {Approximately(converter,2)}{CurrencySignTo(toCurrency)}</b></h5>
                    <h5><b>Rate: {Approximately(rate,2)}</b></h5>
                </div>
                <div className="cityApiResult">
                    <h1><b>{toCurrency}/{fromCurrency}</b></h1>
                    <h5><b>Amount to Exchange: {Approximately(amount,2)}{CurrencySignTo(toCurrency)} -> Amount after Exchange: {Approximately(converterRevert,2)}{CurrencySignFrom(fromCurrency)}</b></h5>
                    <h5><b>Rate: {Approximately((1/rate),2)}</b></h5>
                </div>
                <div className="list-group-item" style={{backgroundColor:"powderblue" , position:'relative'}}>
                    <div className="cityApiResult">
                    <h3><b>{fromCurrency}/{toCurrency}:</b></h3>
                    <h4><b>10 {CurrencySignFrom(fromCurrency)} = {Approximately(10*rate,2)} {CurrencySignTo(toCurrency)}</b></h4>
                    <h4><b>100 {CurrencySignFrom(fromCurrency)} = {Approximately(100*rate,2)} {CurrencySignTo(toCurrency)}</b></h4>
                    <h4><b>1000 {CurrencySignFrom(fromCurrency)} = {Approximately(1000*rate,2)} {CurrencySignTo(toCurrency)}</b></h4>
                    <h4><b>10000 {CurrencySignFrom(fromCurrency)} = {Approximately(10000*rate,2)} {CurrencySignTo(toCurrency)}</b></h4>
                    <h4><b>100000 {CurrencySignFrom(fromCurrency)} = {Approximately(100000*rate,2)} {CurrencySignTo(toCurrency)}</b></h4>
                    <h3><b>{toCurrency}/{fromCurrency}:</b></h3>
                    <h4><b>10 {CurrencySignTo(toCurrency)} = {Approximately(10*(1/rate),2)} {CurrencySignFrom(fromCurrency)}</b></h4>
                    <h4><b>100 {CurrencySignTo(toCurrency)} = {Approximately(100*(1/rate),2)} {CurrencySignFrom(fromCurrency)}</b></h4>
                    <h4><b>1000 {CurrencySignTo(toCurrency)} = {Approximately(1000*(1/rate),2)} {CurrencySignFrom(fromCurrency)}</b></h4>
                    <h4><b>10000 {CurrencySignTo(toCurrency)} = {Approximately(10000*(1/rate),2)} {CurrencySignFrom(fromCurrency)}</b></h4>
                    <h4><b>100000 {CurrencySignTo(toCurrency)} = {Approximately(100000*(1/rate),2)} {CurrencySignFrom(fromCurrency)}</b></h4>
                    </div>
                </div>
            </div>


        )
    }
    // }else{
    //     return <div className="cityApiResult">        <h2>This sentence doesn't exist: <b>{word}</b></h2>
    //     </div>


    return(
        <div className="result">
            {err ? `Plz write amount ${amount}` : content}
        </div>
    )
};

export default Result