import React from 'react'

export default function PasswordLength({ length }) {
	return (
		<div className=''>
			<span>Character Length</span>
			<span className='float-right text-base font-bold'>{length}</span>
		</div>
	)
}
