import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import "./App.css";
import sunnyIcon from './sunny.svg';
import moonIcon from './moon.svg';

const base_url = 'https://api.weatherapi.com/v1/current.json?key=1fcae61d0773418587b81123242508&q=23.7887093,90.3770021';

function App() {

  const [weatherData, setWeatherdata] = useState({});


  const fetchLocation = async (city) => {
    const search_data = await fetch(`${base_url}?city=${city}`);
    const response = await search_data.json();
    setWeatherdata(response.current);
  }
  useEffect(() => {
    fetchLocation('Dhaka');
  });

  return (
    <div className="App">
      <h2>Weather Dashboard</h2>
      <div className="container">
        <div className="center">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search your city"
              value="Dhaka"
              variant="outlined"
              onChange={() => {}}
            />
          </Box>
          <img src={weatherData.is_day == 1? sunnyIcon : moonIcon} height="100px" width="100px" alt="Icon" />
          <h3>Current temperature: {weatherData.dewpoint_c}°C</h3>
          <h3>Feels like: {weatherData.feelslike_c}°C</h3>
          <h3>Windspeed: {weatherData.wind_mph} Miles Per Hour</h3>
          <h3>Humidity: {weatherData.humidity}%</h3>
          <h3>Cloud situation: {weatherData.cloud}%</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
