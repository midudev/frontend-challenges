import React, { useEffect, useState } from 'react'
import passwordGenerator from './passwordGanerator'
import InputPassword from './InputPassword'

const CONSTANTS = {
	MIN_LENGTH: 8,
	MAX_LENGTH: 64
}

const Card = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(12)
	const [options, setOptions] = useState({
		uppercase: false,
		lowercase: true,
		numbers: false,
		symbols: false
	})

	const handleRange = (e) => setPasswordLength(e.target.value)
	const handleCheckUppercase = (e) =>
		setOptions((options) => ({
			...options,
			uppercase: e.target.checked
		}))
	const handleCheckLowercase = (e) =>
		setOptions((options) => ({
			...options,
			lowercase: e.target.checked
		}))
	const handleCheckNumbers = (e) =>
		setOptions((options) => ({
			...options,
			numbers: e.target.checked
		}))
	const handleCheckSymbols = (e) =>
		setOptions((options) => ({
			...options,
			symbols: e.target.checked
		}))
	const generatorPassword = () => {
		const randomPassword = passwordGenerator(passwordLength, options)
		setPassword(randomPassword)
	}
	const copyTextToClipboard = (text) => {
		navigator.clipboard.writeText(text).then(
			() => console.log('Copiado correctamente.'),
			() => console.error('Error al copiar.')
		)
	}
	const handleRefreshPassword = () => generatorPassword()
	const handleCopyText = () => copyTextToClipboard(password)

	useEffect(() => {
		generatorPassword()
	}, [passwordLength, options])

	return (
		<div className='max-w-md text-white flex flex-col items-start justify-center'>
			<h1 className='text-2xl text-blue-500 mt-10 text-shadow uppercase'>
				Genera una contraseña segura
			</h1>
			<InputPassword
				password={password}
				handleRefreshPassword={handleRefreshPassword}
				handleCopyText={handleCopyText}
			/>
			<p className='mt-3'>
				Longitud. Min {CONSTANTS.MIN_LENGTH} Max {CONSTANTS.MAX_LENGTH}
			</p>
			<input
				type='range'
				className='w-full'
				min={CONSTANTS.MIN_LENGTH}
				max={CONSTANTS.MAX_LENGTH}
				value={passwordLength}
				onChange={(e) => handleRange(e)}
			/>
			<p className='mt-3'>Números de caracteres: {passwordLength}</p>
			<div className='flex flex-row mt-6'>
				<label>
					<input
						type='checkbox'
						name='uppercase'
						className='mr-3'
						onChange={handleCheckUppercase}
						checked={options.uppercase}
					/>
					Incluye mayúsculas
				</label>
			</div>
			<div className='flex flex-row mt-6'>
				<label>
					<input
						type='checkbox'
						name='lowercase'
						className='mr-3'
						onChange={handleCheckLowercase}
						checked={options.lowercase}
					/>
					Incluye minúsculas
				</label>
			</div>
			<div className='flex flex-row mt-6'>
				<label>
					<input
						type='checkbox'
						name='numbers'
						className='mr-3'
						onChange={handleCheckNumbers}
						checked={options.numbers}
					/>
					Incluye números
				</label>
			</div>
			<div className='flex flex-row mt-6'>
				<label>
					<input
						type='checkbox'
						name='symbols'
						className='mr-3'
						onChange={handleCheckSymbols}
						checked={options.symbols}
					/>
					Incluye símbolos
				</label>
			</div>
		</div>
	)
}

export default Card
