import React from 'react';

const WeatherResult = props => {

    const{err,city,temp,date} = props.weather;

    let content = null;

  if(!err && city){

      content = (
          <div>
              <h3>City: <em>{city}</em></h3>
              <h4>Current temperature: {temp} &#176;C</h4>
          </div>
      )

  }
  return(

      <div className="result">
          {err ? `We don't find ${city}` : content}
      </div>

  );

};

export default WeatherResult;