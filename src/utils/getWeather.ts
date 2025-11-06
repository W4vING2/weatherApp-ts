import type { WeatherData } from '../types/weather.types'

export const getWeather = async (data: WeatherData): Promise<object> => {
	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=9304ca1da5ba357cf87e00d55ff74cde&units=metric`
		)
		const json = await res.json()
		return json
	} catch (err) {
		console.log(err)
		return {}
	}
}
