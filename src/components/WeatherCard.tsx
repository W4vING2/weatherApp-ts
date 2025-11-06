interface WeatherCardProps {
	data: {
		name: string
		main: {
			temp: number
			humidity: number
			feels_like: number
		}
		wind: {
			speed: number
		}
		weather: [
			O: {
				icon: string
			}
		]
	}
}

export default function WeatherCard(props: WeatherCardProps) {
	return (
		<div className='text-center'>
			<h1>Weather in {props.data.name}</h1>
			<img
				src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
				alt='weather image'
				width='75px'
			/>
			<p>Temperature: {props.data.main.temp}°C</p>
			<p>Humidity: {props.data.main.humidity}%</p>
			<p>Feels like: {props.data.main.feels_like}°C</p>
			<p>Wind speed: {props.data.wind.speed} m/s</p>
		</div>
	)
}
