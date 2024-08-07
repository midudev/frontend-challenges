import { useState, useEffect, useCallback, createContext, useContext } from 'react'

const PasswordGeneratorContext = createContext()

export const CHAR_OPTIONS = {
	LETTERS: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	NUMBERS: '0123456789',
	SYMBOLS: '!@#$%^&*()'
}
const INITIAL_PASSWORD_LENGTH = 32
const COPIED_ALERT_TIMEOUT = 1500
const MEDIUM_STRENGH_LEVEL = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
const STRONG_STRENGH_LEVEL =
	'((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'

export const PasswordGeneratorContextProvider = ({ children }) => {
	const [passwordLength, setPasswordLength] = useState(INITIAL_PASSWORD_LENGTH)
	const [options, setOptions] = useState(['LETTERS'])
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [copied, setCopied] = useState(false)
	const [strength, setStrength] = useState('low')

	const generatePassword = useCallback(() => {
		let password = ''
		const charsSelected =
			!options || options.length === 0
				? CHAR_OPTIONS['LETTERS']
				: options.map((option) => CHAR_OPTIONS[option]).join()
		for (let i = 0; i < passwordLength; i++) {
			let rnd = Math.floor(Math.random() * charsSelected.length)
			password += charsSelected.substring(rnd, rnd + 1)
		}
		setGeneratedPassword(password)
		calculateStrength(password)
	}, [passwordLength, options])

	const calculateStrength = useCallback((password) => {
		const mediumRegex = new RegExp(MEDIUM_STRENGH_LEVEL)
		const strongRegex = new RegExp(STRONG_STRENGH_LEVEL)
		if (strongRegex.test(password) || password.length >= 32) {
			setStrength('strong')
		} else if (mediumRegex.test(password)) {
			setStrength('medium')
		} else {
			setStrength('low')
		}
	}, [])

	const updatePasswordLength = (passLength) => {
		if (passLength.length === 0) return
		setPasswordLength(passLength)
	}

	const updateOptions = (val) => {
		if (val && !options.includes(val)) {
			setOptions((prevOptions) => [...prevOptions, val])
		} else {
			setOptions((prevOptions) => prevOptions.filter((opt) => opt !== val))
		}
	}

	const copyPassword = async () => {
		await navigator.clipboard.writeText(generatedPassword)
		setCopied(true)
		setTimeout(() => setCopied(false), COPIED_ALERT_TIMEOUT)
	}

	useEffect(() => {
		generatePassword()
	}, [passwordLength, options])

	return (
		<PasswordGeneratorContext.Provider
			value={{
				passwordLength,
				updatePasswordLength,
				options,
				updateOptions,
				copied,
				copyPassword,
				generatePassword,
				generatedPassword,
				strength
			}}
		>
			{children}
		</PasswordGeneratorContext.Provider>
	)
}

export const usePasswordGenerator = () => {
	return useContext(PasswordGeneratorContext)
}
