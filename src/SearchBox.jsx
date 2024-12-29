import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import React,{useState} from 'react';
export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="101dd271918c3b1e84d0d3e2f18420c8";
    let [city,setCity]=useState('');
    const [error,setError]=useState(false);

    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            
    
            let result={
                temp:jsonResponse.main.temp,
                mim_temp:jsonResponse.main.temp_min,
                max_temp:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feels_like:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;

        }
        catch(err){
            throw err;
        }
       
    }


    const handleCityChange=(event)=>{
        setCity(event.target.value);
    }
    const handleSubmit=async (event)=>{
       
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newinfo=await  getWeatherInfo();  
        updateInfo(newinfo);
       } catch(err){
        setError(true);
       }
    }
    
    return(
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}> 
            <TextField id="city" label="City Name" variant="outlined" 
            value={city} onChange={handleCityChange} required/>
            <br />
            <br />
            <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place</p>}
            </form>
        </div>

    );

}