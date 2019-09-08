import React from 'react';

const Result = props => {
    const{err,amount,fromCurrency,toCurrency,output} = props.currency;

    let content = null;


    if(!err && amount && fromCurrency && toCurrency && output) {

const converter = amount * output;

        console.log("RESULT err: ", err, " fromCurr: ", fromCurrency, " toCurr: ", toCurrency, " amount: ", amount , "output:",output , "converter:", converter);
        content = (
            <div className="cityApiResult">
                <h1><b>{fromCurrency}</b></h1>
                <h1><b>{toCurrency}</b></h1>
                <h5><b>Amount: {amount}</b></h5>
                <h5><b>Output: {converter}</b></h5>
                <h5><b>Output: {output}</b></h5>
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