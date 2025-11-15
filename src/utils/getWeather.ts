import type { WeatherData, WeatherDataObject } from '../types/weather.types'

const API_KEY = import.meta.env.VITE_WEATHER_KEY

export const getWeather = async (
	data: WeatherData
): Promise<WeatherDataObject> => {
	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${API_KEY}&units=metric`
		)
		const json = await res.json()
		return {
			name: json.name,
			main: {
				temp: json.main.temp,
				humidity: json.main.humidity,
				feels_like: json.main.feels_like,
			},
			wind: {
				speed: json.wind.speed,
			},
			weather: [
				{
					icon: json.weather[0].icon,
				},
			],
		}
	} catch (err) {
		console.log(err)
		return {
			name: 'not found',
			main: { temp: 0, humidity: 0, feels_like: 0 },
			wind: { speed: 0 },
			weather: [{ icon: '' }],
		}
	}
}
