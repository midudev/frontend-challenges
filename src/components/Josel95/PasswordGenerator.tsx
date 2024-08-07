import { useState } from 'react'

import { generatePassword } from './utils/generatePassword'
import { Password } from './Password'
import { Range } from './Range'

export const PasswordGenerator = () => {
	const [passwordGenerated, setPasswordGenerated] = useState('')
	const [passwordLength, setPasswordLength] = useState(10)
	const [loading, setLoading] = useState(false)

	const handlePasswordGenerate = () => {
		setLoading(true)
		const interval = setInterval(() => {
			const password = generatePassword(passwordLength)
			setPasswordGenerated(password)
		}, 50)

		setTimeout(() => {
			setLoading(false)
			clearInterval(interval)
		}, 1000)
	}

	const handleLengthChange = (value: number) => {
		setPasswordLength(value)
	}

	return (
		<div className='josel95-password-generator-container'>
			<h1 className='josel95-password-generator-title'>Password generator</h1>
			<Password value={passwordGenerated} blurred={loading}/>
			<Range value={passwordLength} onChange={handleLengthChange}/>
			<button className='josel95-password-generator-button' disabled={loading} onClick={handlePasswordGenerate}>Generate</button>
		</div>
	)
}