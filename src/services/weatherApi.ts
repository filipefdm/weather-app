import axios from 'axios'
import { WeatherData } from '../types/weatherTypes'

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    )
    return response.data
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error)
    throw error
  }
}

export const getWeatherDataByCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    )
    return response.data
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error)
    throw error
  }
}
