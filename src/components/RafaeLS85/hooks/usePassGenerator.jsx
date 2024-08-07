import { useState } from 'react'

export default function usePassGenerator() {
	const [passwordLength, setPasswordLength] = useState('0')
	const [password, setPassword] = useState(null)
	const [, setIsCopied] = useState(false)
	const [includeUpperCase, setIncludeUpperCase] = useState(false)
	const [includeLowerCase, setIncludeLowerCase] = useState(false)
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeSymbols, setIncludeSymbols] = useState(false)

	const lowercaseLetters = 'abcdefghijklmnñopqrstuvwxyz'
	const uppercaseLetters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
	const symbols = '!@#$%^&*)(_+=-}{><'
	const numbers = '0123456789'

	const onHandleCopy = () => {
		copyTextToClipboard(password)
			.then(() => {
				setIsCopied(true)
				alert('Password Copy To Clipboard')
			})
			.catch((err) => {
				setIsCopied(false)
				console.log(err)
			})
	}

	async function copyTextToClipboard(text) {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text)
		} else {
			return document.execCommand('copy', true, text)
		}
	}

	const stepsConversor = (input) => input / 5

	function checksValidatior({ checkA, checkB, checkC, checkD }) {
		if (!checkA && !checkB && !checkC && !checkD) return true
	}

	function enableButton({
		passwordLength,
		includeSymbols,
		includeNumbers,
		includeLowerCase,
		includeUpperCase
	}) {
		const cheksValidation =
			checksValidatior({
				check_a: includeUpperCase,
				check_b: includeLowerCase,
				check_c: includeNumbers,
				check_d: includeSymbols
			}) === true
		const passValidation = stepsConversor(passwordLength) === 0
		if (!cheksValidation && !passValidation) return true
	}

	function createPassword({
		passwordLength,
		includeUpperCase,
		includeLowerCase,
		includeNumbers,
		includeSymbols
	}) {
		if (
			checksValidatior({
				check_a: includeUpperCase,
				check_b: includeLowerCase,
				check_c: includeNumbers,
				check_d: includeSymbols
			})
		) {
			return
		}
		let pass = ''
		let chars = ''

		if (includeUpperCase) chars += uppercaseLetters
		if (includeLowerCase) chars += lowercaseLetters
		if (includeNumbers) chars += numbers
		if (includeSymbols) chars += symbols

		const array = new Uint32Array(passwordLength)
		window.crypto.getRandomValues(array)

		for (let i = 0; i < passwordLength; i++) {
			pass += chars[array[i] % chars.length]
		}
		setPassword(pass)
		return pass
	}

	function getStrength() {
		const LEVELS = ['', 'WEAK', 'MEDIUM', 'STRONG']

		const cheksValidation =
			checksValidatior({
				check_a: includeUpperCase,
				check_b: includeLowerCase,
				check_c: includeNumbers,
				check_d: includeSymbols
			}) === true

		if (passwordLength === 0) {
			return LEVELS[0]
		}

		if (cheksValidation) return LEVELS[0]

		if (stepsConversor(passwordLength) === 4) {
			return LEVELS[1]
		}

		if (stepsConversor(passwordLength) === 8) {
			return LEVELS[2]
		}

		if (
			stepsConversor(passwordLength) > 8 &&
			includeSymbols &&
			includeUpperCase &&
			includeLowerCase
		) {
			return LEVELS[3]
		}

		if (stepsConversor(passwordLength) > 8) {
			return LEVELS[2]
		}

		return LEVELS[0]
	}

	return {
		password,
		passwordLength,
		setPasswordLength,
		includeUpperCase,
		setIncludeUpperCase,
		includeLowerCase,
		setIncludeLowerCase,
		includeNumbers,
		setIncludeNumbers,
		includeSymbols,
		setIncludeSymbols,
		createPassword,
		onHandleCopy,
		stepsConversor,
		enableButton,
		getStrength
	}
}
