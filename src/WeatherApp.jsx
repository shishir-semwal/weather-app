import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feels_like:12.71,
        humidity:88,
        max_temp: 13.05,
        mim_temp: 13.05,
        temp: 13.05,
        weather:"fog" 

    })

    const updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(<div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
}