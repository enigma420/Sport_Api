import React from 'react';

const Result = props => {
    const {err, year, date, factYear} = props.fact;

    let content = null;
    // console.log("RESULT err: ", err, " word: ", word, " fromLang: ", fromLang, " toLang: ", toLang );

    if (!err && year) {
        content = (
            <div className="cityApiResult">
                <h3><b>Year: {year}</b></h3>
                <h4><b>Date: {date}</b></h4>
                <h2><b>Fact: {factYear}</b></h2>
            </div>
        )
    } else {
        return <div className="cityApiResult"><h2>We don't have fact in this year: <b>{year}</b></h2>
        </div>
    }

    return (
        <div className="result">
            {err ? `We don't have in db ${factYear}` : content}
        </div>
    )
};

export default Result