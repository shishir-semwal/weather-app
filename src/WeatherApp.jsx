import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import ForecastBox from './ForecastBox'
import { useState } from 'react'
import { Typography, Box } from '@mui/material'
import './WeatherApp.css'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 12.71,
        humidity: 88,
        max_temp: 13.05,
        min_temp: 13.05,
        temp: 13.05,
        weather: "fog"
    });

    const [forecastInfo, setForecastInfo] = useState([]);

    const updateInfo = (result) => {
        setWeatherInfo(result);
    };

    const updateForecast = (result) => {
        setForecastInfo(result);
    };

    return (
        <div className="weather-app">
            <Box className="app-header">
                <Typography 
                    variant="h2" 
                    component="h1"
                    className="app-title"
                >
                    SkyScope
                </Typography>
                <Typography 
                    variant="h5" 
                    className="app-subtitle"
                >
                    Your Window to Weather Worldwide
                </Typography>
            </Box>
            <SearchBox updateInfo={updateInfo} updateForecast={updateForecast} />
            <InfoBox info={weatherInfo} />
            <ForecastBox forecastData={forecastInfo} />
        </div>
    );
}