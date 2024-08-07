import React, { useState, useEffect } from 'react'
import './style.css'
import genPass from './helpers/generate-password'
import Button from './ui/ButtonOptions'

const Generator = () => {
	const [configPassword, setConfigPassword] = useState({
		length: '20',
		upperCase: true,
		lowerCase: true,
		numbers: true,
		symbols: true
	})
	const [password, setPassword] = useState(null)

	const [classShow, setClassShow] = useState('hidden')

	function showClass() {
		setClassShow('flex animate-bounce')
		if (classShow !== 'flex animate-bounce') {
			setTimeout(() => {
				setClassShow('hidden')
			}, 1000)
		}
	}

	const disable = Object.values(configPassword).filter((x) => x === true).length > 1

	const onInputPass = (e) => {
		const { name, value, type } = e.target
		setConfigPassword((prev) => {
			if (type === 'submit') {
				return { ...prev, [name]: !prev[name] }
			} else if (type === 'range') {
				return { ...prev, [name]: value }
			}
		})
	}

	const generatePassword = () => {
		setPassword(genPass(configPassword))
	}

	useEffect(() => {
		generatePassword()
	}, [configPassword])

	const configButton = { disable, onInputPass, configPassword }

	return (
		<div className={'drzz21container flex justify-center  pt-14 lg:pt-0'}>
			{/* <div className='text-white'>{JSON.stringify(configPassword)}</div> */}

			<div className='flex flex-col lg:flex-row drop-shadow-2xl items-center'>
				{/* columna 1 */}
				<div className='flex flex-col mb-2 w-64 lg:w-80'>
					<div className={'text-5xl text-center font-bold mb-4 drzz21text'}>Password Generator</div>
					<div className='w-full'>
						<button
							onClick={generatePassword}
							className={
								'active:bg-[#2b3138] text-2xl font-medium w-full py-2 mb-2 rounded bg-[#393E46] drzz21text drop-shadow-2xl'
							}
						>
							Generate Password
						</button>
					</div>
					<div className='w-full bg-[#383f4b] mb-2 px-2 py-2 rounded flex justify-center flex-col'>
						<div className={'text-center text-2xl font-bold drzz21text'}>
							Password length: {configPassword.length}
						</div>
						<div>
							<input
								value={configPassword.length}
								onInput={onInputPass}
								className={'w-full mb-3 drzz21Input'}
								type='range'
								id='sInput'
								name='length'
								min='8'
								max='100'
							/>
						</div>
					</div>
					<div className='box-border flex space-x-2 mb-3'>
						<Button config={{ ...configButton, name: 'upperCase' }} />
						<Button config={{ ...configButton, name: 'lowerCase' }} />
					</div>
					<div className='box-border flex space-x-2'>
						<Button config={{ ...configButton, name: 'numbers' }} />
						<Button config={{ ...configButton, name: 'symbols' }} />
					</div>
				</div>
				{/* columna 2 */}
				<div
					className={
						'flex flex-row break-all justify-center items-center text-2xl rounded bg-[#393E46] mx-2 px-3 w-30 w-full md:w-30 lg:w-96 drzz21text'
					}
				>
					<a href='#' className='group w-1/3 mr-2 relative text-center flex justify-center'>
						<span
							className={`drzz21text absolute  ${classShow}    -top-8 -translate-y-full w-20 px-2 py-1 bg-[#EEEEEE] rounded-lg  text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-[#EEEEEE]`}
						>
							Copied!
						</span>

						<button
							onClick={() => {
								navigator.clipboard.writeText(password)
								showClass()
							}}
							className={
								'text-2xl active:bg-[#191d24]  w-full text-center font-medium py-2 my-2 rounded bg-[#222831] drzz21text drop-shadow-2xl'
							}
						>
							<svg
								className='fill-[#00adb5] mx-auto text-center'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 512 512'
							>
								<path d='M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z' />
							</svg>
						</button>
					</a>
					<span className='w-2/3 font-medium'>{password}</span>
				</div>
			</div>
		</div>
	)
}

export default Generator
