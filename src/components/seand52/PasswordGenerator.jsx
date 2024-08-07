import React, { useEffect, useState } from 'react'
import { Copy } from './Copy'
import './styles.css'

const DEFAULT_PASSWORD_LENGTH = 6
export const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(DEFAULT_PASSWORD_LENGTH)
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [copySuccess, setCopySuccess] = useState(false)

	useEffect(() => {
		handleGeneratePassword()
	}, [])
	const handlePasswordLengthChange = (e) => {
		setPasswordLength(e.target.value)
	}

	const handleGeneratePassword = () => {
		const lettersAndSymbols =
			'0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		let password = ''
		for (let i = 0; i < passwordLength; i++) {
			const randomIndex = Math.floor(Math.random() * lettersAndSymbols.length)
			const randomCharacter = lettersAndSymbols[randomIndex]
			password += randomCharacter
		}
		setGeneratedPassword(password)
	}

	const handleCopyPassword = () => {
		if (!generatedPassword.length) {
			return
		}
		navigator.clipboard
			.writeText(generatedPassword)
			.then(() => {
				setCopySuccess(true)
				setTimeout(() => {
					setCopySuccess(false)
				}, 2000)
			})
			.catch(() => {
				setCopySuccess(false)
			})
	}
	return (
		<div className='seand52-container'>
			<div className='seand52-password-display'>
				{generatedPassword}
				<button className='seand52-copy-icon' onClick={handleCopyPassword}>
					<Copy />
				</button>
			</div>
			<label>Length: {passwordLength}</label>
			<input
				type='range'
				min='1'
				max='20'
				defaultValue={passwordLength}
				onChange={handlePasswordLengthChange}
				onPointerUp={handleGeneratePassword}
			></input>
			<button className='seand52-generate-btn' onClick={handleGeneratePassword}>
				Generate Password
			</button>
			{copySuccess && <p className='seand52-message-success'>Copied to clipboard!</p>}
		</div>
	)
}
