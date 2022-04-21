import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './weather.css'

const Weather: React.FC = () => {
    const {weather,loading,error} = useTypedSelector(state => state.weather);
    const city = useTypedSelector(state => state.city);

    if (loading) {
        return (
            <div className='weather-status-container'>
                <h1 className='weather-status'>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className='weather-status-container'>
                <h1 className='weather-status'>Error</h1>
            </div>
        )
    }

    if (city.city === null) {
        return (
            <div className='weather-status-container'>
                <h1 className='weather-status'>Choose city</h1>
            </div>
        )
    } else {
        const weatherIcon = weather.weather[0].icon
        const iconLink = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        const weatherTemp: number = Math.floor(weather.main.temp! - 273.15);
        const descriptionToUpperCase = weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.substring(1).toLowerCase();

        return (
            <div className='weather-container'>
                <div className='weather-container-card'>
                    <div className='image-container'>
                        <img className='weather-image' src={iconLink}/>
                    </div>
                    <div className='info-container'>
                        <div className='weather-temp-container'>
                            <h3 className='weather-temp'>{weatherTemp} °C</h3>
                        </div>
                        <div className='weather-main-container'>
                            <h3 className='weather-main-info'>{weather.weather[0].main}</h3>
                        </div>
                        <div className='weather-description-container'>
                            <h3 className='weather-description-info'>{descriptionToUpperCase}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Weather;