import React from 'react'

const NewPassBnt = ({ handlePass }) => {
	return (
		<div className='ovalle98-column-center ovalle98-ptb'>
			<button className='ovalle98-button-75' onClick={handlePass}>
				<span className='ovalle98-text ovalle98-span'>New Password</span>
			</button>
		</div>
	)
}

export default NewPassBnt