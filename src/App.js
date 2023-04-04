import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Heading,
  HStack,
  VStack,
  Input,
  Button,
  Center,
  Image,
  Container,
  Spacer,
} from '@chakra-ui/react';
import { getWeather } from './getWeather';
import {useState} from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Weather from './Weather';

function App() {

  const [field, setField] = useState('')

  const [weather, setWeather] = useState()
  let w = {
    "request": {
        "type": "City",
        "query": "Moscow, Russia",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Moscow",
        "country": "Russia",
        "region": "Moscow City",
        "lat": "55.752",
        "lon": "37.616",
        "timezone_id": "Europe/Moscow",
        "localtime": "2023-04-01 17:11",
        "localtime_epoch": 1680369060,
        "utc_offset": "3.0"
    },
    "current": {
        "observation_time": "02:11 PM",
        "temperature": 7,
        "weather_code": 116,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 19,
        "wind_degree": 160,
        "wind_dir": "SSE",
        "pressure": 1005,
        "precip": 0,
        "humidity": 61,
        "cloudcover": 75,
        "feelslike": 4,
        "uv_index": 1,
        "visibility": 10,
        "is_day": "yes"
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Container fontSize="xl" m={3}>
        <ColorModeSwitcher/>
        <Box mt="100px">

          <Heading>Прогноз погоды</Heading>
          <HStack mt="20px">
            <Input mr="10px" placeholder="Введите название города" onChange={(e) => setField(e.target.value)}/>
            <Button variant="solid" onClick={() => {getWeather(field, setWeather)}}>Погода!</Button>
          </HStack>
          {weather && <Weather weather={weather}/>}
          
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
