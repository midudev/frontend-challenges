import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import Toast from './Toast'

export default function PasswordGenerator() {
	const onlyLowerLetters = 'abcdefghijklmnopqrstuvwxyz'
	const onlyUpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const onlyNumbers = '0123456789'
	const onlySymbols = '!@#$%^&*().,-_+\\/'
	const minNumberOfCharacters = 6
	const maxNumberOfCharacters = 20
	const [numberOfCharacters, setNumberOfCharacters] = useState(minNumberOfCharacters)
	const [password, setPassword] = useState(null)
	const [showToast, setShowToast] = useState(false)
	const [includeType, setIncludeType] = useState({
		lower: true,
		upper: true,
		numbers: true,
		symbols: true
	})

	const handleChangeQty = (event) => {
		const value = event.target.value
		setNumberOfCharacters(value)
		setPassword(null)
	}

	const handleChangeCheck = (id) => {
		const newIncludeType = { [id]: !includeType[id] }
		setIncludeType((prev) => ({ ...prev, ...newIncludeType }))
		setPassword(null)
	}

	const generatePassword = () => {
		const { lower, upper, numbers, symbols } = includeType
		let chars = ''
		let generatedPassword = ''
		if (lower) {
			chars += onlyLowerLetters
		}
		if (upper) {
			chars += onlyUpperLetters
		}
		if (numbers) {
			chars += onlyNumbers
		}
		if (symbols) {
			chars += onlySymbols
		}
		for (let i = 0; i < numberOfCharacters; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			generatedPassword += chars.substring(randomNumber, randomNumber + 1)
		}
		setPassword(generatedPassword)
	}

	const copyToClipboard = () => {
		setShowToast(true)
		if ('clipboard' in navigator) {
			return navigator.clipboard.writeText(password)
		} else {
			return document.execCommand('copy', true, password)
		}
	}

	useEffect(() => {
		let timeout = null
		if (showToast) {
			timeout = setTimeout(() => {
				setShowToast(false)
			}, 3000)
		}

		return () => clearTimeout(timeout)
	}, [showToast])

	return (
		<main className='min-h-screen flex flex-col items-center justify-center'>
			<div
				className={`bg-white flex flex-col items-center rounded-lg w-1/4 ${
					showToast ? 'h-[27rem]' : 'h-[25rem]'
				}`}
			>
				<h1 className='text-2xl pt-3'>Generate your super strong password</h1>

				<section className='w-full flex flex-col flex-grow justify-between items-center px-12 py-8'>
					<div className='flex flex-col items-center'>
						<label className='block text-sm font-medium text-gray-900 dark:text-gray-300 text-center'>
							How strong do you want your password?
						</label>
						<input
							type='range'
							min={minNumberOfCharacters}
							max={maxNumberOfCharacters}
							step='1'
							value={numberOfCharacters}
							onChange={handleChangeQty}
							className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 my-4'
						/>
						<span className='w-16 h-14 bg-blue-400 rounded-lg items-center justify-center flex text-4xl text-white font-bold'>
							{numberOfCharacters}
						</span>
					</div>

					<div className='w-full flex flex-col'>
						<div className='flex flex-row justify-between'>
							<Checkbox checked={includeType.lower} onChange={() => handleChangeCheck('lower')}>
								Only Lower Letters
							</Checkbox>
							<Checkbox checked={includeType.numbers} onChange={() => handleChangeCheck('numbers')}>
								Only Numbers
							</Checkbox>
						</div>
						<div className='flex flex-row justify-between'>
							<Checkbox checked={includeType.upper} onChange={() => handleChangeCheck('upper')}>
								Only Upper Letters
							</Checkbox>
							<Checkbox checked={includeType.symbols} onChange={() => handleChangeCheck('symbols')}>
								Only Symbols
							</Checkbox>
						</div>
					</div>

					<div className='border rounded-lg border-blue-400 font-bold h-12 w-full flex items-center justify-between'>
						<span className='ml-2.5'>{password}</span>
						<button
							className='flex items-center h-full rounded-r-md py-2 px-3 text-xs border-l border-blue-400 font-bold text-blue-500 bg-white hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:hover:text-blue-500'
							onClick={copyToClipboard}
							disabled={!password}
						>
							<span className='copy-text'>Copy</span>
						</button>
					</div>

					{showToast && <Toast message='Password copied!' />}

					<button
						className='text-white bg-green-600 hover:bg-green-700 font-medium w-full rounded-lg text-base px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none'
						onClick={generatePassword}
					>
						Generate
					</button>
				</section>
			</div>
		</main>
	)
}
