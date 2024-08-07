import React from 'react'
import { PasswordEntropyCalculator } from './PasswordEntropyCalculator'

export default function PasswordStrength({ password }) {
	const BACKGROUND_COLOR_CHECKED = 'bg-gray-300'
	const BACKGROUND_COLOR_UNCHECKED = 'bg-slate-900'

	const entropyElements = 10
	const entropy = (PasswordEntropyCalculator(password) * entropyElements) / 426

	const getBgEntropyElement = (index) => {
		if (entropy >= index) {
			return index <= entropy ? BACKGROUND_COLOR_CHECKED : BACKGROUND_COLOR_UNCHECKED
		}
	}

	return (
		<div className='w-full flex p-3 bg-slate-900'>
			<span className='text-gray-500'>STRENGTH</span>
			<span className='ml-auto text-gray-500 grid grid-cols-10 gap-2'>
				{[...Array(entropyElements).keys()].reverse().map((value) => (
					<span
						key={value}
						className={`h-5 w-2 border-gray-300 border-2 inline ${getBgEntropyElement(value)}`}
					></span>
				))}
			</span>
		</div>
	)
}
