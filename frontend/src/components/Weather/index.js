import React from 'react';
import axios from 'axios';
import './style.scss';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      weather: null,
    };
  }

  getLocation() {
    let latitude = 38.889484;
    let longitude = -77.035278;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          this.setState({ location: { latitude, longitude } });
          this.getWeather()
        },
        (error) => {
          console.error('Error getting location:', error.message);
          console.error('setting location to washington dc');
          this.setState({ location: { latitude, longitude } });
          this.getWeather()
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
      console.error('setting location to washington dc');
      this.setState({ location: { latitude, longitude } });
      this.getWeather()
    }
  }
  
  getWeather(){
    let METEO_URL = "https://api.open-meteo.com/v1/forecast?" +
      "latitude=" + this.state.location.latitude +
      "&longitude=" + this.state.location.longitude +
      "&current=temperature_2m,is_day,precipitation" +
      "&hourly=temperature_2m" +
      "&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max" +
      "&temperature_unit=fahrenheit" +
      "&wind_speed_unit=mph" +
      "&precipitation_unit=inch" + 
      "&timezone=auto" +
      "&forecast_days=1"
    axios.get(METEO_URL)
      .then(response => {
        let temp_max = response.data.daily.temperature_2m_max[0] + ' ' + response.data.daily_units.temperature_2m_max;
        let temp_min = response.data.daily.temperature_2m_min[0] + ' ' + response.data.daily_units.temperature_2m_min;
        let uv_index = response.data.daily.uv_index_max[0];
        let sunrise_date = new Date(response.data.daily.sunrise[0]);
        let sunset_date = new Date(response.data.daily.sunset[0]);
        let sunrise = sunrise_date.getHours().toString().padStart(2,'0')+':'+sunrise_date.getMinutes().toString().padStart(2,'0')
        let sunset = sunset_date.getHours().toString().padStart(2,'0')+':'+sunset_date.getMinutes().toString().padStart(2,'0')
        let is_day = response.data.current.is_day;
        let is_precip = response.data.current.precipitation;
        this.setState({ weather: { temp_max, temp_min, uv_index, sunrise, sunset, is_day, is_precip } });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <div className='weather-root'>
        <label className='weather-label'>
          <p className='weather-icon' id='temp'></p>
          {this.state.weather ? (
            <div>
              <p className='weather-val'>Max: {this.state.weather.temp_max}</p>
              <p className='weather-val'>Min: {this.state.weather.temp_min}</p>
              <p className='weather-val'>UV : {this.state.weather.uv_index}</p>
            </div>
          ) : (
            <p>Loading</p>
          )}
        </label>
        <label className='weather-label'>
          <p className='weather-icon'></p>
          {this.state.weather ? (
            <div>
              <p className='weather-val'>Sunset : {this.state.weather.sunrise }</p>
              <p className='weather-val'>Sunrise: {this.state.weather.sunset}</p>
            </div>
          ) : (
            <p>Loading</p>
          )}
        </label>
        <div className='daily-indicators'>
          {this.state.weather && (
            this.state.weather.is_day==1 ? (
              <p className='outside-icon'></p>
            ) : (
              <p className='outside-icon'></p>
            )
          )}
          {this.state.weather && this.state.weather.is_precip==1 && (
            <p className='outside-icon'></p>
          )}
        </div>
      </div>
    );
  }
}

export default Weather;
