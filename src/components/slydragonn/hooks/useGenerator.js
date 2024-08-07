import { useState } from 'react'

const useGenerator = (
	initialConfig = {
		maxLength: 6
	}
) => {
	const [config, setConfig] = useState(initialConfig)
	const [password, setPassword] = useState('')
	const [chars, setPasswordChars] = useState('abcdefghijklmnopqrstuvwxyz')

	// Config Object
	const Config = {
		/**
		  Set password length
			@param number password length.
		*/
		setLength: (number) => {
			setConfig((config) => ({ ...config, maxLength: number }))
		},
		length: config.maxLength,
		/**
		  Set characthers for password generator
			@param string characther to include at password.
			@param boolean if include or remove characthers
		*/
		setChars: (newChars, include) => {
			if (include) {
				return setPasswordChars((chars) => chars + newChars)
			}
			const removedChars = chars.replace(newChars, '')
			return setPasswordChars(() => removedChars)
		}
	}

	const generatePassword = () => {
		let generatedPassword = ''

		for (let i = 0; i < config.maxLength; i++) {
			generatedPassword += chars[Math.floor(Math.random() * chars.length)]
		}
		setPassword(() => generatedPassword)
	}

	return [password, generatePassword, Config]
}

export default useGenerator
