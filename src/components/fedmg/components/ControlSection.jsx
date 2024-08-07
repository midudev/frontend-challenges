import React from 'react'

export const ControlSection = ({ response, handler: generatePass }) => {
	return (
		<div className='fedmg-control-section'>
			<div className='fedmg-message-container'>
				<span className={'fedmg-message-' + (response.status ? 'success' : 'wrong')}>
					{response.message}
				</span>
			</div>
			<button className='fedmg-generate-button' onClick={generatePass}>
				Generate
			</button>
		</div>
	)
}
