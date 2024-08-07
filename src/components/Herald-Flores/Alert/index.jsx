import React from 'react'

const Alert = ({ type, text, id }) => {
	const alertType = {
		success:
			'hidden p-4 mb-4 text-sm rounded-lg text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
		warning:
			'hidden p-4 mb-4 text-sm rounded-lg text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800'
	}
	const alertClass = alertType[`${type}`]
	console.log()

	return (
		<div id={id} className={alertClass} role='alert'>
			<svg
				aria-hidden='true'
				className='flex-shrink-0 inline w-5 h-5 mr-3'
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
					clip-rule='evenodd'
				></path>
			</svg>
			<span className='sr-only'>{type}</span>
			<div>{text}</div>
		</div>
	)
}

export default Alert
