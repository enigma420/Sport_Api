import React from 'react';

const CountryForm = props => {
    return(
        <form>
            <input
                className="searchC   "
                value={props.value}
                onChange={props.change}
                placeholder="Enter Country/Code-Country"/>
        </form>
    )
};

export default WeatherForm;