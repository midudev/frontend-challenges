import React, { useEffect, useState, useMemo } from 'react'
import CopyButton from './CopyButton'
import StrengthBar from './StrengthBar'
import { createPassword, calculatePasswordStrength } from './utils'
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH, LETTERS, NUMBERS, SIMBOLS } from './constants'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(12)

	const [includeNumbers, setIncludeNumbers] = useState(true)
	const [includeSimbols, setIncludeSimbols] = useState(false)

	/**
	 * Every time the length, includeNumbers or includeSimbols changes, we need to recalculate the password
	 */
	useEffect(() => {
		const numbers = includeNumbers ? NUMBERS : ''
		const simbols = includeSimbols ? SIMBOLS : ''
		const characters = LETTERS + numbers + simbols
		setPassword(createPassword(characters, length))
	}, [length, includeNumbers, includeSimbols])

	const strength = useMemo(() => calculatePasswordStrength(password), [password])

	return (
		<div className='grid place-content-center mt-0 md:mt-20'>
			<main className='p-6 max-w-4xl mx-2 bg-white rounded-lg border shadow-md bg-gray-800 border-gray-700 text-white'>
				<h1 className='mb-10 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl text-center'><span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Smart Password generator</span></h1>

				<div className='relative justify-between items-center p-4 pb-6 bg-white rounded-lg border shadow-sm flex bg-gray-700 border-gray-600'>
					<h2 className='font-bold text-gray-300 tracking-widest'>{password}</h2>
					<CopyButton text={password} />
					<StrengthBar strength={strength} />
				</div>

				<div className='mt-10'>
					<div className='flex items-center gap-10'>
						<div className='flex items-center'>
							<input
								className='p-1 pl-2 text-sm rounded-lg border bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500'
								type='number' min={MIN_PASSWORD_LENGTH} max={MAX_PASSWORD_LENGTH} value={length} onChange={(e) => setLength(e.target.value)}
							/>

							<label htmlFor='include-numbers-checkbox' className='ml-2 text-sm font-medium'>Largo</label>
						</div>
						<div className='flex items-center'>
							<input
								id='include-numbers-checkbox'
								type='checkbox'
								checked={includeNumbers}
								className='w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
								onChange={() => setIncludeNumbers(b => !b)}
							/>
							<label htmlFor='include-numbers-checkbox' className='ml-2 text-sm font-medium text-gray-300'>Números</label>
						</div>
						<div className='flex items-center'>
							<input
								id='include-simbols-checkbox'
								type='checkbox'
								checked={includeSimbols}
								className='w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
								onChange={() => setIncludeSimbols(b => !b)}
							/>
							<label htmlFor='include-simbols-checkbox' className='ml-2 text-sm font-medium text-gray-300'>Símbolos</label>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default PasswordGenerator
