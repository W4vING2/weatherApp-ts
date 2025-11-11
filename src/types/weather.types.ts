export interface WeatherData {
	city: string
}

export interface WeatherDataObject {
	name: string
	main: {
		temp: number
		humidity: number
		feels_like: number
	}
	wind: {
		speed: number
	}
	weather: {
		icon: string
	}[]
}
