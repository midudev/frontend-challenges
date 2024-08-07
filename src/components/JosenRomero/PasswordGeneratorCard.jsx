import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import InputRange from './InputRange'
import Label from './Label'
import PasswordBox from './PasswordBox'
import { passwordGenerator } from './utils/utils.js'

const PasswordGeneratorCard = () => {
	const [passwordLength, setPasswordLength] = useState('6')
	const [password, setPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const handleGenerator = (event) => {
		event.preventDefault()
		const pw = passwordGenerator(Number(passwordLength))
		setPassword(pw)
		setIsCopied(false)
	}
	const copyToClipboard = (currentPassword) => {
		navigator.clipboard.writeText(currentPassword).then(() => setIsCopied(true))
	}
	return (
		<div className='p-6 m-2 bg-white rounded-xl text-center'>
			<Title>Password Generator</Title>
			<form onSubmit={(e) => handleGenerator(e)}>
				<div className='flex items-center mb-7 mt-7'>
					<Label htmlFor='pwLength'>
						Password Length: {passwordLength < 10 ? `0${passwordLength}` : passwordLength}
					</Label>
					<InputRange
						name='pwLength'
						min='4'
						max='21'
						value={passwordLength}
						onChange={(e) => setPasswordLength(e.target.value)}
					/>
				</div>
				<Button type='submit'>Random Password</Button>
			</form>
			<PasswordBox password={password} isCopied={isCopied} copyToClipboard={copyToClipboard} />
		</div>
	)
}

export default PasswordGeneratorCard
