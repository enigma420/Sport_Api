import React from 'react';

const CountryForm = props => {
    return(
        <form className="searchCountry" style={{textAlignVertical: "center",textAlign: "center", margin:'30px'}}>
            <input

            value={props.value}
            onChange={props.change}
            placeholder="Enter Country..."
            style={{textAlign:'center'}}
        />
        </form>

    )
};

export default CountryForm;