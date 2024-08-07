import { useState } from 'react'
import { randPassword } from './password'

const App = () => {
	const [length, setLength] = useState(12)
	const [uppercase, setUppercase] = useState(true)
	const [lowercase, setLowercase] = useState(false)
	const [numbers, setNumbers] = useState(false)
	const [symbols, setSymbols] = useState(false)
	const [generatedPassword, setGeneratedPassword] = useState('')
	const handleGeneratePassword = () => {
		const options = {
			uppercase,
			lowercase,
			numbers,
			symbols
		}
		setGeneratedPassword(randPassword(length, options))
	}
	const handleRangeChange = (evt) => {
		setLength(parseInt(evt.target.value))
	}

	const handleChangeUppercase = () => {
		setUppercase((uppercase) => !uppercase)
	}

	const handleChangeLowercase = () => {
		setLowercase((lowercase) => !lowercase)
	}

	const handleChangeNumbers = () => {
		setNumbers((numbers) => !numbers)
	}

	const handleChangeSymbols = () => {
		setSymbols((symbols) => !symbols)
	}

	const handleClickGeneratedPassword = (event) => {
		if (generatedPassword !== '') {
			navigator.clipboard.writeText(generatedPassword)
			alert('Contraseña copiada al portapapeles')
		}
	}

	return (
		<article className='grid place-content-center min-h-screen'>
			<div className='flex flex-col gap-6 rounded text-white border-red-800 border-4 p-4'>
				<h1 className='text-center text-lg'>Generador de contraseñas</h1>
				<div className='text-center'>
					<p
						className='hover:cursor-pointer text-center font-[monospace] text-lg border-red-800 border-2 px-2 break-all h-8 max-h-16'
						title='Copiar contraseña'
						onClick={handleClickGeneratedPassword}
					>
						{generatedPassword}
					</p>
				</div>

				<fieldset>
					<legend className='text-center pb-4'>Longitud de contraseña</legend>
					<div className='flex justify-center gap-2'>
						<span>{length} </span>
						<input
							id='length'
							type='range'
							min='0'
							max='25'
							defaultValue={length}
							onChange={handleRangeChange}
							className='accent-red-800'
						/>
					</div>
				</fieldset>
				<fieldset>
					<legend className='text-center pb-4'>Caracteres</legend>
					<div className='flex flex-wrap gap-4 justify-center'>
						<div className='flex gap-2 grow justify-center'>
							<input
								type='checkbox'
								id='uppercase'
								value={uppercase}
								onChange={handleChangeUppercase}
								checked={uppercase}
								className='hover:cursor-pointer accent-red-800'
							/>
							<label htmlFor='uppercase' className='hover:cursor-pointer select-none'>
								Mayúsculas
							</label>
						</div>
						<div className='flex gap-2 grow justify-center'>
							<input
								type='checkbox'
								id='lowercase'
								value={lowercase}
								onChange={handleChangeLowercase}
								className='hover:cursor-pointer accent-red-800'
							/>
							<label htmlFor='lowercase' className='hover:cursor-pointer select-none'>
								Minúsculas
							</label>
						</div>
						<div className='flex gap-2 grow justify-center'>
							<input
								type='checkbox'
								id='numbers'
								value={numbers}
								onChange={handleChangeNumbers}
								className='hover:cursor-pointer accent-red-800'
							/>
							<label htmlFor='numbers' className='hover:cursor-pointer select-none'>
								Números
							</label>
						</div>
						<div className='flex gap-2 grow justify-center'>
							<input
								type='checkbox'
								id='symbols'
								value={symbols}
								onChange={handleChangeSymbols}
								className='hover:cursor-pointer accent-red-800'
							/>
							<label htmlFor='symbols' className='hover:cursor-pointer select-none'>
								Símbolos
							</label>
						</div>
					</div>
				</fieldset>
				<button
					title='Generar nueva contraseña'
					onClick={handleGeneratePassword}
					className='flex gap-2 justify-center w-full bg-red-800 hover:bg-red-900 active:bg-black border-red-800 border-2 rounded p-2'
				>
					<svg
						fill='#FFFFFF'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width='24px'
						height='24px'
					>
						<path d='M 7.59375 3 L 9.0625 5 L 13 5 C 16.324219 5 19 7.675781 19 11 L 19 15 L 16 15 L 20 20.46875 L 24 15 L 21 15 L 21 11 C 21 6.59375 17.40625 3 13 3 Z M 4 3.53125 L 0 9 L 3 9 L 3 13 C 3 17.40625 6.59375 21 11 21 L 16.40625 21 L 14.9375 19 L 11 19 C 7.675781 19 5 16.324219 5 13 L 5 9 L 8 9 Z' />
					</svg>
					Generar
				</button>
			</div>
		</article>
	)
}

export default App
