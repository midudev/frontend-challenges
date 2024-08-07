import Slider from './Slider'
import PasswordOption from './PaswordOption'
import copyIcon from './icons/copy.svg'
import PasswordStrength from './PasswordStrength'
import './styles/PasswordGenerator.css'
import { useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
	const [passwordStrength, setPasswordStrength] = useState(0)
	const [uppercaseParameter, setUppercaseParameter] = useState(false)
	const [lowercaseParameter, setlowercaseParameter] = useState(false)
	const [numbersParameter, setNumbersParameters] = useState(false)
	const [symbolsParameter, setSymbolsParameter] = useState(false)
	const [result, setResult] = useState('')
	const sliderRef = useRef(null)
	const lowercase = 'abcdefghijklmnopqrstuvwxyz'
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'
	const symbols = '!@#$%^&*()_-+='

	useEffect(() => {
		getFonts()
	})

	const getFonts = () => {
		const link1 = document.createElement('link')
		link1.setAttribute('rel', 'preconnect')
		link1.setAttribute(
			'href',
			'https://fonts.gstatic.com'
		)
		const link2 = document.createElement('link')
		link2.setAttribute('rel', 'preconnect')
		link2.setAttribute(
			'href',
			'https://fonts.googleapis.com'
		)
		const link3 = document.createElement('link')
		link3.setAttribute('rel', 'stylesheet')
		link3.setAttribute(
			'href',
			'https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700&display=swap'
		)
		document.head.appendChild(link1)
		document.head.appendChild(link2)
		document.head.appendChild(link3)
	}

	const hasAnOption = () => {
		return [uppercaseParameter, lowercaseParameter, numbersParameter, symbolsParameter].includes(
			true
		)
	}

	const copyToClipBoard = () => {
		navigator.clipboard.writeText(result)
	}

	const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))

	const handleCheckboxClick = (e) => {
		let comparator
		if (e.target) {
			comparator = {
				name: e.target.name,
				checked: e.target.checked
			}
		} else {
			comparator = {
				name: e.current.name,
				checked: e.current.checked
			}
		}
		switch (comparator.name) {
		case 'uppercase':
			setUppercaseParameter(!uppercaseParameter)
			comparator.checked
				? setPasswordStrength(passwordStrength + 1)
				: setPasswordStrength(passwordStrength - 1)
			break
		case 'lowercase':
			setlowercaseParameter(!lowercaseParameter)
			comparator.checked
				? setPasswordStrength(passwordStrength + 1)
				: setPasswordStrength(passwordStrength - 1)
			break
		case 'numbers':
			setNumbersParameters(!numbersParameter)
			comparator.checked
				? setPasswordStrength(passwordStrength + 1)
				: setPasswordStrength(passwordStrength - 1)
			break
		case 'symbols':
			setSymbolsParameter(!symbolsParameter)
			comparator.checked
				? setPasswordStrength(passwordStrength + 1)
				: setPasswordStrength(passwordStrength - 1)
			break
		}
	}

	const generatePassword = () => {
		if (passwordStrength !== 0) {
			let charactersPool = ''
			let response = ''
			if (lowercaseParameter) {
				charactersPool += lowercase
				response += getRandomCharFromString(lowercase)
			}
			if (uppercaseParameter) {
				charactersPool += uppercase
				response += getRandomCharFromString(uppercase)
			}
			if (numbersParameter) {
				charactersPool += numbers
				response += getRandomCharFromString(numbers)
			}
			if (symbolsParameter) {
				charactersPool += symbols
				response += getRandomCharFromString(symbols)
			}
			for (let i = response.length; i < Number(sliderRef.current.value) + 10; i++) {
				response += getRandomCharFromString(charactersPool)
			}
			setResult(response)
		}
	}

	return (
		<div id='daviddlh1' className='daviddlh1 password-generator__wrapper'>
			<div className='password-generator__main-container'>
				<h1>Password Generator</h1>
				<div className='password-generator__containers password-generator__first-container'>
					<input className='password-generator__output' disabled type='text' value={result} />
					<div className='divHoverEffect' style={{ position: 'relative' }}>
						<img
							src={copyIcon}
							onClick={copyToClipBoard}
							className='password-generator__output--icon'
						/>
						<span className='password-generator__output--icon--hover-effect'></span>
					</div>
				</div>
				<div className='password-generator__containers password-generator__second-container'>
					<Slider
						minValue={10}
						maxValue={25}
						step={1}
						sliderRef={sliderRef}
						passwordStrength={passwordStrength}
						setPasswordStrength={setPasswordStrength}
					/>
					<div className='password-generator__options-main-container'>
						<PasswordOption
							handleClick={handleCheckboxClick}
							name='uppercase'
							optionMessage='Include Uppercase Letters'
						/>
						<PasswordOption
							handleClick={handleCheckboxClick}
							name='lowercase'
							optionMessage='Include Lowercase Letters'
						/>
						<PasswordOption
							handleClick={handleCheckboxClick}
							name='numbers'
							optionMessage='Include Numbers'
						/>
						<PasswordOption
							handleClick={handleCheckboxClick}
							name='symbols'
							optionMessage='Include Symbols'
						/>
					</div>
					<PasswordStrength
						hasAnOption={hasAnOption}
						strength={passwordStrength}
						sliderRef={sliderRef}
					/>
					<button onClick={() => generatePassword()} className='password-generator__button'>
						Generate -&gt;
					</button>
				</div>
			</div>
		</div>
	)
}

export default PasswordGenerator
