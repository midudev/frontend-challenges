import { useState } from 'react'

import { Button } from './Button'

const DEFAULT_LENGTH = 10

export const Form = ({ onSubmit }) => {
	const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH)

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit(passwordLength)
	}

	return (
		<form className='relative mb-4' onSubmit={handleSubmit}>
			<div className='flex mt-4 mb-8 justify-between items-center gap-4 md:flex-row flex-col'>
				<label
					htmlFor='default-range'
					className='block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100'
				>
					Select password lenght
				</label>
				<input
					className='flex-grow h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
					id='default-range'
					type='range'
					min='5'
					max='30'
					value={passwordLength}
					onChange={(e) => setPasswordLength(e.target.value)}
				/>
				<span>{passwordLength}</span>
				<Button type='submit'>Generate Password</Button>
			</div>
		</form>
	)
}
