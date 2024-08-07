import { ChangeEvent, useState } from 'react'
import { passwordGenerator } from './password-generator'

const CONSTANTS = {
	MIN_LENGTH: 8,
	MAX_LENGTH: 128
}

export default function App() {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(8)

	const onClickHandler = (e: { preventDefault: () => void }) => {
		e.preventDefault()

		const password = passwordGenerator({
			passwordLength,
			options: {
				numbers: false,
				symbols: false,
				uppercase: false
			}
		})
		setPassword(password)
	}

	const handleRange = (e: ChangeEvent<HTMLInputElement>) =>
		setPasswordLength(Number(e.target.value))

	return (
		<div className='text-white flex flex-col items-center justify-center h-screen'>
			<p>Password: {password}</p>
			<input
				type='range'
				value={passwordLength}
				min={CONSTANTS.MIN_LENGTH}
				max={CONSTANTS.MAX_LENGTH}
				onChange={(e) => handleRange(e)}
				className={'form-range w-large h-6 p-0'}
			/>
			<button
				className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
				onClick={onClickHandler}
			>
				Generar contraseña aleatoria
			</button>
		</div>
	)
}
