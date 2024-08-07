import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import generatePassword from '../helpers/generatePassword.js'
import { Button, TextInput, OptIns, Slider, Toast } from '../components'

const initialOptions = [
	{
		id: 'uppercase',
		title: 'Uppercase',
		description: 'Include uppercase characters in your password',
		value: true
	},
	{
		id: 'lowercase',
		title: 'Lowercase',
		description: 'Include lowercase characters in your password',
		value: true
	},
	{
		id: 'numbers',
		title: 'Numbers',
		description: 'Include numbers characters in your password',
		value: false
	},
	{
		id: 'special_characters',
		title: 'Special Characters',
		description: 'Include special characters in your password',
		value: false
	}
]

const generatorChars = {
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	numbers: '0123456789',
	special_characters: '!@#$%^&*()[]'
}

export default function PasswordGenerator() {
	const toastRef = useRef()
	const [options, setOptions] = useState(initialOptions)
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(16)

	const handleGeneratePassword = (options, passwordLength) => {
		let chars = ''

		options.forEach(option => {
			const { id, value: isEnabled } = option
			if (isEnabled) chars += generatorChars[id]
		})
		const pw = generatePassword(chars, passwordLength)
		setPassword(pw)
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(password).then(
			() => toastRef.current.displayToast('Password copied to clipboard')
		)
	}

	const updateOptionValues = useCallback(
		(arrIndex, key, newValue) => {
			const updatedOptions = options.map((option, index) => {
				if (arrIndex === index) {
					return { ...option, [key]: newValue }
				}
				return option
			})
			setOptions(updatedOptions)
		},
		[options]
	)

	useEffect(() => {
		handleGeneratePassword(options, passwordLength)
	}, [options, passwordLength])

	return (
		<>
			<Toast ref={toastRef} />
			<div className={styles.generatorWrapper}>
				<h2>Password Generator</h2>
				<TextInput value={password} placeholder='Generated password...' onCopy={handleCopy} />
				<Slider {...{ passwordLength, setPasswordLength }} title='Select password length'/>
				<OptIns title={'Password generation opt-ins'} {...{ options, updateOptionValues }} />
				<Button onClick={() => handleGeneratePassword(options, passwordLength)}>Generate Password</Button>
			</div>
		</>
	)
}
