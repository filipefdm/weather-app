import { Box, Grid } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

import {
  getWeatherData,
  getWeatherDataByCoordinates,
} from "@/services/weatherApi";

import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard/WeatherCard";
import SearchHistory from "@/components/SearchHistory";
import Favorites from "@/components/Favorites";

import { WeatherData } from "@/types/weatherTypes";
import { fetchCurrentWeatherByCity } from "@/store/thunks/fetchCurrentWeatherByCity";
import WeeklyForecast from "@/components/WeeklyForecast";
import { fetchCurrentWeatherData } from "@/store/thunks/fetchCurrentWeatherData";

export interface City {
  id: number;
  name: string;
  temperature: number;
  description: string;
  isFavorite: boolean;
}

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [searchHistory, setSearchHistory] = useState<City[]>([]);
  const [favorites, setFavorites] = useState<City[]>([]);
  // const [weeklyData, setWeeklyData] = useState<WeatherData[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchHistoryData = useSelector(
    (state: RootState) => state.searchHistory.searchHistory
  );

  const handleSearch = async (city: string) => {
    try {
      const data = await getWeatherData(city);
      const newCity: City = {
        id: data.id,
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        isFavorite: false,
      };
      dispatch(fetchCurrentWeatherByCity(city));

      const existingCity = searchHistory.find(
        (item) => item.name === newCity.name
      );

      if (!existingCity) {
        setSearchHistory((prevHistory) => [...prevHistory, newCity]);
      }

      setWeatherData(data);

      const weeklyData = await fetchCurrentWeatherData();
      setWeeklyData(weeklyData);
    } catch (error) {
      console.error("Erro ao obter dados meteorológicos:", error);
    }
  };

  const handleAddFavorite = (city: City) => {
    if (city.isFavorite) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item.id !== city.id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, city]);
    }

    setSearchHistory((prevHistory) =>
      prevHistory.map((item) => {
        if (item.id === city.id) {
          return { ...item, isFavorite: !city.isFavorite };
        }
        return item;
      })
    );
  };

  const handleRemoveFavorite = (city: City) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== city.id)
    );
  };

  useEffect(() => {
    const loadCurrentLocationWeather = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const currentLocationData = await getWeatherDataByCoordinates(
                  latitude,
                  longitude
                );
                setWeatherData(currentLocationData);
              } catch (error) {
                console.error(
                  "Erro ao obter dados meteorológicos da localização atual:",
                  error
                );
              }
            },
            (error) => {
              console.error("Erro ao obter localização:", error);
            }
          );
        } else {
          console.error("Navegador não suporta geolocalização.");
        }
      } catch (error) {
        console.error(
          "Erro ao obter dados meteorológicos da localização atual:",
          error
        );
      }
    };

    const loadSearchHistory = () => {
      const searchHistory = localStorage.getItem("searchHistory");
      if (searchHistory) {
        setSearchHistory(JSON.parse(searchHistory));
      }
    };

    const loadSavedFavorites = () => {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    };

    loadCurrentLocationWeather();
    loadSearchHistory();
    loadSavedFavorites();
  }, []);

  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar onSearch={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          {weatherData && <WeatherCard weatherData={weatherData} />}
        </Grid>
        {/* <Grid item xs={12} md={6}>
          {weeklyData && <WeeklyForecast weeklyData={weeklyData} />}
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Box mt={2}>
            <SearchHistory
              history={searchHistory}
              onSearch={handleSearch}
              onAddFavorite={handleAddFavorite}
            />
          </Box>
          <Box mt={2}>
            <Favorites
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
