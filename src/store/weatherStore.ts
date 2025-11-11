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
	data: {} as WeatherDataObject,
	setData: (data: WeatherDataObject) => set(() => ({ data })),
}))
