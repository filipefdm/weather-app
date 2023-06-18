export interface City {
  id: number
  name: string
  coord: Coordinates
  country: string
  population: number
  timezone: number
}

export interface CurrentWeather {
  coord: Coordinates
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  rain?: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coordinates {
  lat: number
  lon: number
}

export interface ForecastWeatherState {
  forecastWeather: ForecastWeather | null
  isLoadingForecastWeather: boolean
  forecastWeatherError: string | null
}

export interface ForecastWeather {
  city: City
  cod: number
  message: number
  cnt: number
  list: List[]
}

export interface List {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  feels_like: Temperature
  pressure: number
  humidity: number
  weather: Weather[]
  speed: number
  deg: number
  gust: number
  clouds: Clouds
  pop: number
  rain?: Rain
}

export interface Temperature {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level?: number
  grnd_level?: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Rain {
  '1h': number
}

export interface Clouds {
  all: number
}

export interface Sys {
  id: number
  type: number
  country: string
  sunrise: number
  sunset: number
}
