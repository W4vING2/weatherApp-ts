import { create } from 'zustand'

interface InitialState {
	data: object | null
}

interface Functions {
	setData: (data: object) => void
}

interface Store extends InitialState, Functions {}

export const weatherStore = create<Store>()(set => ({
	data: null,
	setData: (data: object) => set(() => ({ data })),
}))
