import React, { useEffect, useState } from 'react'
import ButtonClipboard from './ButtonClipboard'
import ButtonGenerate from './ButtonGenerate'

const letters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'

function PasswordGen() {
	const [formInclude, setFormInclude] = useState({
		passwordLength: 8,
		includeUppercase: true,
		includeNumbers: true
	})
	const [password, setPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)

	useEffect(() => {
		handlePassGenerator()
	}, [])

	const handleRangeChange = (e) => {
		console.log(e.target.value)
		setFormInclude({ ...formInclude, [e.target.name]: e.target.value })
	}

	const handlePassGenerator = () => {
		const { passwordLength, includeUppercase, includeNumbers } = formInclude

		let stringLetters = letters
		let password = ''

		if (includeUppercase) {
			stringLetters += uppercaseLetters
		}

		if (includeNumbers) {
			stringLetters += numbers
		}

		for (let i = 0; i < passwordLength; i++) {
			password += stringLetters[Math.floor(Math.random() * stringLetters.length)]
		}
		setPassword(password)
	}

	const handleClick = (e) => {
		e.preventDefault()
		handlePassGenerator()
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 1700)
	}

	return (
		<main className='h-screen w-full bg-[#e0ffff] flex flex-col justify-center items-center relative'>
			<div className='absolute top-6 right-4 sm:top-10 sm:right-10 transition-transform'>
				{isCopied
					? (
						<span className='px-4 py-3 bg-emerald-600 text-white rounded'>¡Copied to clipboard!</span>
					)
					: null}
			</div>
			<div className='flex flex-col gap-6 bg-slate-700 p-3 sm:p-8 min-w-[95%] sm:min-w-0 rounded shadow-xl'>
				<h1 className='text-white text-3xl sm:text-5xl text-center font-bold'>
					Password Generator
				</h1>
				<div className='bg-slate-300 flex items-center justify-between px-2 sm:px-4 py-2 rounded'>
					<p className='text-md sm:text-xl text-black p-2 rounded w-[80%] bg-slate-50'>
						{password}
					</p>
					<ButtonClipboard copyToClipboard={copyToClipboard} isCopied={isCopied} />
				</div>
				<form onSubmit={handlePassGenerator}>
					<div>
						<label htmlFor='range' className='text-white text-xs font-light uppercase'>
							Length Password
						</label>
						<div className='flex justify-between items-center gap-8 my-2'>
							<input
								value={formInclude.passwordLength}
								type='range'
								id='range'
								min='8'
								max='25'
								name='passwordLength'
								onChange={handleRangeChange}
								className='w-full h-1 cursor-pointer'
							/>
							<p className='font-sans text-2xl text-white text-center'>
								{formInclude.passwordLength}
							</p>
						</div>
					</div>
					<div className='mt-2 text-center'>
						<ButtonGenerate handleClick={handleClick} />
					</div>
				</form>
				<a
					className='text-center text-white'
					target='_blank'
					href='https://github.com/francociprian'
				>
					🚀
					<span className='transition-all hover:underline hover:underline-offset-2'>
						{' '}
						built by Franco
					</span>
				</a>
			</div>
		</main>
	)
}

export default PasswordGen
