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
