import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    let COLD_URL = "https://images.unsplash.com/photo-1611456039061-bc16069504fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpbnRlciUyMGluJTIwc3RyZWV0fGVufDB8fDB8fHww";
    let HOT_URL = "https://images.unsplash.com/photo-1712009509758-dff926710413?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyJTIwaW4lMjBzdHJlZXR8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1688904015681-3391613bc3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxUMGJrUnhDUTlFb3x8ZW58MHx8fHx8";

    return(
        <div className="InfoBox">

            <div className="cardContainer">
               <Card sx={{ maxWidth: 345 }}>

                   <CardMedia
                         component="img"
                         alt="green iguana"
                         height="200"
                         image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                         
                   />

                   <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <div>
                                {info.city}  &nbsp;{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                            </div>
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                             <p>Temprature = {info.temp}&deg;C</p>
                             <p>Humidity = {info.humidity}</p>
                             <p>Min Temp = {info.tempMin}&deg;C</p>
                             <p>Max Temp = {info.tempMax}&deg;C</p>
                             <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                   </CardContent>
                </Card>
            </div>
    </div>
    )
}