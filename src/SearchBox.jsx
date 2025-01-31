import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import React, { useState } from 'react';

export default function SearchBox({ updateInfo, updateForecast }) {
    // API configs
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    // Get current weather data
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            if (response.ok) {
                let result = {
                    city: jsonResponse.name,
                    temp: jsonResponse.main.temp,
                    min_temp: jsonResponse.main.temp_min,
                    max_temp: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feels_like: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                };
                return result;
            } else {
                throw new Error('City not found');
            }
        } catch (err) {
            throw err;
        }
    };

    // Get 5-day forecast data
    let getForecastInfo = async () => {
        try {
            let response = await fetch(`${FORECAST_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            if (response.ok) {
                // Process 5-day forecast data
                // API returns data in 3-hour intervals, we'll take daily data
                const dailyForecasts = [];
                const processedDates = new Set();

                jsonResponse.list.forEach(item => {
                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    
                    // Only take one reading per day
                    if (!processedDates.has(date)) {
                        processedDates.add(date);
                        dailyForecasts.push({
                            date: date,
                            temp: item.main.temp,
                            min_temp: item.main.temp_min,
                            max_temp: item.main.temp_max,
                            humidity: item.main.humidity,
                            weather: item.weather[0].description,
                            icon: item.weather[0].icon
                        });
                    }
                });

                // Limit to 5 days
                return dailyForecasts.slice(0, 5);
            } else {
                throw new Error('Forecast data not available');
            }
        } catch (err) {
            throw err;
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
        setError(false); // Reset error when input changes
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setError(false);
            const weatherInfo = await getWeatherInfo();
            const forecastInfo = await getForecastInfo();
            
            updateInfo(weatherInfo);
            updateForecast(forecastInfo);
            
            setCity(""); // Clear input after successful search
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}> 
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city} 
                    onChange={handleCityChange} 
                    required
                    error={error}
                    helperText={error ? "City not found" : ""}
                />
                <br />
                <br />
                <Button 
                    variant="contained" 
                    type="submit"
                    disabled={!city.trim()} // Disable if empty
                >
                    Search
                </Button>
            </form>
        </div>
    );
}