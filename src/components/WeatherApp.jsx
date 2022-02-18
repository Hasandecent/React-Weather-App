import React, { useEffect, useState } from 'react'
import './weather.css'

const WeatherCard = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e45c2aff75e69dee8cb8150d4f9092e8`;
      const response = await fetch(url)
        .then((response) => response.json());
        // console.log(response);
        setCity(response.main);
        setWeather(response.weather[0]);
    }
    fetchApi();
  },[search]);

  // Getting Date

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default",{month:'long'});
  let day = d.toLocaleString("default",{weekday:'long'});
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="mainBox card text-center text-white">
              <img src={`https://images.unsplash.com/photo-1609936818843-7572c918dcee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8TWlzdHx8fHx8fDE2NDUxNTQwMjY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200`} className="card-img" alt="" />
              <div className="card-img-overlay mainDiv">
                <form>
                  <div>
                    <h1>Weather App</h1>
                  </div>
                  <div className="input-group searchBox mb-4 w-75 mx-auto">
                    <input 
                    onChange={(event) => { setSearch(event.target.value) }} 
                    type="search"
                    className="form-control" 
                    placeholder="Search City Name OR Country Name" 
                    aria-label="Search City" 
                    aria-describedby="basic-addon2" />
                  </div>
                </form>
                {!city ? (
                  <h2>Please Type Your City OR Country Name</h2>
                ) : (
                  <div className="info-Div bg-opacity-50">
                                      <h1 className='fw-bolder'>{city.temp} &deg;C</h1>
                    <p className='lead fw-bolder mb-0'>{weather.main}</p>
                    <p className="lead">{city.temp_min} &deg;C | {city.temp_max} &deg;C</p>
                    <h2 className="card-title">{search}</h2>
                    <p className="card-text datePara lead">{day}, {month}, {date}, {year}</p>


                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
