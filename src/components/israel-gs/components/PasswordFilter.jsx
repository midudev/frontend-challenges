import React, { useEffect, useState } from 'react'
import passwordGenerator from '@components/israel-gs/helpers/passwordGenerator.ts'

export default function PasswordFilter({ onChange }) {
	const minPasswordLength = 8
	const maxPasswordLength = 50
	const filters = [
		{
			label: 'Minúsculas',
			value: 'lowercase',
			checked: true
		},
		{
			label: 'Mayúsculas',
			value: 'uppercase',
			checked: true
		},
		{
			label: 'Números',
			value: 'numbers',
			checked: true
		},
		{
			label: 'Caracteres especiales',
			value: 'special_characters',
			checked: true
		}
	]

	const [passwordLength, setPasswordLength] = useState((maxPasswordLength - minPasswordLength) / 2)
	const [passwordFilters, setPasswordFilters] = useState(filters)

	useEffect(() => {
		handlePasswordLenghtChange()
	}, [])

	const handlePasswordLenghtChange = (e) => {
		const value = e && e.target ? e.target.value : passwordLength
		setPasswordLength(value)
		onChange([value, ...passwordFilters.map((filter) => filter.checked)])
	}

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target
		const currentFilter = passwordFilters.find((filter) => filter.value === name)
		currentFilter.checked = checked
		setPasswordFilters([...passwordFilters, currentFilter])
		handlePasswordLenghtChange()
	}

	return (
		<div className='px-6 py-4 rounded-lg relative bg-gray-600/50 text-white w-full'>
			<h1 className='text-2xl font-bold mb-4'>Generador de contraseñas</h1>
			<div className='flex flex-col gap-4 mb-4'>
				<div className='flex flex-col gap-2'>
					<label htmlFor='length'>Caracteres: {passwordLength}</label>
					<input
						type='range'
						id='length'
						name='length'
						min={minPasswordLength}
						max={maxPasswordLength}
						onChange={handlePasswordLenghtChange}
						value={passwordLength}
					/>
				</div>
			</div>
			{filters.map((filter) => (
				<div className='flex items-center gap-2 text-xl mb-2' key={filter.value}>
					<input
						type='checkbox'
						id={filter.value}
						name={filter.value}
						defaultChecked={filter.checked}
						onChange={handleCheckboxChange}
					/>
					<label htmlFor={filter.value}>{filter.label}</label>
				</div>
			))}
		</div>
	)
}
