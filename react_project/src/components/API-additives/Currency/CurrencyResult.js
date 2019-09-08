import React from 'react';

const Result = props => {
    const{err,amount,fromCurrency,toCurrency,rate} = props.currency;

    let content = null;


    if(!err && amount && fromCurrency && toCurrency && rate) {

const converter = amount * rate;

        console.log("RESULT err: ", err, " fromCurr: ", fromCurrency, " toCurr: ", toCurrency, " amount: ", amount , "rate:",rate , "converter:", converter);
        content = (
            <div className="cityApiResult">
                <h1><b>{fromCurrency}/{toCurrency}</b></h1>
                <h5><b>Amount to Exchange: {amount}</b></h5>
                <h5><b>Amount after Exchange: {converter}</b></h5>
                <h5><b>Rate: {rate}</b></h5>
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