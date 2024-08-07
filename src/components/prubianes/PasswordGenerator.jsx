import { useState } from 'react'
import generatePassword from './generatorUtils'

const PasswordGenerator = () => {
	const [lenght, setLenght] = useState(1)
	const [password, setPassword] = useState('')

	return (
		<div className='main text-white w-6/12 bg-stone-900 flex justify-start items-center flex-col rounded-md'>
			<h1 className='my-3 text-2xl'>Password Generator</h1>
			<br />
			<span className='password mb-3'>La password generada es: {password}</span>
			<br />
			{!password
				? (
					<button className='bg-orange-800 rounded-md w-24 mb-4' onClick={() => undefined}>
					Copiar
					</button>
				)
				: (
					<button
						className='bg-green-800 rounded-md w-24 mb-4'
						onClick={() => navigator.clipboard.writeText(password)}
					>
					Copiar
					</button>
				)}
			<br />
			<input
				type='range'
				min={1}
				max={50}
				value={lenght}
				onChange={(e) => setLenght(e.target.value)}
			/>{' '}
			Largo: {lenght}
			<br />
			<button
				className='bg-green-800 rounded-md w-24 mb-5 mt-3'
				onClick={() => setPassword(generatePassword(lenght))}
			>
				Generar
			</button>
		</div>
	)
}

export default PasswordGenerator
