import React, { useState } from 'react'
import Checkbox from './Checkbox'

function Card() {
	const [password, setPassword] = useState({
		length: 8,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true
	})
	const [handleText, setHandleText] = useState('')
	const [copiedText, setCopiedText] = useState(false)

	const handleChangeUppercase = () => {
		setPassword({
			...password,
			uppercase: !password.uppercase
		})
	}

	const handleChangeLowercase = () => {
		setPassword({
			...password,
			lowercase: !password.lowercase
		})
	}

	const handleChangeNumbers = () => {
		setPassword({
			...password,
			numbers: !password.numbers
		})
	}

	const handleChangeSymbols = () => {
		setPassword({
			...password,
			symbols: !password.symbols
		})
	}

	const setPasswordLength = (val) => {
		var x = document.getElementById('rangeInput').value
		setPassword({
			...password,
			length: x
		})
	}

	function generatePassword() {
		const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
		const symbolsArray = [
			'!',
			'@',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'(',
			')',
			'!',
			'@',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'(',
			')'
		]

		const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97)
		const lowerCaseLetters = characterCodes.map((code) => String.fromCharCode(code))
		const upperCaseLetters = lowerCaseLetters.map((letter) => letter.toUpperCase())

		const { length, uppercase, lowercase, numbers, symbols } = password

		const generateThePassword = (length, uppercase, lowercase, numbers, symbols) => {
			const availableCharacters = [
				...(lowercase ? lowerCaseLetters : []),
				...(uppercase ? upperCaseLetters : []),
				...(numbers ? numbersArray : []),
				...(symbols ? symbolsArray : [])
			]
			const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
			const characters = shuffleArray(availableCharacters).slice(0, length)
			setHandleText(characters.join(''))
			return characters
		}

		generateThePassword(length, uppercase, lowercase, numbers, symbols)
	}

	return (
		<div className='border-10 p-5 mx-auto mt-20 rounded-2xl overflow-hidden shadow-lg w-[420px] bg-gray-50 grid justify-items-center justify-center text-center'>
			<div class=' bg-gray-50 grid flex-col justify-center relative overflow-hidden sm:py-12'>
				<div class='max-w-7xl mx-auto'>
					<div class='relative group'>
						<div class='absolute'></div>
						<div className='relative grid'>
							<div class='relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6'>
								<svg
									class='h-8 w-8 text-purple-500'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
									/>
								</svg>
								<div class='space-y-2'>
									<p class='text-slate-800'>
										Random password generator
										<br />
										by OswalDev
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Password length:</label>
				</div>
				<div>
					<input
						className='mt-1'
						type='range'
						id='rangeInput'
						min='8'
						max='60'
						step='1'
						onChange={(e) => setPasswordLength(e.target.value)}
					/>
				</div>
				<div>
					{password.length > 15 ? (
						<svg
							class='h-8 w-8 text-green-500'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							stroke-width='2'
							stroke='currentColor'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							{' '}
							<path stroke='none' d='M0 0h24v24H0z' /> <circle cx='12' cy='12' r='9' />{' '}
							<line x1='9' y1='9' x2='9.01' y2='9' /> <line x1='15' y1='9' x2='15.01' y2='9' />{' '}
							<path d='M8 13a4 4 0 1 0 8 0m0 0H8' />
						</svg>
					) : (
						<svg
							class='h-8 w-8 text-yellow-500'
							viewBox='0 0 24 24'
							width='20'
							height='20'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							{' '}
							<circle cx='12' cy='12' r='10' /> <line x1='8' y1='15' x2='16' y2='15' />{' '}
							<line x1='9' y1='9' x2='9.01' y2='9' /> <line x1='15' y1='9' x2='15.01' y2='9' />
						</svg>
					)}
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include uppercase letters</label>
				</div>
				<div>
					<Checkbox value={password.uppercase} onChange={handleChangeUppercase} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include lowercase letters</label>
				</div>
				<div>
					<Checkbox value={password.lowercase} onChange={handleChangeLowercase} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include numbers</label>
				</div>
				<div>
					<Checkbox value={password.numbers} onChange={handleChangeNumbers} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include symbols</label>
				</div>
				<div>
					<Checkbox value={password.symbols} onChange={handleChangeSymbols} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<input
						className='border-2 border-indigo-500 rounded-lg'
						type='text'
						readOnly
						value={handleText}
						onChange={(e) => setHandleText(e.target.value)}
					/>
				</div>
				<div>
					<button
						className='ml-1 pb-4 mt-0'
						onClick={() => {
							if (handleText.length > 0) {
								navigator.clipboard.writeText(handleText)
								setCopiedText(true)
								setInterval(() => {
									setCopiedText(false)
								}, 2000)
							}
						}}
					>
						{copiedText ? (
							<svg
								class='h-8 w-8 text-green-500'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								stroke-width='2'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								{' '}
								<path stroke='none' d='M0 0h24v24H0z' />{' '}
								<path d='M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2' />{' '}
								<rect x='9' y='3' width='6' height='4' rx='2' /> <path d='M9 14l2 2l4 -4' />
							</svg>
						) : (
							<svg
								class='h-8 w-8 text-gray-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className='border-4 rounded-full'>
				{/* <button onClick={generatePassword}>Generate password</button> */}
				<button
					onClick={generatePassword}
					class='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500'
				>
					<svg
						class='w-5 h-5 mr-2'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M13 10V3L4 14h7v7l9-11h-7z'
						></path>
					</svg>
					<span class='relative'>Generate password</span>
				</button>
			</div>
		</div>
	)
}

export default Card
