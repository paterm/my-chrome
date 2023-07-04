import React, { useEffect, useState } from 'react'
import LocationService from '@services/location.service'
import WidgetWrap from '@components/widgets/WidgetWrap'
import WeatherService, { OpenWeatherMapResponse } from '@services/weather.service'
import { Avatar, Stack, Typography } from '@mui/material'
import { EWidgetID } from '@const/widgetName';


const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<OpenWeatherMapResponse | null>(null)
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null)

  useEffect(() => {
    const locationService = new LocationService()
    locationService.get(handleGetLocation)
  }, [])

  const handleGetLocation = async (position: GeolocationPosition) => {
    if (position) {
      const { coords } = position
      // await getCity(coords)
      await getWeather(coords)
    }
  }

  // const getCity = async (coords: GeolocationCoordinates) => {
  //   const geocodeService = new GeocodeService()
  //   const geocodeResult = await geocodeService.geocode(coords.latitude, coords.longitude)
  //   if (geocodeResult?.city) {
  //     setCity(geocodeResult.city)
  //   }
  // }

  const getWeather = async (coords: GeolocationCoordinates) => {
    const weatherService = new WeatherService(coords.latitude, coords.longitude)
    const weatherResponse = await weatherService.getOpenWeatherMap()
    if (weatherResponse) {
      console.log('weatherResponse', weatherResponse);
      const { weather } = weatherResponse
      const [currentWeather] = weather
      setWeatherData(weatherResponse)
      setWeatherIcon(weatherService.getIcon(currentWeather?.icon))
    }
  }

  if (!weatherData) {
    return null
  }

  const { name, main, weather } = weatherData
  const currentWeather = weather[0]

  return (
    <WidgetWrap widgetID={EWidgetID.WEATHER}>
      <Stack spacing={.4} textAlign="center" pt={2}>
        <Typography variant="subtitle1">{name}</Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {weatherIcon && (
            <Avatar
              src={weatherIcon}
              sx={{ width: 56, height: 56 }}
            />
          )}

          <Typography variant="h4">{main.temp.toFixed()}°</Typography>
        </Stack>

        {currentWeather && (
          <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
            {currentWeather?.description}
          </Typography>
        )}

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption">Мин: {main.temp_min.toFixed()}°</Typography>
          <Typography variant="caption">Макс: {main.temp_max.toFixed()}°</Typography>
        </Stack>
      </Stack>
    </WidgetWrap>
  )
}

export default Weather
