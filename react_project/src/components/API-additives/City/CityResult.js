import React from 'react';

const Result = props => {
    const{err,city,details} = props.city;

    let content = null;

    if(!err && city){


        content = (
            <div>
                <h3>Wyszukiwanie dla miasta <em>{city}</em></h3>
                <h4>Population: {details} hPa</h4>
            </div>
        )
    }

    return(
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    )
};

export default Result