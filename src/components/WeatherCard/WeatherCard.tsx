import Image from 'next/image'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AirIcon from '@mui/icons-material/Air'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import ExploreIcon from '@mui/icons-material/Explore'

import { motion } from 'framer-motion'

import { CurrentWeather } from '../../types/weatherTypes'

import {
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  CurrentWeatherStatus,
  DateTime,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
  WeatherIcon,
} from './styles'

import useCurrentDateTime from '../../hooks/useCurrentDateTime'
import { kelvinToCelcius } from '../../utils/unitConversion'

import Temperature from './Temperature'

import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch'

import { useDispatch } from 'react-redux'
import { changeTempUnit } from '../../store/slices/appReducer'
import { lightTheme } from '../../styles/theme'

interface WeatherCardProps {
  weatherData: CurrentWeather
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { main, name, wind } = weatherData
  const dateTime = useCurrentDateTime()
  const dispatch = useDispatch()

  const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}.png`

  const imageWidth = 64
  const imageHeight = 64

  const windSpeed = wind?.speed || 0

  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const statusVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  }

  const infoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <WeatherContainer theme={lightTheme}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SectionTitle theme={lightTheme}>Clima Atual</SectionTitle>
          <div>
            <DateTime theme={lightTheme}>{dateTime}</DateTime>
          </div>
          <div>
            <ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
          </div>
        </div>
        <CurrentWeatherContainer>
          <motion.div variants={statusVariants} transition={{ duration: 0.5 }}>
            <CurrentWeatherStatus>
              <h4>{name}</h4>
              <div style={{ display: 'flex' }}>
                <WeatherIcon>
                  <Image
                    src={weatherIconUrl}
                    alt="Weather Icon"
                    width={imageWidth}
                    height={imageHeight}
                  />
                </WeatherIcon>
                <span>
                  <Temperature value={kelvinToCelcius(main?.temp)} />
                  <sup>&deg;</sup>
                </span>
              </div>
              <h6>{weatherData.weather?.[0].description}</h6>
            </CurrentWeatherStatus>
          </motion.div>
          <motion.div variants={infoVariants} transition={{ duration: 0.5 }}>
            <CurrentWeatherInfo>
              <FeelsLike data-testid="feels-like">
                Feels like:{' '}
                <Temperature value={kelvinToCelcius(main?.feels_like)} />
                <sup>&deg;</sup>
              </FeelsLike>
              <HighLowContainer>
                <WeatherDegree theme={lightTheme}>
                  <ArrowDownwardIcon />
                  <Temperature value={kelvinToCelcius(main.temp_min)} />
                  <sup>&deg;</sup>
                </WeatherDegree>
                <WeatherDegree theme={lightTheme}>
                  <ArrowUpwardIcon />
                  <Temperature value={kelvinToCelcius(main.temp_max)} />
                  <sup>&deg;</sup>
                </WeatherDegree>
              </HighLowContainer>
              <InfoRow theme={lightTheme}>
                <div>
                  <WaterDropIcon />
                  Humidity
                </div>
                <span>{main?.humidity}%</span>
              </InfoRow>
              <InfoRow theme={lightTheme}>
                <div>
                  <AirIcon />
                  Wind
                </div>
                <span>{windSpeed} km/h</span>
              </InfoRow>
              <InfoRow theme={lightTheme}>
                <div>
                  <ExploreIcon />
                  Pressure
                </div>
                <span>{main?.pressure} hPa</span>
              </InfoRow>
            </CurrentWeatherInfo>
          </motion.div>
        </CurrentWeatherContainer>
      </WeatherContainer>
    </motion.div>
  )
}

export default WeatherCard
