import React, { useState } from 'react'

const LETTERS_ALLOWED = 'abcdefghijklmnopqrstuvwxyz'
const LETTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS_ALLOWED = '0123456789'
const SYMBOLS_ALLOWED = '!@#$%^&*()_+-=[]{};:,./<>?|'
// const AVAILABLE_CHARS = LETTERS_ALLOWED.concat(NUMBERS_ALLOWED).concat(SYMBOLS_ALLOWED).concat(LETTERS_ALLOWED.map(letter => letter.toLocaleUpperCase()))

interface Password {
	length: number
	upperCase: boolean
	numbers: boolean
	symbols: boolean
}

function App() {
	const [password, setPassword] = useState<string>('')
	const [passwordLength, setPasswordLength] = useState<number>(9)
	const [creatingPassword, setCreatingPassword] = useState<boolean>(false)
	const [upperCase, setUppercase] = useState<boolean>(true)
	const [numbers, setNumbers] = useState<boolean>(true)
	const [symbols, setSymbols] = useState<boolean>(true)

	const createRandomPassword = ({ length, upperCase, numbers, symbols }: Password) => {
		if (creatingPassword) return
		setCreatingPassword(true)
		let USABLE_CHARS = LETTERS_ALLOWED
		if (upperCase) USABLE_CHARS += LETTERS_UPPERCASE
		if (numbers) USABLE_CHARS += NUMBERS_ALLOWED
		if (symbols) USABLE_CHARS += SYMBOLS_ALLOWED

		let pass = ''
		for (let i = 0; i <= length; i++) {
			const randomWord = Math.floor(Math.random() * USABLE_CHARS.length)
			pass += USABLE_CHARS[randomWord]
		}
		setPassword(pass)
		setTimeout(() => {
			setCreatingPassword(false)
		}, 1000)
	}

	const changePasswordDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setPasswordLength(+value)
	}

	return (
		<div className='h-screen flex items-center justify-center'>
			<div className='relative flex flex-col justify-around bg-neutral-400 border min-w-[24rem] max-w-lg h-96 mx-auto rounded-lg border-black rounded-tl-[50px] rounded-tr-[50px]'>
				<div
					onClick={() =>
						createRandomPassword({ length: passwordLength, upperCase, numbers, symbols })
					}
					className='cursor-pointer absolute items-center flex w-[75px] h-[160px] right-[-75px] top-[20%]'
				>
					<div className='relative w-[20px] h-[100%] bg-neutral-400 rounded-r-lg shadow-[inset_0_2px_5px__rgba(0,0,0,0.9)] bg-[linear-gradient(to bottom, #282828 0%,#959595 14%,#d1d1d1 37%,#bababa 49%,#959595 67%,#212121 100%)]'>
						<div className='absolute w-[15px] h-[50%] top-0 rounded-r-sm '></div>
					</div>
					<div className='relative w-[20px] h-[80%] bg-neutral-400 rounded-r-lg shadow-[inset_0_2px_5px__rgba(0,0,0,0.9)] bg-gradient-to-r from-bg-neutral-800 via-bg-neutral-400 to-neutral-800'>
						{/* <div className='relative w-[15px] h-[10px] bg-neutral-800 transition-all duration-300 z-10 shadow-[inset_0_2px_5px__rgba(0,0,0,0.9)]'> */}
						<div
							className={`absolute ${
								creatingPassword ? 'h-[20px] top-[40px]' : 'h-[85px] top-[-60px]'
							} rounded-b-md z-[1] left-[5px] w-[10px] shadow-[inset_0_2px_5px__rgba(0,0,0,0.9)] bg-neutral-800 `}
						></div>
						<div
							className={`absolute ${
								creatingPassword ? 'top-[40%] h-[14px]' : 'top-[13px] h-[15px]'
							} z-0 bg-black left-[3px] w-[14px] shadow-[0_1px_1px_rgba(0,0,0,0.4)] rounded-full`}
						></div>
						<div
							className={`absolute ${
								creatingPassword ? 'top-[30px]' : 'top-[-65px]'
							} z-[2] left-[-2.5px] h-[25px] w-[25px] shadow-[inset_0_2px_5px__rgba(0,0,0,0.9)] bg-red-800 rounded-full`}
						></div>
						{/* </div> */}
					</div>
				</div>
				<div className='absolute top-[-70px] left-[20%] h-24 w-60 bg-neutral-400 rounded-tl-full rounded-tr-full border-4 border-yellow-600'>
					<div className='mt-5 rounded-tl-full rounded-tr-full'>
						<p className='text-center font-black text-amber-400 text-xl font-sans'>PASSWORD</p>
						<p className='text-center font-black text-amber-400 text-xl font-sans'>GENERATOR</p>
					</div>
				</div>
				{/* Parte Arriba */}
				<div className='w-full h-[180px] flex items-center'>
					<div className='flex text-center justify-center rounded-sm h-28 mx-auto w-[210px]'>
						{password.split('').map((letter, index) => {
							return (
								<div
									key={index}
									className='flex justify-center items-center text-sky-500 bg-white text-lg font-semibold'
								>
									{letter}
								</div>
							)
						})}
						{/* <input type='text' className='text-center font-bold w-full rounded-sm h-8 p-2' defaultValue={password} /> */}
					</div>
				</div>
				{/* Parte Abajo */}
				<div
					style={{
						transform: 'rotateX(30deg)',
						transformOrigin: 'top',
						perspective: 'calc(75 * min(0.9vw, 0.55vh))'
					}}
				>
					<div
						className='flex gap-2 justify-center p-2 border-4 border-black bg-neutral-400'
						style={{ transform: 'rotateX(30deg)', transformOrigin: 'top' }}
					>
						<div className={'min-w-[98px] rounded-md relative py-4 px-2'}>
							<input
								onChange={() => setUppercase(!upperCase)}
								checked={upperCase}
								className={`bg-sky-800 before:flex ${
									upperCase ? 'before:top-[-2px]' : 'before:top-[-7px]'
								}   before:items-center before:justify-center before:text-white before:font-bold before:bg-sky-600 before:absolute before:content-["Uppercase"] before:rounded-full before:left-[-2px] before:h-full before:w-full bg-bottom cursor-pointer rounded-full bg-transparent absolute top-0 left-0 w-full h-full appearance-none`}
								type='checkbox'
								id='upper'
							/>
							<label className='flex justify-center text-white w-full z-10' htmlFor='upper'>
								Uppercase
							</label>
						</div>
						<div className={'min-w-[98px] rounded-md relative py-4 px-2'}>
							<input
								onChange={() => setNumbers(!numbers)}
								checked={numbers}
								className={`bg-sky-800 before:flex ${
									numbers ? 'before:top-[-2px]' : 'before:top-[-7px]'
								}   before:items-center before:justify-center before:text-white before:font-bold before:bg-sky-600 before:absolute before:content-["Numbers"] before:rounded-full before:h-full before:w-full bg-bottom cursor-pointer rounded-full bg-transparent absolute top-0 left-0 w-full h-full appearance-none`}
								type='checkbox'
								id='number'
							/>
							<label className='flex justify-center text-white w-full z-10' htmlFor='number'>
								Numbers
							</label>
						</div>
						<div className={'min-w-[98px] rounded-md relative py-4 px-2'}>
							<input
								onChange={() => setSymbols(!symbols)}
								checked={symbols}
								className={`bg-sky-800 before:flex ${
									symbols ? 'before:top-[-2px]' : 'before:top-[-7px]'
								}   before:items-center before:justify-center before:text-white before:font-bold before:bg-sky-600 before:absolute before:content-["Symbols"] before:rounded-full before:left-[2px] before:h-full before:w-full bg-bottom cursor-pointer rounded-full bg-transparent absolute top-0 left-0 w-full h-full appearance-none`}
								type='checkbox'
								id='symbol'
							/>
							<label className='flex justify-center text-white w-full z-10' htmlFor='symbol'>
								Symbols
							</label>
						</div>
					</div>
					<div
						className='absolute top-[68px] left-[-21px] w-[425px] h-[100px] flex gap-2 justify-center grow border-4 border-black w-full bg-neutral-400'
						style={{ transformOrigin: 'top', transform: 'rotateX(0deg)' }}
					>
						<input
							onChange={(e) => changePasswordDifficulty(e)}
							min='4'
							max='14'
							className='mr-2'
							step='1'
							defaultValue={passwordLength}
							type='range'
							id='symbol'
						/>
						<p className='text-white font-bold'>{passwordLength}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
