import React, { useState } from 'react'
import Profile from './Profile'
import { copy } from './Clipboard'

export default function Index() {
	const [password, SetPassword] = useState('')
	const [passwordlength, SetPasswordLength] = useState(10)

	const handleGenerate = () => {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let password = ''
		for (let i = 0; i < passwordlength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			password += chars.substring(randomNumber, randomNumber + 1)
		}
		SetPassword(password)
	}

	const handleCopy = () => {
		copy(password)
	}

	return (
		<div className='flex flex-col justify-center items-center bg-gray-300text-base h-full'>
			<div
				className='flex flex-col items-center gap-3 pb-2  bg-gray-500 border-2 border-solid
			  border-white pt-2 my-3 font-semibold'
			>
				<h1>Generador de Contraseñas</h1>
				<span className='sm:block'>Seleccione el rango de la contraseña</span>
				<input
					className='MyRange'
					type='range'
					step={1}
					min={8}
					max={30}
					value={passwordlength}
					onChange={(e) => SetPasswordLength(e.target.value)}
				></input>
				<span className=''>{passwordlength}</span>
				<button
					className='bg-transparent
				hover:bg-blue-500
				 text-white
				  font-semibold
				  py-2 px-4
				  border border-white
				  hover:border-transparent rounded'
					onClick={handleGenerate}
				>
					Generar Contraseña
				</button>
				<textarea
					className='resize-none border-none'
					value={password}
					placeholder='Aqui sera generada su contraseña'
					readOnly
				></textarea>
				<button
					className='bg-transparent
					hover:bg-blue-500
					 text-white
					 font-semibold
					 py-2 px-4
					 border border-white
					 hover:border-transparent rounded'
					onClick={handleCopy}
				>
					Copiar
				</button>
			</div>
			<Profile />
		</div>
	)
}
