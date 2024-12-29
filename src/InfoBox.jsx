import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function InfoBox({info}){
    
    const Img="https://media.istockphoto.com/id/930879822/photo/winter-morning-scene-rural-india.jpg?s=1024x1024&w=is&k=20&c=36WpVApqJDNxghyw4KIC-ybwRhqhOldBNSiFCXaSnHo=";
    
    const HOT_URL="https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1435777940218-be0b632d06db?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    
    
    return (
        <div className='InfoBox'>

          
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL  :info.temp>15? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
         <p>Temprature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Max Temp={info.min_temp}&deg;C</p>
         <p>Min Temp={info.max_temp}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and it feels like 
            {info.feels_Like}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    )
}