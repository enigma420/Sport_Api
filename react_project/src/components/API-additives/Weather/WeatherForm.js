import React from 'react';

const WeatherForm = props => {
    return(
        <form className="searchCountry" style={{textAlignVertical: "center",textAlign: "center",marginRight:'40px'}}>
            <input
                   className="searchCity"
                   value={props.value}
                   onChange={props.change}
                   placeholder="Enter City..."/>
        </form>
    )
};

export default WeatherForm;