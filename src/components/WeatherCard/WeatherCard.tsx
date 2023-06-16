import { Grid } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

import { CurrentWeather, Rain, Wind } from "@/types/weatherTypes";
import { useStyles } from "./styles";
import { useDateTime } from "@/utils/useDateTime";

interface WeatherCardProps {
  weatherData: CurrentWeather;
  windData: Wind;
  rainData: Rain;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherData,
  windData,
  rainData,
}) => {
  const { weather, main, name } = weatherData;
  const { classes } = useStyles();
  const dateTime = useDateTime();

  const celsius = Math.round(main?.temp - 273.15); // Conversão para Celsius

  return (
    <div className={classes.weatherContainer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 className={classes.sectionTitle}>Clima Atual</h6>
        {/* <div>
          <ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
        </div> */}
        {/* <span>{dateTime}</span> */}
      </div>
      <div className={classes.currentWeatherContainer}>
        <div className={classes.currentWeatherStatus}>
          <h4>{name}</h4>
          <div className={classes.weatherIcon}>
            <img
              src={`http://openweathermap.org/img/wn/${weather?.[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
          <span>
            <span>{celsius}°C</span>
          </span>
          <h6>{weather?.[0].description}</h6>
        </div>
        <div className={classes.currentWeatherInfo}>
          <p className={classes.feelsLike}>
            Feels like: {Math.round(main?.feels_like)}°C
          </p>
          <div className={classes.highLowContainer}>
            <div className={classes.weatherDegree}>
              <ArrowDownwardIcon />
              <span>{Math.round(main?.temp_min)}°C</span>
            </div>
            <div className={classes.weatherDegree}>
              <ArrowUpwardIcon />
              <span>{Math.round(main?.temp_max)}°C</span>
            </div>
          </div>
          <div className={classes.infoRow}>
            <div>
              <WaterDropIcon />
              Humidity
            </div>
            <span>{main?.humidity}%</span>
          </div>
          <div className={classes.infoRow}>
            <div>
              <AirIcon />
              Wind
            </div>
            <span>{windData?.speed ? Math.round(windData.speed) : 0} km/h</span>
          </div>
          <div className={classes.infoRow}>
            <div>
              <WaterDropIcon />
              Rain
            </div>
            <span>{rainData?.["1h"] ? Math.round(rainData["1h"]) : 0} mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
