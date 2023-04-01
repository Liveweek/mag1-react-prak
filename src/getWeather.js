import  axios from 'axios';

export async function getWeather(city_name) {
    
    // let result = await fetch('http://api.weatherstack.com/current?access_key=72c6e8d00df5ed1831452be71306f96c&query=' + city_name)
    // console.log(result.json())
    axios({
        method: 'get',
        url: 'http://api.weatherstack.com/current?access_key=72c6e8d00df5ed1831452be71306f96c&query=' + city_name,
        headers: {'Content-Type': 'application/json'}
      })
      .then(function (response) {
        // обработка успешного запроса
        console.log(response.data)
        return response.data;
      })
      .catch(function (error) {
        // обработка ошибок
        console.log(error);
      });
}
