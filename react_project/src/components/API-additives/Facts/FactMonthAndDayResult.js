import React from 'react';

const Results = props => {
    const{err, month, day, monthFactYear, factMonthAndDay} = props.factMonthAndDay;

    let content = null;
    // console.log("RESULT err: ", err, " word: ", word, " fromLang: ", fromLang, " toLang: ", toLang );


    if(!err && month && day){


        content = (
            <div className="cityApiResult">
                <h4 style={{color:'black'}}>Every 7 seconds the fact changes</h4>
                <h2><b>Year: {monthFactYear}</b></h2>
                <h3><b>Date: {month}.{day}</b></h3>
                <h1><b>Fact: {factMonthAndDay}</b></h1>


            </div>
        )
    }else{
        return <div className="cityApiResult">        <h2>We don't have fact in this year: <b>{month}.{day}</b></h2>
        </div>
    }

    return(
        <div className="result">
            {err ? `We don't have in db ${factMonthAndDay}` : content}
        </div>
    )
};

export default Results