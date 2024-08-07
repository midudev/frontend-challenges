/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { randomLetter } from './constants'
import { safetyLightIndicator } from './helper'
import { CopyImage } from './images/CopyImage'
import { chars, PassButtons } from './passButtons/PassButtons'
import './styles.css'

const App = () => {
	const [password, setPassword] = useState('')
	const [inputRange, setInputRange] = useState(5)
	const [copyStatus, setCopyStatus] = useState(false)
	const [lightIndicator, setLightIndicator] = useState('')
	const [noneButton, setNoneButton] = useState(false)

	const handleNewPassword = (passLength) => {
		if (!chars) {
			setNoneButton(true)
			return
		}
		let newPassword = ''
		for (let i = 0; i < passLength; i++) {
			newPassword += randomLetter(chars)
		}
		setPassword(newPassword)

		if (inputRange < 8) {
			setLightIndicator(safetyLightIndicator.low)
		} else if (inputRange < 12) {
			setLightIndicator(safetyLightIndicator.medium)
		} else {
			setLightIndicator(safetyLightIndicator.high)
		}
	}

	const handleRange = (e) => {
		setInputRange(e.target.value)
		if (!password.length) {
			setLightIndicator(safetyLightIndicator.off)
		} else if (e.target.value < 8) {
			setLightIndicator(safetyLightIndicator.low)
		} else if (e.target.value < 12) {
			setLightIndicator(safetyLightIndicator.medium)
		} else {
			setLightIndicator(safetyLightIndicator.high)
		}
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(password)
		setCopyStatus(true)
		setTimeout(() => {
			setCopyStatus(false)
		}, 5000)
	}

	// let lightIndicator = ''

	return (
		<div id='dtg-mainwrapper'>
			{noneButton ? (
				<div id='dtg-non-button'>
					<p>At least one option must be activated</p>
					<button onClick={() => setNoneButton(false)}>OK</button>
				</div>
			) : null}
			<h1 id='dtg-title'>Pass Generator</h1>
			<div id='dtg-light-left' />
			<p id='dtg-neon-text'>Neon</p>
			<div id='dtg-coreapp-wrapper'>
				<p className={`dtg-password-text ${password.length ? 'dtg-password-text-active' : ''}`}>
					{password}
				</p>
				{copyStatus && <span id='dtg-copied-active'>Copied</span>}
				{password.length ? (
					<button id='dtg-copybutton' onClick={handleCopy}>
						<CopyImage />
					</button>
				) : null}
				<input
					type='range'
					className={'dtg-inputrange ' + lightIndicator}
					onChange={handleRange}
					value={inputRange}
					max='18'
					min='5'
				/>
				<p id='dtg-inputrange'>Length = {inputRange}</p>
				<button onClick={() => handleNewPassword(inputRange)} id='dtg-button-password'>
					New password
				</button>
				<PassButtons />
			</div>
		</div>
	)
}

export default App
