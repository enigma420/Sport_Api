import React from 'react';

const WeatherForm = props => {
    return(
        <form>
            <input type = "text"
                   value={props.value}
                   onChange={props.change}
                   placeholder="Enter City..."/>
        </form>
    )
};

export default WeatherForm;