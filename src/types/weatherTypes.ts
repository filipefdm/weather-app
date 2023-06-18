export interface City {
  id: number
  name: string
  temperature: number
  description: string
  isFavorite: boolean
}

export interface WeatherData {
  name: string
  id: number
  coord: Coord
  weather: Weather[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  windSpeed: Wind
  humidity: number
  uvIndex: number
  city: string
  temperature: number
  description: string
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface PositionError extends Error {
  readonly code: number
  readonly message: string
  readonly PERMISSION_DENIED: number
  readonly POSITION_UNAVAILABLE: number
  readonly TIMEOUT: number
}

export interface CurrentWeather {
  base?: string
  clouds?: Clouds
  coord?: Coord
  cod?: number
  dt?: number
  id?: number
  main: Main
  name?: string
  rain?: Rain
  sys?: Sys
  timezone?: number
  visibility?: number
  weather?: Weather[]
  wind?: Wind
}

interface Coord {
  lon: number
  lat: number
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Rain {
  '1h': number
}

interface Clouds {
  all: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
