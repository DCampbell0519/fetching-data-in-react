import { useState } from 'react'
// * is saying export that entire object from the file and store it in the weatherService variable, weatherService/show('Los Angeles)
import * as weatherService from './services/weatherService'
import WeatherSearch from './components/WeatherSearch/WeatherSearch.jsx'
import WeatherDetails from './components/WeatherDetails/WeatherDetails.jsx'
import './App.css'

function App() {

  const [weather, setWeather] = useState({})


  const fetchData = async (city) => {
    const data = await weatherService.show(city)
    console.log(data)
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }
    setWeather(newWeatherState)
  }

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather} />
    </main>
  )
}

export default App
