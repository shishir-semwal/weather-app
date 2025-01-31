import { Card, CardContent, Typography, Grid } from '@mui/material';
import './ForecastBox.css';

export default function ForecastBox({ forecastData }) {
    // Updated high-quality Unsplash images
    const getWeatherImage = (temp, weather) => {
        const HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"; // Beautiful beach
        const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d"; // Winter forest
        const RAIN_URL = "https://images.unsplash.com/photo-1518830686019-b6d70bb3def9"; // Rainy street

        if (weather.toLowerCase().includes('rain')) return RAIN_URL;
        return temp > 15 ? HOT_URL : COLD_URL;
    };

    // Helper function to format date
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        }).format(date);
    };

    if (!forecastData || forecastData.length === 0) {
        return null;
    }

    return (
        <div className="ForecastBox">
            <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
                5-Day Forecast
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {forecastData.map((day, index) => (
                    <Grid item xs={12} sm={6} md={2} key={index}>
                        <Card className="forecast-card">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {formatDate(day.date)}
                                </Typography>
                                <div 
                                    className="weather-image" 
                                    style={{
                                        backgroundImage: `url(${getWeatherImage(day.temp, day.weather)})`,
                                        height: '120px', // Increased height for better visibility
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        marginBottom: '8px',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Typography variant="body1" color="text.secondary">
                                    {Math.round(day.temp)}°C
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    H: {Math.round(day.max_temp)}° L: {Math.round(day.min_temp)}°
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {day.weather}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Humidity: {day.humidity}%
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}