import React, { useState } from 'react'
import Clipboard from './clipboard'
import './styles.css'

export default function Card() {
	const [password, setPassword] = useState('⬆️ Select the power of the password ⬆️')
	const [passwordLength, setPasswordLength] = useState(15)

	const [copiedText, setCopiedText] = useState('')

	const generateHandler = () => {
		let passwordCreated = ''

		const characters = [
			'qwertyuiopasdfghjklzxcvbnm',
			'QWERTYUIOPASDFGHJKLZXCVBNM',
			'1234567890',
			'`~!@#$%%^&*()-_=+[{]};:",<.>/?'
		]
		while (passwordCreated.length < passwordLength) {
			const positionArray = Math.floor(Math.random() * characters.length)
			const positionString = Math.floor(Math.random() * characters[positionArray].length)
			passwordCreated += characters[positionArray][positionString]
		}
		setPassword(passwordCreated)
	}

	const copyButtonHandler = () => {
		navigator.clipboard.writeText(password)
		// Writing message
		setCopiedText('Copied!')

		setTimeout(() => {
			setCopiedText('')
		}, 3000)
	}

	return (
		<div id='mrvega01'>
			<div className='card'>
				<h3>Random password generator!</h3>
				<input type='range' className='rangeInput' min='5' max='25' value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}></input>
				<span>{passwordLength}</span>
				<div className='copySection'>
					<input type='text' value={password} className='textInput' readOnly></input>
					<button onClick={copyButtonHandler} className='button copyButton'>{copiedText}<Clipboard/></button>
				</div>
				<button onClick={generateHandler} className='button generateButton'>Generate</button>
			</div>
		</div>
	)
}
// <div className='notification' style={notifyStyle}>Password copied!</div>