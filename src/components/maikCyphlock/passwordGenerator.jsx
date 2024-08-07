import React, { useState } from 'react'

function passwordGenerator() {
	const [rangeValue, setRangeValue] = useState(8)
	const [passwordGenerated, setPasswordGenerated] = useState('')
	const [isCopied, setIsCopied] = useState('copy to the clipboard')
	const inputSliderHandler = (event) => {
		setRangeValue(event.target.value)
	}
	const ClipboardHandler = (text) => {
		setIsCopied('copied ✅')
		setTimeout(() => {
			setIsCopied('copy to the clipboard')
		}, 1000)
		return navigator.clipboard.writeText(text)
	}
	const uuid = (length) => {
		let result = ''

		const SpecialCaracter = ['@', '#', '*', '$', '~', '&', '/', '(', ')', '?', '¿', 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w', 'q', 'z', 'x', 'v', 'n', 'm', 1, 2, 3, 4, 5, 6, 7, 8, 9]

		for (let i = 0; i < length; i++) {
			const x = Math.floor(Math.random() * (SpecialCaracter.length - 1))
			result += SpecialCaracter[x]
		}

		return setPasswordGenerated(result)
	}

	return (
		<div id='maikcyphlock'>
			<h1 id='landing-heading'>Password generator</h1>
			<div id='btn-container'>
				<input type='text' id='generate-output' readOnly defaultValue={passwordGenerated}/>
				<button id='copy-btn' data-tooltip={isCopied} onClick={() => ClipboardHandler(passwordGenerated)}><img src='/copyIcon.svg' width={32}></img></button>
			</div>


			<label htmlFor='output' id='generate-output-label'> length of password: {rangeValue}</label>
			<input type='range' value={rangeValue} name='output' min='8' max='100' onChange={(e) => inputSliderHandler(e)} id='slider'></input>

			<button id='generate-btn' onClick={() => uuid(rangeValue)}>Generate</button>


		</div>
	)
}

export default passwordGenerator
