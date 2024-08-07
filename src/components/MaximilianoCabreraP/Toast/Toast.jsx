import React from 'react'
import './toast.css'

const Toast = ({ showToast }) => {
	const toastClass = showToast === 1 ? 'alert-toast' : ''
	return (
		<div
			className={`maximilianocabrerap-${toastClass} opacity-0 inline-flex items-center ml-2 gap-2`}
		>
			<div className='inline-flex justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
				<svg aria-hidden='true' className='w-5 h-5' viewBox='0 0 20 20'>
					<path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
				</svg>
				<span className='sr-only'>Fire icon</span>
			</div>
			<div className=' text-sm font-normal'>Copied!</div>
		</div>
	)
}

export default Toast
