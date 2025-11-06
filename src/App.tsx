import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import Button from './components/ui/Button'
import { Input } from './components/ui/Input'
import WeatherCard from './components/WeatherCard'
import { weatherStore } from './store/weatherStore'
import type { WeatherData } from './types/weather.types'
import { getWeather } from './utils/getWeather'

export default function App() {
	const { register, handleSubmit } = useForm<WeatherData>()
	const { data, setData } = weatherStore()

	const onSubmit: SubmitHandler<WeatherData> = async data => {
		const newWeather = await getWeather(data)
		setData(newWeather)
		console.log(newWeather)
	}

	return (
		<div className='flex h-screen items-center justify-center bg-slate-900'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-slate-800 w-[300px] min-h-[180px] p-4 rounded-md text-center shadow-lg'
			>
				<h1 className='text-2xl font-bold text-white mb-4'>Weather App</h1>
				<Input {...register('city', { required: true })} />
				<Button />
				{data ? <WeatherCard data={data} /> : ''}
			</form>
		</div>
	)
}
