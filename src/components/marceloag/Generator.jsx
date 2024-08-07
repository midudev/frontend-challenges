import { useState, useEffect } from 'react'

function Generator() {
	const [password, setPassword] = useState('')
	const [passLength, setPassLength] = useState(15)
	const inputStyle = {
		fontFamily: 'Anonymous Pro'
	}

	useEffect(() => {
		generatePass()
	}, [passLength])

	// Copiar al portapapeles
	async function copyClipboard() {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(password)
		} else {
			return document.execCommand('copy', true, password)
		}
	}

	async function generatePass() {
		let generatedPass = ''
		const max = 33
		const min = 126
		for (let i = 0; i < passLength; i++) {
			const randomNumber = Math.floor(Math.random() * (max - min) + min)
			generatedPass += String.fromCharCode(randomNumber)
		}
		setPassword(generatedPass)
	}

	function checkStrength(password) {
		// ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))
	}

	return (
		<div
			id='container'
			className='shadow-2xl shadow-gray-300 p-10 flex flex-col gap-4 lg:w-4/12 w-11/12 rounded-xl bg-white'
		>
			<div id='generator' className='flex flex-row gap-2 items-end justify-around'>
				<input
					value={password}
					className='flex-1 border-b-2 border-gray-200 py-2 text-gray-700 font-bold text-lg'
					placeholder='Your Password'
					id='generatedPass'
					onChange={(e) => setPassword(e.target.value)}
					style={inputStyle}
					tabindex='-1'
				/>
				<a
					id='copy'
					class='bg-indigo-700 p-2 rounded-md cursor-pointer hover:bg-indigo-900 transition-all duration-150'
					onClick={() => copyClipboard()}
				>
					<svg
						className='w-6 h-6'
						stroke='white'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
						/>
					</svg>
				</a>
			</div>
			<div id='range'>
				<label
					for='minmax-range'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Password Length: {passLength}
				</label>
				<input
					id='minmax-range'
					type='range'
					min={5}
					max={30}
					value={passLength}
					onChange={(event) => setPassLength(event.target.value)}
					className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
				/>
			</div>
			<button
				class='bg-indigo-600 text-white px-10 py-3 rounded-xl hover:bg-indigo-900 ease-in-out transition-all duration-200 flex flex-row justify-center items-center gap-4'
				onClick={() => generatePass()}
			>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='white'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
					/>
				</svg>
				Generate Password
			</button>
		</div>
	)
}

export default Generator
