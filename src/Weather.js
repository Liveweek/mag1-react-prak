import { Box, HStack, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Weather({weather}) {
  console.log(weather)
  return (
    <>{weather && <Box mt="15px" borderWidth='1px' borderRadius="lg" py="25px" px="15px">
        <HStack>
            <VStack alignItems="left">
                <Heading size="lg">{weather.location.name}</Heading>
                <Text mt="10px">Температура воздуха: {weather.current.temperature} </Text>
                <Text>Влажность: {weather.current.humidity} </Text>
            </VStack>
            <Spacer/>
            <Image borderRadius="30%" src={weather.current.weather_icons[0]} boxSize="80px"/>
        </HStack>
    </Box>}</>
  )
}

export default Weather