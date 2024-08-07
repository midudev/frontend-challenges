import React, { useEffect, useState } from 'react'
import styles from './styles.css'

const MIN_LENGTH = 5
const MAX_LENGTH = 50
const STEP = 1

const App = () => {
	const [passLength, setPassLength] = useState(MIN_LENGTH)
	const [showPass, setShowPass] = useState(true)
	const [password, setPassword] = useState('')
	const [showCopy, setShowCopy] = useState(true)

	useEffect(() => {
		generatePassword()
	}, [])

	const copyPass = () => {
		navigator.clipboard.writeText(password)
		setShowCopy(false)
		setTimeout(() => {
			setShowCopy(true)
		}, 1000)
	}

	const IconShowPass = () => {
		if (showPass) {
			return (
				<img
					className='cursor-pointer'
					onClick={() => setShowPass(false)}
					src='https://www.svgrepo.com/show/305464/eye-off-outline.svg'
					alt='Show'
				/>
			)
		} else {
			return (
				<img
					className='cursor-pointer'
					onClick={() => setShowPass(true)}
					src='https://www.svgrepo.com/show/309610/eye-show.svg'
					alt='Show'
				/>
			)
		}
	}

	const handleChangeLength = (value) => {
		setPassLength(value)
		generatePassword(value)
	}

	function generatePassword(length) {
		let result = ''
		const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_%#&=@*'
		for (let i = 0; result.length < passLength; i++) {
			const char = characters.charAt(Math.floor(Math.random() * characters.length))
			if (!result.includes(char)) result += char
		}
		result = result.split('').reverse().join('')
		setPassword(result)
	}

	const getTemplatePass = () => {
		let result = ''
		for (let i = 0; i < passLength; i++) {
			result += '•'
		}
		return result
	}

	return (
		<div className='container-box'>
			<div className='row-box xl:1/4 lg:w-1/3 md:w-1/2 sm:w-full sm:mx-2'>
				<h1 className='h1-williamvp'>Password Generator</h1>
				<div className='result-box'>
					<div className='grid grid-cols-3 gap-4'>
						<div className='col-span-2 overflow-hidden'>
							<h3>{showPass ? password : getTemplatePass()}</h3>
						</div>
						<div className='col-auto div-icons'>
							{showCopy
								? (
									<button
										title={'Copy'}
										type='button'
										className='btn-icon-wavp'
										onClick={() => copyPass()}
									>
										<img width={25} src='https://www.svgrepo.com/show/88285/copy.svg' alt='Copy' />
									</button>
								)
								: (
									<button
										title={'Password copied'}
										type='button'
										className='btn-icon-wavp animate-ping'
									>
										<img width={25} src='https://www.svgrepo.com/show/50467/check.svg' alt='Copied' />
									</button>
								)}
						</div>
					</div>
				</div>

				<div className='result-box'>
					<div className='grid grid-cols-3 gap-4'>
						<div className='col-span-2 align-middle'>
							<h3>Password length</h3>
						</div>
						<div className='col-auto text-right'>{passLength}</div>
					</div>

					<div className='text-center'>
						<input
							type='range'
							value={passLength}
							step={STEP}
							min={MIN_LENGTH}
							max={MAX_LENGTH}
							onChange={(e) => handleChangeLength(e.target.value)}
							className='range-wavp'
						/>
						<button className='btn-generate-wavp' onClick={() => generatePassword()}>
							Generate
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
