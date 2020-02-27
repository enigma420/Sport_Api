import React from 'react';

const Results = props => {
    const{err, month, day, monthFactYear, factMonthAndDay} = props.factMonthAndDay;

    let content = null;
    // console.log("RESULT err: ", err, " word: ", word, " fromLang: ", fromLang, " toLang: ", toLang );

    if(!err && month && day){
        content = (
            <div className="cityApiResult">
                <h3><b>Year: {monthFactYear}</b></h3>
                <h4><b>Date: {month}.{day}</b></h4>
                <h2><b>Fact: {factMonthAndDay}</b></h2>
            </div>
        )
    }else{
        return <div className="cityApiResult"><h2>We don't have fact in this year: <b>{month}.{day}</b></h2>
        </div>
    }
    return(
        <div className="result">
            {err ? `We don't have in db ${factMonthAndDay}` : content}
        </div>
    )
};

export default Results