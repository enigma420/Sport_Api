import React from 'react';

const Result = props => {
    const{err,country,nameOfCountry,area,capital,currencies,region,subregion,population} = props.city;

    let content = null;

    if(!err && country){


        content = (
            <div className="cityApiResult">
                <h1>You are looking for: <b>{country}</b></h1>
                <h2>Name of country: <b>{nameOfCountry}</b></h2>
                <h2>Capital: <b>{capital}</b></h2>
                <h2>Region: <b>{region}</b></h2>
                <h2>Subregion: <b>{subregion}</b> </h2>
                <h2>Population: <b>{population} ppl</b> </h2>
                <h2>Area: <b>{area} km^2</b></h2>
                <h2>Currencies: <b>{currencies}</b></h2>
            </div>
        )
    }else{
       return <div className="cityApiResult">        <h2>This country doesn't exist: <b>{country}</b></h2>
        </div>
    }

    return(
        <div className="result">
            {err ? `Nie mamy w bazie ${country}` : content}
        </div>
    )
};

export default Result