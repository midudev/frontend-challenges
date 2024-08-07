import React, { useEffect, useReducer, useState } from 'react'
import Clip from './icons/Clip'

function reducer(state, action) {
	switch (action.type) {
	case 'onUpperCase':
		return { ...state, hasUpperCase: !state.hasUpperCase }
	case 'onLowerCase':
		return { ...state, hasLowerCase: !state.hasLowerCase }
	case 'onNumbers':
		return { ...state, hasNumbers: !state.hasNumbers }
	case 'onSymbols':
		return { ...state, hasSymbols: !state.hasSymbols }
	case 'onCharacterLength':
		return { ...state, characterLength: Number(action.payload) }
	default:
		throw new Error()
	}
}

const initialState = {
	hasUpperCase: false,
	hasLowerCase: true,
	hasNumbers: true,
	hasSymbols: false,
	characterLength: 8
}

const STRENGTHS = {
	1: { name: 'Weak', color: 'red' },
	2: { name: 'Fair', color: 'orange' },
	3: { name: 'Good', color: 'yellow' },
	4: { name: 'Strong', color: 'green' },
	5: { name: 'Very Strong', color: '#4ADE80' }
}

const Content = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [password, setPassword] = useState('')
	const [strength, setStrength] = useState(0)

	useEffect(() => {
		handleGenerate()
	}, [])

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(password)
	}

	const handleGenerate = () => {
		const generatePassword = () => {
			let charSet = ''
			state.hasUpperCase ? (charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') : '' //eslint-disable-line
			state.hasLowerCase ? (charSet += 'abcdefghijklmnopqrstuvwxyz') : '' //eslint-disable-line
			state.hasNumbers ? (charSet += '0123456789') : '' //eslint-disable-line
			state.hasSymbols ? (charSet += '!@#$%^&*()') : '' //eslint-disable-line

			return Array(state.characterLength)
				.fill(charSet)
				.map((x) => {
					return x[Math.floor(Math.random() * x.length)]
				})
				.join('')
		}

		const strengthIndicator = () => {
			let indicator = 0
			state.hasUpperCase ? (indicator += 1) : '' //eslint-disable-line
			state.hasLowerCase ? (indicator += 1) : '' //eslint-disable-line
			state.hasNumbers ? (indicator += 1) : '' //eslint-disable-line
			state.hasSymbols ? (indicator += 1) : '' //eslint-disable-line
			state.characterLength >= 12 ? (indicator += 1) : '' //eslint-disable-line

			return STRENGTHS[indicator]
		}

		setPassword(generatePassword())
		setStrength(strengthIndicator())
	}

	return (
		<main className='w-screen h-screen flex justify-center items-center font-mono'>
			<article className='bg-gray-700 m-2 w-full md:w-1/2'>
				<section className=''>
					<h1 className=' bg-[#170f1e] text-gray-300 text-center pb-4 text-2xl'>
						Password Generator
					</h1>
				</section>
				<section className='px-6 py-2 flex justify-between items-center'>
					<p className=' text-gray-200 py-2 text-3xl basis-4/5 overflow-hidden '>{password}</p>
					<button onClick={copyToClipboard}>
						<Clip className='w-6 h-6 text-white cursor-pointer hover:text-green-400 transition-all' />
					</button>
				</section>
				<section className='bg-[#170f1e] h-4'></section>
				<section className='px-6 py-2'>
					<div className='flex justify-between items-center'>
						<p className='text-gray-100 '>Character Length</p>
						<p className='text-green-400 text-3xl'>{state.characterLength}</p>
					</div>
					<input
						className='w-full h-2 bg-gray-200 rounded-lg  cursor-pointer accent-green-400'
						value={state.characterLength}
						onChange={(e) => dispatch({ type: 'onCharacterLength', payload: e.target.value })}
						type='range'
						min='1'
						max='20'
					/>
					<div className='flex items-center rounded border border-gray-600 pl-4 my-4'>
						<input
							id='onUpperCase'
							type='checkbox'
							checked={state.hasUpperCase}
							onChange={() => dispatch({ type: 'onUpperCase' })}
							className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-400 focus:ring-2 focus:ring-green-500'
						/>
						<label
							htmlFor='onUpperCase'
							className='ml-2 w-full py-4 font-medium text-white uppercase'
						>
							con mayúsculas
						</label>
					</div>
					<div className='flex items-center rounded border border-gray-600 pl-4 mb-4'>
						<input
							id='onLowerCase'
							type='checkbox'
							checked={state.hasLowerCase}
							onChange={() => dispatch({ type: 'onLowerCase' })}
							className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-400 focus:ring-2 focus:ring-green-500'
						/>
						<label
							htmlFor='onLowerCase'
							className='ml-2 w-full py-4 font-medium text-white uppercase'
						>
							con minúsculas
						</label>
					</div>
					<div className='flex items-center rounded border border-gray-600 pl-4 mb-4'>
						<input
							id='onNumbers'
							type='checkbox'
							checked={state.hasNumbers}
							onChange={() => dispatch({ type: 'onNumbers' })}
							className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-400 focus:ring-2 focus:ring-green-500'
						/>
						<label
							htmlFor='onNumbers'
							className='ml-2 w-full py-4 font-medium text-white uppercase'
						>
							con números
						</label>
					</div>
					<div className='flex items-center rounded border border-gray-600 pl-4 mb-4'>
						<input
							id='onSymbols'
							type='checkbox'
							checked={state.hasSymbols}
							onChange={() => dispatch({ type: 'onSymbols' })}
							className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-400 focus:ring-2 focus:ring-green-500'
						/>
						<label
							htmlFor='onSymbols'
							className='ml-2 w-full py-4 font-medium text-white uppercase'
						>
							con símbolos
						</label>
					</div>
					<section className='bg-gray-800 my-4 flex justify-around items-center py-2'>
						<p className='text-lg text-white uppercase'>strength:</p>
						<p className='text-lg ' style={{ color: strength?.color }}>
							{strength?.name}
						</p>
					</section>
					<button
						onClick={handleGenerate}
						className='group bg-green-600 my-4 w-full flex justify-center items-center rounded-full py-2 cursor-pointer hover:bg-green-800'
					>
						<p className='text-lg text-white uppercase group-hover:text-gray-400'>generar</p>
					</button>
				</section>
			</article>
		</main>
	)
}

export default Content
