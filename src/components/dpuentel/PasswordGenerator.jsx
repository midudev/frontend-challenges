import React, { useState } from 'react'
import PasswordResult from '@components/dpuentel/PasswordResult'
import PasswordLength from './PasswordLength'
import RangeSlider from './RangeSlider'
import CheckboxLabeled from './CheckboxLabeled'
import Button from './Button'
import { PatternSymbols, PatternNumbers, PatternUppercase, PatternLowerCase } from './Patterns'
import Title from './Title'
import PasswordStrength from './PasswordStrength'

export default function PasswordGenerator() {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(10)
	const [includeUppercase, setIncludeUppercase] = useState(false)
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeSymbols, setIncludeSymbols] = useState(false)

	const generatePassword = () => {
		const charactersByPattern = Math.floor(length / getPatternsNumberActive())
		const activePatterns = getActivePatterns()
		let lastUsedPattern = null
		let password = ''

		activePatterns.forEach((pattern) => {
			;[...Array(charactersByPattern)].forEach(() => {
				password += getCharacterForPattern(pattern)
				lastUsedPattern = pattern
			})
		})

		while (password.length < length) {
			password += getCharacterForPattern(lastUsedPattern)
		}

		password = shuffle([...password]).join('')

		setPassword(password)
	}

	const getPatternsNumberActive = () => {
		let patternsNumberActive = 1
		if (includeSymbols) patternsNumberActive++
		if (includeUppercase) patternsNumberActive++
		if (includeNumbers) patternsNumberActive++
		return patternsNumberActive
	}

	const getActivePatterns = () => {
		const activePatterns = []
		activePatterns.push(new RegExp(`[${PatternLowerCase}]`))
		if (includeUppercase) activePatterns.push(new RegExp(`[${PatternUppercase}]`))
		if (includeNumbers) activePatterns.push(new RegExp(`[${PatternNumbers}]`))
		if (includeSymbols) activePatterns.push(new RegExp(`[${PatternSymbols}]`))
		return activePatterns
	}

	const getCharacterForPattern = (pattern) => {
		let result
		while (true) {
			result = String.fromCharCode(getRandom())
			if (pattern.test(result)) {
				return result
			}
		}
	}

	const shuffle = (array) => {
		return array.sort(() => getRandom() - 128)
	}

	const getRandom = () => {
		const result = new Uint8Array(1)
		window.crypto.getRandomValues(result)
		return result[0]
	}

	return (
		<section className='grid grid-cols-1 gap-4 place-items-center'>
			<Title text='Password Generator' />
			<article className='w-80'>
				<PasswordResult password={password} placeholder='P4$5W0rD!' size='5' />
			</article>
			<article className='bg-slate-800 min-w-48 w-80 p-4 grid grid-cols-1 gap-4 text-xs'>
				<PasswordLength length={length} />
				<RangeSlider
					min='4'
					max='24'
					value={length}
					onChange={(e) => setLength(e.target.value)}
					className='
						form-range
						appearance-none
						w-full
						h-6
						p-0
						bg-transparent
						focus:outline-none focus:ring-0 focus:shadow-none
						col-span-2
					'
				/>
				<CheckboxLabeled
					label='Include Uppercase Letters'
					checked={includeUppercase}
					onChange={(e) => setIncludeUppercase(e.target.checked)}
				/>
				<CheckboxLabeled
					label='Include Numbers'
					checked={includeNumbers}
					onChange={(e) => setIncludeNumbers(e.target.checked)}
				/>
				<CheckboxLabeled
					label='Include Symbols'
					checked={includeSymbols}
					onChange={(e) => setIncludeSymbols(e.target.checked)}
				/>
				<PasswordStrength password={password} />
				<Button onClick={generatePassword} text={'GENERATE 🡆'} />
			</article>
		</section>
	)
}
