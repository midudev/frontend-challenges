import { useState } from 'react'
import { CheckBox } from './CheckBox'
import { StrengthBar } from './StrengthBar'
import { GenerateButton } from './GenerateButton'
import { Header } from './Header'
import { HashDisplay } from './HashDisplay'
import { Footer } from './Footer'
import { PasswordLengthBar } from './PasswordLengthBar'

const Main = () => {
	const levels = ['', 'Too Weak!', 'Weak', 'Medium', 'Strongth']
	const fillColorLevels = new Map([['', ''], ['Too Weak!', 'bg-red-400'], ['Weak', ' bg-yellow-400'], ['Medium', ' bg-orange-400'], ['Strongth', 'bg-green-400']])

	const [hash, setHash] = useState('ashB2gtHJ1')
	const [hashLength, setHashLength] = useState(10)
	const [strongth, setStrongth] = useState('')
	const [upperCase, setUpperCase] = useState(false)
	const [lowerCase, setLoweCase] = useState(false)
	const [numbers, setNumbers] = useState(false)
	const [symbols, setSymbols] = useState(false)
	const [level, setLevel] = useState(0)
	const [colorFill, setColorFill] = useState('bg-red-600')

	const lengthHandler = e => {
		setHashLength(e.target.value)
	}

	const upperCaseHandler = e => {
		setUpperCase(e.target.checked)
		levelHandler(e.target.checked)
	}

	const lowerCaseHandler = e => {
		setLoweCase(e.target.checked)
		levelHandler(e.target.checked)
	}

	const numberHandler = e => {
		setNumbers(e.target.checked)
		levelHandler(e.target.checked)
	}

	const symbolsHandler = e => {
		setSymbols(e.target.checked)
		levelHandler(e.target.checked)
	}

	const copyHandler = () => {
		navigator.clipboard.writeText(hash)
	}

	const levelHandler = (increment) => {
		let diffLevel = 0
		if (increment) {
			diffLevel = 1
		} else if (level > 0) {
			diffLevel = -1
		}
		setLevel(level + diffLevel)
		setStrongth(levels[level + diffLevel])
		setColorFill(fillColorLevels.get(levels[level + diffLevel]))
	}

	const generateHash = () => {
		const numbersChar = '0123456789'
		const symbolsChar = '!@#$%^&*()'
		const lowerLetterChar = 'abcdefghijklmnopqrstuvwxyz'
		const upperLetterChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

		let password = ''
		let chars = lowerLetterChar
		if (upperCase) {
			chars += upperLetterChar
		}
		if (numbers) {
			chars += numbersChar
		}
		if (symbols) {
			chars += symbolsChar
		}

		for (let i = 0; i <= hashLength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			password += chars.substring(randomNumber, randomNumber + 1)
		}

		setHash(password)
	}

	return (
		<div className='container mx-auto max-w-md p-3 text-lg mt-5'>
			<Header />
			<HashDisplay password={hash} handler={copyHandler} />
			<div className='text-white  bg-[#1b2128] mt-4 p-5'>
				<PasswordLengthBar length={hashLength} handler={lengthHandler} />
				<div className='mt-2 text-gray-400'>
					<CheckBox text='Include Uppercase Letters' name='cboxUpperLetter' isChecked={upperCase} handler={upperCaseHandler} />
					<CheckBox text='Include Lowecase Letters' name='cboxLowerLetter' isChecked={lowerCase} handler={lowerCaseHandler} />
					<CheckBox text='Include Numbers' name='cboxNumber' isChecked={numbers} handler={numberHandler} />
					<CheckBox text='Include Symbols' name='cboxSymbols' isChecked={symbols} handler={symbolsHandler} />
				</div>
				<StrengthBar color={colorFill} level={level} strongthLabel={strongth} />
				<GenerateButton handler={generateHash} />
				<Footer />
			</div>
		</div >
	)
}

export default Main
