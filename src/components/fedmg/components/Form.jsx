import React, { useState } from 'react'
import { responses } from '../response.js'
import { getPassword } from '../functionals/getPassword.js'
import { copyPassword } from '../functionals/copyPass.js'
import { InputSection } from './InputSection.jsx'
import { OutputSection } from './OutputSection.jsx'
import { ControlSection } from './ControlSection.jsx'

export const Form = () => {
	const [range, setRange] = useState(10)
	const [response, setResponse] = useState(responses)

	const getRange = (e) => {
		setRange(e.target.value)
		setResponse({ ...responses, password: response.password })
	}

	const generatePass = () => {
		setResponse({
			...responses,
			password: getPassword(range)
		})
	}

	const saveToClipboard = () => {
		if (response.password) {
			copyPassword(response.password)
			return setResponse({
				...response,
				status: true,
				message: 'Copied to the clipboard successfully!'
			})
		}

		setResponse({
			...response,
			message: 'There is no password to save!'
		})
	}

	return (
		<div className='fedmg-form'>
			<InputSection handler={getRange} state={range} />
			<OutputSection response={response} save={saveToClipboard} />
			<ControlSection response={response} handler={generatePass} />
		</div>
	)
}
