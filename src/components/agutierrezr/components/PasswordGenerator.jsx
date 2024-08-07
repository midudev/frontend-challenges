import React, { useReducer, useState } from 'react'

import { colorPassword, generatePassword } from '../helpers/'
import { copyToClipboard } from '../utils'
import { passwordReducer } from '../reducers/passwordReducer'

import { CopyIcon, RefreshIcon } from './icons'
import { Slider, Toggle } from './fields'

const initialConfig = { lower: true, upper: false, number: false, symbol: false, length: 10 }
const firstPassword = generatePassword(initialConfig)

const PasswordGenerator = () => {
	const [config, dispatch] = useReducer(passwordReducer, initialConfig)
	const [password, setPassword] = useState(firstPassword)
	const [showMessage, setShowMessage] = useState(false)
	const [showHistory, setShowHistory] = useState(false)
	const [history, setHistory] = useState([firstPassword])

	const handleSubmit = (e) => {
		e.preventDefault()
		const passwordGenerated = generatePassword(config)

		setPassword(passwordGenerated)
		setHistory([passwordGenerated, ...history])
	}

	const handleCopyPass = () => {
		copyToClipboard(password)
		setShowMessage(true)
		setTimeout(() => {
			setShowMessage(false)
		}, 2500)
	}

	return (
		<div className='agutierrezr__site'>
			<div className='agutierrezr__app-container'>
				<div className='agutierrezr__app-main'>
					{!showHistory && (
						<form onSubmit={handleSubmit}>
							<section className='agutierrezr__section agutierrezr__section--password'>
								<div className='agutierrezr__label'>Generated Password</div>
								<div className='agutierrezr__box agutierrezr__box--password'>
									<div
										className='agutierrezr__password'
										dangerouslySetInnerHTML={{ __html: colorPassword(password) }}
									/>
									<div className='agutierrezr__controls'>
										<button type='submit'>
											<RefreshIcon />
										</button>
										<button type='button' onClick={handleCopyPass}>
											<CopyIcon />
										</button>
									</div>
								</div>
								{showMessage && (
									<span className='agutierrezr__copy-message'>Password copied!!!</span>
								)}
							</section>
							<section className='agutierrezr__section'>
								<div className='agutierrezr__label'>Length: {config.length}</div>
								<div className='agutierrezr__box'>
									<Slider
										value={config.length}
										onChange={({ target }) => dispatch({ type: 'length', payload: target.value })}
										min={5}
										max={128}
									/>
								</div>
							</section>
							<section className='agutierrezr__section'>
								<div className='agutierrezr__label'>Settings</div>
								<div className='agutierrezr__box'>
									<Toggle
										label='Include lowercase letters'
										id='lower'
										name='lower'
										checked={config.lower}
										onChange={() => dispatch({ type: 'lower' })}
									/>
								</div>
								<div className='agutierrezr__box'>
									<Toggle
										label='Include uppercase letters'
										id='upper'
										name='upper'
										checked={config.upper}
										onChange={() => dispatch({ type: 'upper' })}
									/>
								</div>
								<div className='agutierrezr__box'>
									<Toggle
										label='Include numbers'
										id='numbers'
										name='numbers'
										checked={config.number}
										onChange={() => dispatch({ type: 'number' })}
									/>
								</div>
								<div className='agutierrezr__box'>
									<Toggle
										label='Include symbols (!@#$%^&*)'
										id='symbol'
										name='symbol'
										checked={config.symbol}
										onChange={() => dispatch({ type: 'symbol' })}
									/>
								</div>
							</section>
						</form>
					)}
					{showHistory && (
						<>
							<div className='agutierrezr__label'>History</div>
							{history.map((pwd, index) => (
								<div key={index} className='agutierrezr__box agutierrezr__box--history'>
									<div
										className='agutierrezr__password'
										dangerouslySetInnerHTML={{ __html: colorPassword(pwd) }}
									/>
									<div className='agutierrezr__controls'>
										<button type='button' onClick={() => copyToClipboard(pwd)}>
											<CopyIcon />
										</button>
									</div>
								</div>
							))}
						</>
					)}
				</div>
				<nav className='agutierrezr__app-navigation'>
					<button
						className={!showHistory ? 'active' : undefined}
						type='button'
						onClick={() => setShowHistory(false)}
					>
						Generator
					</button>
					<button
						className={showHistory ? 'active' : undefined}
						type='button'
						onClick={() => setShowHistory(true)}
					>
						History
					</button>
				</nav>
			</div>
		</div>
	)
}

export default PasswordGenerator
