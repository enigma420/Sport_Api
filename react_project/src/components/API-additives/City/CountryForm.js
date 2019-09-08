import React from 'react';

const CountryForm = props => {
    return(
        <form>
            <input
                className="searchCity"
                value={props.value}
                onChange={props.change}
                placeholder="Enter Country/Code-Country"/>
        </form>
    )
};

export default CountryForm;