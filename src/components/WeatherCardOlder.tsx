import type { WeatherDataObject } from '../types/weather.types'
import Typography from './ui/Typography'

export default function WeatherCard(props: WeatherDataObject) {
	return (
		<div className='text-center my-5 flex flex-col items-center gap-2'>
			<h1 className='text-white font-bold text-2xl flex flex-nowrap'>
				Weather in {props.name}
			</h1>
			<Typography title={`Temp: ${Math.floor(props.main.temp)}°C`} />
			<img
				src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
				alt='weather image'
				width='75px'
			/>
			<Typography
				title={`Feels like: ${Math.floor(props.main.feels_like)}°C`}
			/>
			<Typography title={`Humidity: ${props.main.humidity}%`} />
			<Typography title={`Wind speed: ${Math.floor(props.wind.speed)} m/s`} />
		</div>
	)
}
