import { useState } from 'react'

const UsePassword = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(20)
	const [copied, setCopied] = useState('')

	const getRandomValidUnicode = () => {
		return Math.floor(Math.random() * (126 - 33) + 33)
	}

	const getNewPassword = () => {
		const arrayCodes = Array.from({ length: passwordLength }, () => getRandomValidUnicode())

		return String.fromCharCode(...arrayCodes)
	}

	const handleGetPassword = () => {
		const newPassword = getNewPassword()

		setPassword(newPassword)
		setCopied('')
	}

	const handleCopyToClipboard = () => {
		if (password !== '') {
			navigator.clipboard.writeText(password)
			setCopied('Password copied to clipboard!')
		} else {
			setCopied('Password not generated yet!')
		}
	}

	return {
		password,
		passwordLength,
		copied,
		setPasswordLength,
		handleGetPassword,
		handleCopyToClipboard
	}
}

export default UsePassword
