import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';
import Prewiew from './Prewiew'
import 'typeface-roboto'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import "./style.css";

class Weather extends Component {
	state = {
		data: null,
		city: "",
		error: false,
		loader: false,
		icon: null,
	};
	apiKey = '1017233c81b3628c5294d80958362f6e';

	getWeather = (e) => {
		e.preventDefault();
		let city = this.state.city;
		this.setState({
			loader: true
		}, () => {
			fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
				.then(res => res.json())
				.then(data => {
					if (data.cod === 200) {
						this.setState({
							data: data,
							loader: false
						})
					} else (
						this.setState({ error: true })
					)
				})
		});
	};

	handleChange = (e) => {
		this.setState({ city: e.target.value })
	};

	render() {
		let weatherContent = 'Weather App by Islamby';
		if (this.state.loader) {
			weatherContent = <CircularProgress />
		}

		return (
			<div className="container">
				<form margin="normal" className="form" onSubmit={this.getWeather} noValidate autoComplete="off">
					<TextField margin="dense" className="inputText" onChange={this.handleChange.bind(this)} value={this.state.city} id="outlined-basic" label="City" variant="outlined" type="text" name="city" color="primary"/>
					<Button className="button" type="submit" size="large" variant="contained" color="primary">Get Weather</Button>
				</form>
				{weatherContent}
				{this.state.data &&
					<WeatherDetails data={this.state.data} />
				}
			</div>
		)
	}
}

export default Weather;