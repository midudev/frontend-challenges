import { useRef, useState } from 'react'
import CopyIcon from './svg/CopyIcon'
import './styles.css'
import { generatePassword } from './utils/utils'

export default function PasswordGenerator () {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(10)
	const copiedSign = useRef(null)

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)
		copiedSign.current.style.opacity = '1'
		setTimeout(() => {
			copiedSign.current.style.opacity = '0'
		}, 3000)
	}

	const handleGenerate = () => {
		setPassword(generatePassword(passwordLength))
	}

	return (
		<section id='ceskkk'>
			<h1>PASSWORD GENERATOR</h1>
			<div className='password_field'>
				<input type='text' value={password} disabled />
				<button onClick={copyToClipboard}>
					<span ref={copiedSign}>Copied to clipboard</span>
					<CopyIcon />
				</button>
			</div>
			<div className='range_field'>
				<label>Length</label>
				<input
					type='range'
					min={8}
					max={20}
					defaultValue={passwordLength}
					onChange={(e) => setPasswordLength(e.target.value)}
				/>
				<output>{passwordLength}</output>
			</div>
			<button onClick={handleGenerate}>Generate</button>
		</section>
	)
}
