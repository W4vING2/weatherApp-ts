import type { WeatherDataObject } from '../types/weather.types'
import Typography from './ui/Typography'

export default function WeatherCard(props: WeatherDataObject) {
	return (
		<div
			className='
				text-center my-6 flex flex-col items-center gap-3
				bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl
				border border-white/20 w-[95%] sm:w-[260px]
				text-white animate-fade-in-up
			'
		>
			<h1 className='font-bold text-2xl mb-2'>Weather in {props.name}</h1>

			<img
				src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
				alt='weather icon'
				className='w-20 h-20 drop-shadow-md'
			/>

			<div className='flex flex-col gap-1 text-sm sm:text-base mt-2'>
				<Typography title={`🌡 Temp: ${Math.floor(props.main.temp)}°C`} />
				<Typography
					title={`🤔 Feels like: ${Math.floor(props.main.feels_like)}°C`}
				/>
				<Typography title={`💧 Humidity: ${props.main.humidity}%`} />
				<Typography
					title={`🌬 Wind speed: ${Math.floor(props.wind.speed)} m/s`}
				/>
			</div>
		</div>
	)
}
