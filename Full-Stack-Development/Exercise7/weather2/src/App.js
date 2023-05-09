import React, { useState } from 'react'
import axios from 'axios'
// axios-->used to call and access the openweather API

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // usestate-->keeps track the data changes in it 



  //const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  const url = `api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=6956da024b3ed453f6a0cd5192cd46f7`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)  
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          
          placeholder='Enter Location'
          type="text" />
        <button onClick={searchLocation}>search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}
// https://api.openweathermap.org/data/2.5/weather?q=America&appid=895284fb2d2c50a520ea537456963d9c
export default App;