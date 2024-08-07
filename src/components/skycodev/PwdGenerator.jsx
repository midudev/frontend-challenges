import { useState } from 'react'
import './PwdGenerator.css'
import CopyIcon from './CopyIcon'

const defaultPassword = 'Password'
const defaultLength = 6
const CHARSET =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~'

const PasswordGenerator = () => {
	const [password, setPassword] = useState(defaultPassword)
	const [length, setLength] = useState(defaultLength)
	const [showCopied, setShowCopied] = useState(false)

	const generatePassword = () => {
		let pwd = ''
		for (let i = 0; i < length; i++) {
			pwd += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length))
		}
		setPassword(pwd)
		return pwd
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(password)
		setShowCopied(true)
		setTimeout(() => {
			setShowCopied(false)
		}, 2000)
	}

	return (
		<section id='skycodev-main'>
			<div className='skycodev-container'>
				<h1 className='skycodev-title'>Password Generator</h1>
				<input
					className='skycodev-range'
					type='range'
					min={3}
					max={25}
					value={length}
					onChange={(e) => setLength(e.target.value)}
				/>
				<div className='skycodev-rangeNum'>
					<p> {length} </p>
				</div>

				<div className='skycodev-pass-box'>
					<input className='skycodev-pass-input' type='text' value={password} disabled />

					<button className='skycodev-copy-btn' onClick={handleCopy}>
						<CopyIcon />
					</button>
				</div>

				<button className='skycodev-pass-generate' onClick={generatePassword}>
					Generate Password
				</button>

				<div className='skycodev-notification' style={{ opacity: showCopied ? 1 : 0 }}>
					password copied to clipboard!!
				</div>
			</div>
		</section>
	)
}

export default PasswordGenerator
