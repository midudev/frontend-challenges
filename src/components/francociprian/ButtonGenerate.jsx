import React from 'react'

export default function ButtonGenerate({ handleClick }) {
	return (
		<button
			className='text-center bg-white text-black transition-all hover:bg-emerald-400 px-4 py-2 rounded uppercase text-sm sm:text-lg'
			aria-label='Generate password'
			type='submit'
			onClick={handleClick}
		>
			Generate
		</button>
	)
}
