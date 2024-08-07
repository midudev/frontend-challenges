import { useState } from 'react'
import './styles.css'

const GeneratePassword = () => {
	const [password, setPassword] = useState('')
	const [range, setRange] = useState(1)
	const [alert, setAlert] = useState(false)

	const createPassword = (lenght) => {
		const chars =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!|@#~%&/()=¿?¡!<>^*[]{}-_.:;,'
		let password = ''
		for (let i = 0; i < lenght; i++) {
			password += chars[Math.floor(Math.random() * chars.length)]
		}
		return password
	}

	const onCopyText = (text) => {
		navigator.clipboard.writeText(text)
		setTimeout(() => {
			setAlert((state) => !state)
		}, '2000')
		setAlert((state) => !state)
	}

	const onRangeChange = ({ target }) => {
		setRange(target.value)
	}

	const onPasswordChange = (password) => {
		setPassword(password)
	}

	const onPasswordCreationClick = () => {
		onPasswordChange(createPassword(range))
	}

	return (
		<section id='waxer59'>
			<h1 className='header'>Create password</h1>

			<div className='alert' style={{ opacity: `${alert ? '1' : '0'}` }}>
				<p className='alert-text'>Text Copied!</p>
			</div>

			<div className='inputs-btns'>
				<div className='inputs'>
					<div className='textInput-copy'>
						<input type='text' className='passwordInput' readOnly value={password} />

						<button className='copy' onClick={() => onCopyText(password)}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#e0e0e0'>
								<path d='M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z' />
							</svg>
						</button>
					</div>

					<span className='range-label'>{range}</span>

					<input
						type='range'
						min='1'
						max='50'
						className='rangeInput'
						onChange={onRangeChange}
						value={range}
					/>
				</div>
				<button className='createPassword' onClick={onPasswordCreationClick}>
					Go!
				</button>
			</div>
		</section>
	)
}

export default GeneratePassword
