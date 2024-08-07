import React, { useState } from 'react'
import './App.css'

export default function App() {
	const [passLength, setPassLength] = useState(8)
	const [password, setPassword] = useState('********')

	const generatePassword = (length) => {
		const charList =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!”#$%&\'()*+,-./:;<=>?@[]^_`{|}~'
		let password = ''
		for (let i = 0; i < length; i++) {
			password += charList.charAt(Math.floor(Math.random() * charList.length))
		}
		setPassword(password)
	}

	const copyToClipboard = () => {
		if (password.length === 0) {
			alert('Select your desired password length and click "Generate Password"')
		}

		navigator.clipboard.writeText(password)
		alert('Copied to clipboard')
	}

	return (
		<div id='zerok1986-box'>
			<div id='zerok1986-password-generator'>
				<h1 id='zerok1986-title'>zerok1986's Password Generator</h1>
				<div id='zerok1986-password-box'>
					<p id='zerok1986-password-text'>{password}</p>
					<button onClick={copyToClipboard}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='24px'
							viewBox='0 0 24 24'
							width='24px'
							fill='#fff'
						>
							<path d='M0 0h24v24H0z' fill='none' />
							<path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
						</svg>
					</button>
				</div>
				<div id='zerok1986-settings'>
					<label htmlFor='length'>Length</label>
					<input
						type='range'
						id='zerok1986-length-slider'
						value={passLength}
						onChange={(e) => {
							setPassLength(e.target.value)
						}}
						min='6'
						max='24'
						step='1'
					/>
					<span>{passLength}</span>
					<button id='zerok1986-generate-button' onClick={() => generatePassword(passLength)}>
						Generate Password
					</button>
				</div>
			</div>
		</div>
	)
}
