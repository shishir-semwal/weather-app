# SkyScope - Your Window to Weather Worldwide

A modern, responsive React weather application that provides current weather data and 5-day forecasts for cities around the world.

**Live Demo:** [SkyScope Weather App](https://skyscope-jh3k.onrender.com/)

![Screenshot (582)](https://github.com/user-attachments/assets/c87764d4-57d6-49cb-8900-8edcba7e88b2)


## Features

- 🌤️ **Current Weather Data**: Temperature, humidity, feels-like, min/max temperatures
- 📅 **5-Day Forecast**: Daily weather forecasts with temperature ranges
- 🔍 **City Search**: Search for weather information by city name
- 🌙 **Dark Mode Toggle**: Switch between light and dark themes
- 📱 **Responsive Design**: Works on all device sizes
- 🎨 **Beautiful UI**: Clean Material UI design with weather-specific imagery

## Technologies Used

- **React**: Frontend UI library
- **Material UI**: Component library for styling and UI elements
- **OpenWeatherMap API**: Weather data provider
- **Vite**: Build tool for fast development
- **Emotion**: CSS-in-JS styling solution
- **Render.com**: Hosting platform

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skyscope.git
   cd skyscope
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The app is currently deployed on Render.com. To deploy your own version:

1. Create a Render.com account
2. Connect your GitHub repository
3. Create a new Web Service with the following settings:
   - Build Command: `npm run build`
   - Start Command: `npm run preview`
   - Environment Variables: Add your OpenWeatherMap API key

## Project Structure

```
skyscope/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── ForecastBox.jsx
│   ├── ForecastBox.css
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── ThemeToggle.jsx
│   ├── WeatherApp.jsx
│   └── WeatherApp.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Known Issues / Future Improvements

- Add geolocation support for automatic local weather
- Implement weather alerts for severe conditions
- Add hourly forecast option
- Implement unit conversion (Celsius/Fahrenheit)
- Add weather map visualization
- Improve loading states and error handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Material UI](https://mui.com/) for the beautiful components
- [Unsplash](https://unsplash.com/) for the weather background images
- [Render](https://render.com/) for hosting the application
