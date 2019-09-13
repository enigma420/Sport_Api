import React from 'react';
import NumberFormat from 'react-number-format';

const Result = props => {
    const{err,country,nameOfCountry,area,capital,items,region,subregion,population} = props.city;

    let content = null;
    var countryUpperCase = country.toUpperCase();
    if(!err && country){
        content = (
                <div className="list-group-country" style={{ position: 'relative',border:'3px black solid' , boxShadow:'0px 12px 25px 0px rgba(0.6,0.5,0.5,0.5)' , borderRadius:'20px'}}>
            <div className="cityApiResult" style={{ backgroundColor:'lightskyblue' , borderRadius:'20px'}}>
                <h1><b>{countryUpperCase}</b></h1>
                <hr style={{backgroundColor:'blue'}}/>
                <div className="list-group" >
                <h2>Name of country: <b>{nameOfCountry}</b></h2>
                <h2>Capital: <b>{capital}</b></h2>
                <h2>Region: <b>{region}</b></h2>
                <h2>Subregion: <b>{subregion}</b> </h2>
                <h2>Population: <b><NumberFormat value={population} displayType={'text'} thousandSeparator={true}/></b> </h2>
                <h2>Area: <b><NumberFormat value={area} displayType={'text'} thousandSeparator={true}/> km²</b></h2>
                <h2>Currencies: <b>{items}</b></h2>
                </div>
            </div>
            </div>
        )
    }else{
       return <div className="cityApiResult"><h2>This country doesn't exist: <b>{country}</b></h2>
        </div>
    }

    return(
        <div className="result">
            {err ? `Nie mamy w bazie ${country}` : content}
        </div>
    )
};

export default Result