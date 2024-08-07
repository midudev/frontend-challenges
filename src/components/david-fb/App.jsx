import React, { useState, useEffect } from 'react'

import InputRange from './InputRange'
import Toaster from './toaster'
import Footer from './footer'

import ListIcon from './icons/ListIcon'
import SaveIcon from './icons/SaveIcon'
import CopyIcon from './icons/CopyIcon'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'
import CloseButton from './icons/CloseIcon'
import ClearIcon from './icons/ClearIcon'

import { generatePassword, getPasswordLevel } from './utils'
import { PASSWORD_MIN, PASSWORD_MAX, INPUT_STEPS, OPTIONS } from './constants'
import './App.css'

export default function App() {
	const [passwordlength, setPasswordLength] = useState(PASSWORD_MIN)
	const [password, setPassword] = useState('')
	const [passwordLevel, setPasswordLevel] = useState('')
	const [checkboxes, setCheckboxes] = useState(OPTIONS)
	const [toasts, setToasts] = useState([])
	const [mainView, setMainView] = useState(true)
	const [myPasswords, setMyPasswords] = useState([])

	const handleCheckboxChange = (evt, id) => {
		const changes = checkboxes.map((obj) => {
			if (obj.id === id) {
				return { ...obj, status: evt.target.checked }
			}
			return obj
		})
		setCheckboxes(changes)
	}

	const handleGeneratePassword = () => {
		const characters = checkboxes.reduce((acc, obj) => {
			if (obj.status) {
				acc = acc.concat(obj.characters)
			}
			return acc
		}, [])
		if (!characters.length) {
			addToast({
				message: 'You have to select at least one option!',
				duration: 4
			})
			return
		}
		const newPassword = generatePassword(passwordlength, characters)
		setPassword(newPassword)
	}

	const handleCopy = (evt, payload) => {
		if (payload || password) {
			let toCopy = payload || password
			navigator.clipboard.writeText(toCopy)
			addToast({
				message: 'Copied to Clipboard!',
				duration: 2
			})
		}
	}

	const handleSave = () => {
		if (password && !myPasswords.includes(password)) {
			setMyPasswords((state) => [...state, password])
			addToast({
				message: 'Password Saved!',
				duration: 2
			})
		}
	}

	const handleDelete = (payload) => {
		setMyPasswords((state) => state.filter((elem) => elem !== payload))
	}

	const clearAllPasswords = () => {
		setMyPasswords([])
	}

	const addToast = (payload) => {
		const id = Date.now()

		const newToast = {
			id,
			...payload,
			onClose: () => setToasts((state) => state.filter((obj) => obj.id !== id))
		}

		setToasts((state) => [newToast, ...state])
	}

	const handleView = () => {
		setMainView(!mainView)
	}

	useEffect(() => {
		if (password) {
			const level = getPasswordLevel(password)
			setPasswordLevel(level)
		}
	}, [password])

	return (
		<main className='david-fb__main'>
			<div className='david-fb__main-bg-effect'>
				<Toaster toasts={toasts} />
				<a className='david-fb__main__back' href='/'>
					<ArrowLeft /> Back to home
				</a>
				<h1 className='david-fb__title'>Password Generator</h1>
				<article className='david-fb__container'>
					<div className='david-fb__content-wrapper'>
						{/* Password Generator */}
						<section
							className={`david-fb__password-generator ${
								mainView ? '' : 'david-fb__hide-generator'
							}`}
						>
							<header className='david-fb__password'>
								<hgroup>
									<div className='david-fb__password-input'>
										<input
											type='text'
											id='PasswordInput'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<button
											className='david-fb__hide-mobile'
											title='Copy Password'
											onClick={handleCopy}
										>
											<CopyIcon size={51} color={'#40B852'} />
										</button>
									</div>
									<button
										className='david-fb__hide-mobile'
										onClick={handleSave}
										title='Save Password'
									>
										<SaveIcon />
									</button>
									<div className='david-fb__mobile-copy'>
										<button title='Copy Password' onClick={handleCopy}>
											<CopyIcon size={51} color={'#40B852'} />
										</button>
										<button onClick={handleSave} title='Save Password'>
											<SaveIcon />
										</button>
									</div>
								</hgroup>
								<p>{passwordLevel}</p>
							</header>

							<InputRange
								min={PASSWORD_MIN}
								max={PASSWORD_MAX}
								steps={INPUT_STEPS}
								value={passwordlength}
								handleValueChange={setPasswordLength}
							/>

							<section className='david-fb__checkboxes'>
								{checkboxes.map((cb) => (
									<label className='david-fb__customCheckbox' key={cb.id}>
										<input
											type='checkbox'
											checked={cb.status}
											onChange={(evt) => handleCheckboxChange(evt, cb.id)}
										/>
										<span className='david-fb__checkmark'></span>
										<span>{cb.title}</span>
									</label>
								))}
							</section>
						</section>
						{/* Password List */}
						<section
							className={`david-fb__my-passwords ${mainView ? 'david-fb__hide-passwords' : ''}`}
						>
							<header>
								<h2 className='david-fb__my-passwords__title'>Password List</h2>
								<button onClick={clearAllPasswords} title='Clear all'>
									<ClearIcon />
								</button>
							</header>
							<div className='david-fb__my-passwords__cards'>
								{myPasswords.map((item, index) => (
									<section className='david-fb__my-passwords__card' key={`myPassword-${index}`}>
										<p>{item}</p>
										<div>
											<button title='Copy' onClick={(e) => handleCopy(e, item)}>
												<CopyIcon size={28} color={'#fff'} />
											</button>
											<button title='Delete' onClick={() => handleDelete(item)}>
												<CloseButton />
											</button>
										</div>
									</section>
								))}
							</div>
						</section>
					</div>
					{/* Generate and toggle view buttons */}
					<section className='david-fb__control'>
						<button className='david-fb__generate' onClick={handleGeneratePassword}>
							Generate <ArrowRight />
						</button>
						<button onClick={handleView} className='david-fb__password-list'>
							<ListIcon />
						</button>
					</section>
				</article>
				<Footer />
			</div>
		</main>
	)
}
