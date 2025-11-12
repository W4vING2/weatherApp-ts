import { create } from 'zustand'
import type { WeatherDataObject } from '../types/weather.types'

interface InitialState {
	data: WeatherDataObject
}

interface Functions {
	setData: (data: WeatherDataObject) => void
}

interface Store extends InitialState, Functions {}

export const weatherStore = create<Store>()(set => ({
	data: {
		name: '',
		main: { temp: 0, humidity: 0, feels_like: 0 },
		wind: { speed: 0 },
		weather: [{ icon: '' }],
	},
	setData: (data: WeatherDataObject) => set(() => ({ data })),
}))
