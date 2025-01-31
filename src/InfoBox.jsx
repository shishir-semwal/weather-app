import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import './InfoBox.css';

export default function InfoBox({ info }) {
    // Updated high-quality Unsplash images
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100"; // Sunny desert
    const COLD_URL = "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22"; // Snowy mountains
    const RAIN_URL = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0"; // Rain on window

    const getWeatherImage = () => {
        if (info.weather.toLowerCase().includes('rain') || info.humidity > 80) return RAIN_URL;
        return info.temp > 15 ? HOT_URL : COLD_URL;
    };

    return (
        <Box sx={{ maxWidth: 450, margin: '0 auto', mb: 3 }}>
            <Card>
                <CardMedia
                    sx={{ 
                        height: 200, // Increased height for better image visibility
                        position: 'relative'
                    }}
                    image={getWeatherImage()}
                    title={info.weather}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                            color: 'white',
                            padding: 2
                        }}
                    >
                        <Typography variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="subtitle1">
                            {info.weather}
                        </Typography>
                    </Box>
                </CardMedia>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <ThermostatIcon sx={{ fontSize: 30, color: 'primary.main', mb: 1 }} />
                                <Typography variant="h5">
                                    {Math.round(info.temp)}°C
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Temperature
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <OpacityIcon sx={{ fontSize: 30, color: 'primary.main', mb: 1 }} />
                                <Typography variant="h5">
                                    {info.humidity}%
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Humidity
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <DeviceThermostatIcon sx={{ fontSize: 30, color: 'primary.main', mb: 1 }} />
                                <Typography variant="h5">
                                    {Math.round(info.feels_like)}°C
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Feels Like
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            Min: {Math.round(info.min_temp)}°C | Max: {Math.round(info.max_temp)}°C
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}