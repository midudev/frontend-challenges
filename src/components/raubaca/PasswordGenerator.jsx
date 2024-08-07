import React, { useRef, useState } from 'react'

const CHARS = '!@#$%^&*(){}[]=<>/,.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(8)
	const passwordRef = useRef(null)

	const handleLength = (e) => setPasswordLength(+e.target.value)

	const generatePassword = () => {
		let newPassword = ''
		for (let i = 0; i < passwordLength; i++) {
			newPassword += CHARS[Math.floor(Math.random() * CHARS.length)]
		}
		passwordRef.current.value = newPassword
	}

	const copyPassword = () => {
		const password = passwordRef.current.value

		if (!password) return

		navigator.clipboard.writeText(password).then(
			() => {
				console.log('Contraseña copiada')
			},
			() => {
				console.error('No se pudo copiar la contraseña')
			}
		)
	}

	return (
		<main className='grid min-h-screen place-content-center bg-white p-4'>
			<div className='border border-solid border-current p-4 grid gap-4'>
				<h1 className='font-sans text-2xl font-bold'>Generador de Contraseña</h1>
				<div className='flex justify-between items-center'>
					<label htmlFor='length'>
						Tamaño: <span className='font-bold'>{passwordLength}</span>
					</label>
					<input
						type='range'
						name='length'
						id='length'
						min={8}
						max={32}
						value={passwordLength}
						onChange={handleLength}
					/>
				</div>
				<button
					type='button'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
					onClick={generatePassword}
				>
					Generar Contraseña
				</button>
				<div className='flex border border-solid border-current'>
					<input
						ref={passwordRef}
						type='text'
						placeholder='Contraseña'
						className='flex-1 p-2 w-[32ch] focus:outline-none'
						readOnly
					/>
					<button
						type='button'
						className='p-2 border-l border-solid border-current'
						onClick={copyPassword}
						title='Copiar'
					>
						💾
					</button>
				</div>
			</div>
		</main>
	)
}

export default PasswordGenerator
