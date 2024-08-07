import React, { useState } from 'react'
import Icon from './Icon'

export const Random = () => {
	const [password, setPassword] = useState('')
	const [range, setRange] = useState(10)
	const [color, setColor] = useState('accent-red-500')

	const randomizePassword = (event) => {
		event.preventDefault()
		const min = Math.ceil(33)
		const max = Math.floor(122)
		let numbers = []
		for (let index = 0; index < range; index++) {
			numbers = [...numbers, Math.floor(Math.abs(Math.random() * (max - min) + min))]
		}
		const text = String.fromCharCode(...[...numbers])
		setPassword(text)
	}
	console.log(password)

	const setRangeValue = ({ target: { value } }) => {
		if (value >= 10 && value <= 15) setColor('accent-red-500')
		if (value >= 16 && value <= 25) setColor('accent-yellow-500')
		if (value >= 26 && value <= 30) setColor('accent-green-500')
		setRange(value)
		console.log(range)
	}

	const copyPassword = () => {
		if (password === '') return
		navigator.clipboard
			.writeText(password)
			.then(() => alert('copiado a portapapeles'))
			.catch(() => alert('Error al copiar'))
	}

	return (
		<>
			<form
				onSubmit={randomizePassword}
				className='w-100 p-7 flex flex-col justify-between items-center gap-4'
			>
				<div
					className='flex items-center  gap-3 rounded p-3 bg-slate-400 cursor-pointer'
					title={password !== '' && 'Copy To Clipboard!'}
					onClick={copyPassword}
				>
					{password === '' ? (
						<h4 className='italic text-3xl border-slate-500 '>Click Button to Generate a pass!</h4>
					) : (
						<>
							<h4 className='italic text-3xl border-slate-500 '>{password}</h4>
							<Icon />
						</>
					)}
				</div>
				<label className='flex gap-3'>
					<p className='text-xl'>Password Lenght: {range}</p>
					<input
						className={color}
						type='range'
						min='10'
						max='30'
						defaultValue={range}
						step={1}
						onChange={setRangeValue}
					/>
				</label>
				<button type='submit' className='p-3 bg-slate-400 rounded-md hover:bg-slate-600'>
					Generate
				</button>
			</form>
		</>
	)
}
