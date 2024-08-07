import React from 'react'
import { Icon } from './Icon.jsx'

export const OutputSection = ({ response, save: saveToClipboard }) => {
	return (
		<div className={'fedmg-output-section' + (response.status ? '-success' : '')}>
			<span className='fedmg-password-response'>{response.password}</span>
			<button className='fedmg-clipboard-button' onClick={saveToClipboard}>
				<Icon state={response.status} />
			</button>
		</div>
	)
}
