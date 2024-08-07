import React, { useState, useEffect } from 'react'
import copyIcon from 'public/copyIcon.svg'

const CHARACTERS = '1234567890¿qwertyuiop+asdfghjklñ{}zxcv<nbm,.-QWERTYUIOPASDFGHJKLÑZXCVBNM'

const SECURITY = {
	LOW: 'Débil',
	NORMAL: 'Normal',
	STRONG: 'Segura'
}

const generateRandomValue = (length) => {
	const random = Math.floor(Math.random() * length + 1)
	return random
}

const generatePassword = (length) => {
	let newPassword = ''
	for (let index = 0; index < length; index++) {
		const newChar = CHARACTERS.charAt(generateRandomValue(CHARACTERS.length))
		newPassword += newChar
	}

	return newPassword
}

const PasswordGenerator = () => {
	const [password, setPassword] = useState(() => generatePassword(5))
	const [passwordLength, setPasswordLength] = useState(5)
	const [security, setSecurity] = useState(() => SECURITY.LOW)

	const securityColor = (type = 'accent') => {
		if (security === SECURITY.LOW) return `${type}-red-700`
		if (security === SECURITY.NORMAL) return `${type}-yellow-700`
		if (security === SECURITY.STRONG) return `${type}-green-700`
	}

	useEffect(() => {
		if (passwordLength < 10) setSecurity(SECURITY.LOW)
		if (passwordLength >= 10 && passwordLength < 15) setSecurity(SECURITY.NORMAL)
		if (passwordLength >= 15) setSecurity(SECURITY.STRONG)

		setPassword(generatePassword(passwordLength))
	}, [passwordLength])

	return (
		<>
			<div className='grid h-screen place-items-center '>
				<div className='container'>
					<h1 className='text-4xl text-white text-center mb-10'>Generador de contraseñas</h1>
					<div
						className={`bg-white w-1/2 rounded px-4 py-2 flex mx-auto justify-evenly mb-10 border-4  ${securityColor(
							'border'
						)}`}
					>
						<input
							type='text'
							readOnly
							value={password}
							className='border border-cyan-700 w-4/5 rounded read-only:bg-gray-100'
						/>
						<div
							className='flex flex-row justify-center items-center ml-2 px-2  cursor-pointer rounded  hover:border hover:border-black'
							onClick={() => {
								navigator.clipboard.writeText(password)
							}}
						>
							<p>Copiar</p>
							<img
								src={copyIcon}
								alt='copy icon'
								className='w-10 h-10 pl-2 opacity-80 hover:opacity-100'
							/>
						</div>
					</div>
					<div className='bg-white w-1/2 rounded px-4 py-2 flex flex-col mx-auto '>
						<h2 className='text-2xl text-center mb-5'>Genera tu contraseña</h2>
						<p className='text-l text-center mb-5'>
							Nivel de seguridad: <span>{security}</span>
						</p>
						<input
							type='range'
							min={5}
							max={20}
							step={1}
							value={passwordLength}
							className={securityColor('accent')}
							onChange={(e) => {
								setPasswordLength(e.target.value)
							}}
						/>
						<div className='flex flex-row justify-between w-full mb-5'>
							<small>5</small>
							<small>20</small>
						</div>
						<button
							onClick={() => {
								setPassword(generatePassword(passwordLength))
							}}
							className='w-1/2 bg-[#170f1e] rounded text-white self-center text-2xl px-4 py-2 mb-5 hover:bg-[#342244]'
						>
							Generar
						</button>
					</div>
				</div>
			</div>
			{/* Estos estilos los pongo acá para que cuando los cambie dinámicamente en la app, se puedan ver reflejados */}
			<div className='border-red-700  accent-red-700' />
			<div className='border-yellow-700 accent-yellow-700' />
			<div className='border-green-700 accent-green-700' />
		</>
	)
}

export default PasswordGenerator
