import { useState } from 'react'
import './style.css'
import SvgCopy from './SvgCopy'
import genPassword from './genPassword'

const PassGenerator = () => {
	const [password, setPassword] = useState('')
	const [configPassword, setConfigPassword] = useState({
		length: 3,
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false
	})
	const [showMessageEmpty, setShowMessageEmpty] = useState(false)
	const [showMessageCopy, setShowMessageCopy] = useState(false)

	const handlerGenerateButton = () => {
		setPassword(genPassword(configPassword))
		setShowMessageEmpty(true)
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)
		setShowMessageCopy(true)
		setTimeout(() => setShowMessageCopy(false), 2000)
	}

	return (
		<section id='Jjat00' className='password-container'>
			{password.length === 0 && showMessageEmpty && (
				<div className='message'>
					<p>Select some case ⚠️</p>
				</div>
			)}
			{password.length !== 0 && showMessageCopy && (
				<div className='message'>
					<p>Password copied ✅😀</p>
				</div>
			)}
			<h1 className='title'>Passoword Generator</h1>
			<div className='password'>
				<p>{password}</p>
				<span onClick={copyPassword}>
					<SvgCopy fill='#35e679' />
				</span>
			</div>
			<div className='password-confing'>
				<div className='length'>
					<p>Character length</p>
					<span>{parseInt(configPassword.length) + 1}</span>
				</div>
				<div className='slide-length'>
					<input
						type='range'
						min='3'
						max='14'
						value={configPassword.length}
						className='slider'
						onChange={(e) => setConfigPassword({ ...configPassword, length: e.target.value })}
						id='length'
					/>
				</div>
				<section>
					<div className='password-details'>
						<input
							type='checkbox'
							name='uppercase'
							onChange={() =>
								setConfigPassword({ ...configPassword, uppercase: !configPassword.uppercase })
							}
						/>
						<label htmlFor='uppercase'>Include Uppercase Letters</label>
					</div>
					<div className='password-details'>
						<input
							type='checkbox'
							name='lowercase'
							onChange={() =>
								setConfigPassword({ ...configPassword, lowercase: !configPassword.lowercase })
							}
						/>
						<label htmlFor='lowercase'>Include Lowercase Letters</label>
					</div>
					<div className='password-details'>
						<input
							type='checkbox'
							name='numbers'
							onChange={() =>
								setConfigPassword({ ...configPassword, numbers: !configPassword.numbers })
							}
						/>
						<label htmlFor='numbers'>Include Numbers</label>
					</div>
					<div className='password-details'>
						<input
							type='checkbox'
							name='symbols'
							onChange={() =>
								setConfigPassword({ ...configPassword, symbols: !configPassword.symbols })
							}
						/>
						<label htmlFor='symbols'>Include Symbols</label>
					</div>
				</section>
				<button className='btn-generate' onClick={handlerGenerateButton}>
					Generate
				</button>
			</div>
		</section>
	)
}

export default PassGenerator
