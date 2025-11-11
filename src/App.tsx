import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import ErrorCard from './components/ErrorCard'
import Button from './components/ui/Button'
import { Input } from './components/ui/Input'
import WeatherCard from './components/WeatherCard'
import { weatherStore } from './store/weatherStore'
import type { WeatherData, WeatherDataObject } from './types/weather.types'
import { getWeather } from './utils/getWeather'

export default function App() {
	const { register, handleSubmit, setValue } = useForm<WeatherData>()
	const { data, setData } = weatherStore()

	const onSubmit: SubmitHandler<WeatherData> = async data => {
		const newWeather: WeatherDataObject = await getWeather(data)
		setData(newWeather)
		setValue('city', '')
	}

	return (
		<div className='flex h-screen items-center justify-center bg-slate-900'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-slate-800 w-[300px] min-h-[180px] p-6 rounded-md text-center shadow-lg flex flex-col items-center'
			>
				<h1 className='text-2xl font-bold text-white mb-4'>Weather App</h1>
				<Input {...register('city', { required: true })} />
				<Button />
				{data && data.name ? (
					<WeatherCard {...data} />
				) : data.name === 'not found' ? (
					<ErrorCard />
				) : (
					''
				)}
			</form>
		</div>
	)
}
