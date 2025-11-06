export default function Button() {
	return (
		<button
			type='submit'
			className='w-full mt-3 rounded-xl bg-purple-500 text-white font-semibold py-2.5
        hover:bg-purple-600 active:scale-95 transition-all duration-150 
          shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300'
		>
			Submit
		</button>
	)
}
