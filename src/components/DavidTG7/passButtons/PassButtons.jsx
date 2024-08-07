import React, { useEffect, useState } from 'react'
import './buttonStyles.css'

export let chars = ''

export const PassButtons = () => {
	const [numbers, setNumbers] = useState(false)
	const [letters, setLetters] = useState(true)
	const [symbols, setSymbols] = useState(false)

	const handlePasswordSet = () => {
		chars = ''

		const control = {
			numbers: {
				isActive: numbers,
				set: '0123456798'
			},
			letters: {
				isActive: letters,
				set: 'ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
			},

			symbols: {
				isActive: symbols,
				set: '~`!@#$%^&*()_-+=[]{}:;"/>?<,.*'
			}
		}

		Object.keys(control).forEach((item) => {
			if (control[item].isActive) chars = chars + control[item].set
		})

		console.log('myChars', chars)
	}

	useEffect(() => {
		handlePasswordSet()
	}, [numbers, letters, symbols])

	return (
		<div id='dtg-buttons-pass-wrapper'>
			<button
				className={`dtg-buttons-pass ' ${symbols ? 'dtg-buttons-active' : ''}`}
				onClick={() => {
					setSymbols(!symbols)
				}}
			>
				SYMBOLS
			</button>
			<button
				className={`dtg-buttons-pass ' ${numbers ? 'dtg-buttons-active' : ''}`}
				onClick={() => {
					setNumbers(!numbers)
				}}
			>
				NUMBERS
			</button>
			<button
				className={`dtg-buttons-pass ' ${letters ? 'dtg-buttons-active' : ''}`}
				onClick={() => {
					setLetters(!letters)
				}}
			>
				LETTERS
			</button>
		</div>
	)
}
