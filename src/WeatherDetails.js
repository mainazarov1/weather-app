import React, {Component} from "react";
import "./style.css"
class WeatherDetails extends Component{
	
	render() {
        return(
            <div className="weatherContent">
							<p className="dataCity">{this.props.data.name}</p>
							<div className="iconBox">
								<img  className="dataIcon" src={`http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`}></img>
							</div>
							<p className="dataTemp">{this.props.data.main.temp} °C</p>
							<p className="dataWeather">Weather: {this.props.data.weather[0].description}</p>
							<p className="dataWind">Wind: {this.props.data.wind.speed} m/s</p>
            </div>
        )
    }
}


export default WeatherDetails;