import React from 'react';

const WeatherResult = props => {

    const{err,city,temp,sunrise,sunset,pressure,wind,date} = props.weather;

    let content = null;

  if(!err && city){
      const sunriseTime = new Date(sunrise * 1000).toLocaleDateString();
      const sunsetTime = new Date(sunset * 1000).toLocaleDateString();

      content = (
          <div>
              <h3>We found city:<em>{city}</em></h3>
              <h4>Data for day and time: {date}</h4>
              <h4>Current temperature: {temp} &#176;C</h4>
              <h4>Sunset: {sunriseTime}</h4>
              <h4>Sunrise: {sunsetTime}</h4>
              <h4>Wind power: {wind} m/s</h4>
              <h4>Current pressure: {pressure} hPa</h4>
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