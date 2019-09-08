import React from 'react';

const Result = props => {
    const{err,year,date,fact} = props.fact;

    let content = null;
    // console.log("RESULT err: ", err, " word: ", word, " fromLang: ", fromLang, " toLang: ", toLang );


    if(!err && year){


        content = (
            <div className="cityApiResult">
                <h4 style={{color:'black'}}>Every 7 seconds the fact changes</h4>
                <h2><b>Year: {year}</b></h2>
                <h3><b>Date: {date}</b></h3>
                <h1><b>Fact: {fact}</b></h1>


            </div>
        )
    }else{
        return <div className="cityApiResult">        <h2>We don't have fact in this year: <b>{year}</b></h2>
        </div>
    }

    return(
        <div className="result">
            {err ? `We don't have in db ${fact}` : content}
        </div>
    )
};

export default Result