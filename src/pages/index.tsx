import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import { Box, Grid } from '@mui/material'

import {
  getWeatherData,
  getWeatherDataByCoordinates,
} from '../services/weatherApi'

import FavoriteCities from '../components/FavoriteCities/FavoriteCities'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchHistory from '../components/SearchHistory/SearchHistory'
import WeatherCard from '../components/WeatherCard/WeatherCard'

import Head from 'next/head'
import { City, WeatherData } from '../types/weatherTypes'

interface HomeProps {
  weatherData: WeatherData | null
  searchHistory: City[]
  favorites: City[]
}

type Position = {
  coords: {
    latitude: number
    longitude: number
  }
}

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [searchHistory, setSearchHistory] = useState<City[]>([])
  const [favorites, setFavorites] = useState<City[]>([])

  // Load search history and favorites from local storage on initial mount
  useEffect(() => {
    const loadSearchHistoryFromLocalStorage = () => {
      const searchHistory = localStorage.getItem('searchHistory')
      if (searchHistory) {
        setSearchHistory(JSON.parse(searchHistory))
      }
    }

    const loadFavoritesFromLocalStorage = () => {
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites))
      }
    }

    loadSearchHistoryFromLocalStorage()
    loadFavoritesFromLocalStorage()
  }, [])

  // Load current location weather on initial mount
  useEffect(() => {
    const loadCurrentLocationWeather = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords
              try {
                const currentLocationData = await getWeatherDataByCoordinates(
                  latitude,
                  longitude,
                )
                setWeatherData(currentLocationData)
              } catch (error) {
                console.error(
                  'Erro ao obter dados meteorológicos da localização atual:',
                  error,
                )
              }
            },
            (error) => {
              console.error('Erro ao obter localização:', error)
            },
          )
        } else {
          console.error('Navegador não suporta geolocalização.')
        }
      } catch (error) {
        console.error(
          'Erro ao obter dados meteorológicos da localização atual:',
          error,
        )
      }
    }

    loadCurrentLocationWeather()
  }, [])

  // Handle search event
  const handleSearch = async (city: string) => {
    try {
      const data = await getWeatherData(city)
      const newCity: City = {
        id: data.id,
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        isFavorite: false,
      }

      const existingCity = searchHistory.find(
        (item) => item.name === newCity.name,
      )

      if (!existingCity) {
        setSearchHistory((prevHistory) => [...prevHistory, newCity])
        saveSearchHistoryToLocalStorage([...searchHistory, newCity]) // Salvar no localStorage
      }

      setWeatherData(data)
    } catch (error) {
      console.error('Erro ao obter dados meteorológicos:', error)
    }
  }

  // Handle add favorite event
  const handleAddFavorite = (city: City) => {
    if (city.isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== city.id)
      setFavorites(updatedFavorites)
      saveFavoritesToLocalStorage(updatedFavorites) // Save to local storage
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, city])
      saveFavoritesToLocalStorage([...favorites, city]) // Save to local storage
    }

    setSearchHistory((prevHistory) =>
      prevHistory.map((item) => {
        if (item.id === city.id) {
          return { ...item, isFavorite: !city.isFavorite }
        }
        return item
      }),
    )
  }

  // Handle remove favorite event
  const handleRemoveFavorite = (city: City) => {
    const updatedFavorites = favorites.filter((item) => item.id !== city.id)
    setFavorites(updatedFavorites)
    saveFavoritesToLocalStorage(updatedFavorites) // Save to local storage

    setSearchHistory((prevHistory) =>
      prevHistory.map((item) => {
        if (item.id === city.id) {
          return { ...item, isFavorite: !city.isFavorite }
        }
        return item
      }),
    )
  }

  // Save search history to local storage
  const saveSearchHistoryToLocalStorage = (history: City[]) => {
    localStorage.setItem('searchHistory', JSON.stringify(history))
  }

  // Save favorites to local storage
  const saveFavoritesToLocalStorage = (favorites: City[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <>
      <Head>
        <title>Weather Application</title>
        <meta name="description" content="Weather Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <Box m={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid item xs={12}>
            {weatherData && <WeatherCard weatherData={weatherData} />}
          </Grid>
          <Grid item xs={12} md={6}>
            <SearchHistory
              history={searchHistory}
              onSearch={handleSearch}
              onAddFavorite={handleAddFavorite}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FavoriteCities
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  let weatherData = null
  let searchHistory: City[] = []
  let favorites: City[] = []

  try {
    // Carregar dados do clima atual da localização atual
    if (typeof window !== 'undefined' && navigator.geolocation) {
      const positionPromise = new Promise<Position>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })

      try {
        const position = await positionPromise
        const { latitude, longitude } = position.coords
        const currentLocationData = await getWeatherDataByCoordinates(
          latitude,
          longitude,
        )
        weatherData = currentLocationData
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            'Erro ao obter dados meteorológicos da localização atual:',
            error.message,
          )
        } else {
          console.error('Erro desconhecido:', error)
        }
      }
    } else {
      throw new Error('Navegador não suporta geolocalização.')
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Erro desconhecido:', error)
    }
  }

  // Carregar histórico de busca e favoritos do local storage
  if (typeof window !== 'undefined') {
    const searchHistoryString = localStorage.getItem('searchHistory')
    if (searchHistoryString) {
      searchHistory = JSON.parse(searchHistoryString)
    }

    const favoritesString = localStorage.getItem('favorites')
    if (favoritesString) {
      favorites = JSON.parse(favoritesString)
    }
  }

  return {
    props: {
      weatherData,
      searchHistory,
      favorites,
    },
  }
}
