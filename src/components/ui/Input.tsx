import type { ForwardedRef, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export const Input = forwardRef(function Input(
	props: InputHTMLAttributes<HTMLInputElement>,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<input
			ref={ref}
			placeholder='Enter the city...'
			{...props}
			className='w-full rounded-xl border border-slate-600 bg-slate-700 px-4 py-2 
      text-white placeholder-slate-400 
      focus:border-purple-400 focus:ring-2 focus:ring-purple-300 
         focus:scale-[1.02] transition-transform duration-200 outline-none'
		/>
	)
})
