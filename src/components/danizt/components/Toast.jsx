import React from 'react'

const Toast = (props) => {
	return (
		<div
			className={`mt-6 transition-opacity duration-1000 ${
				props.showToast ? 'opacity-1' : 'opacity-0'
			} flex items-center p-4 space-x-4 w-full max-w-xs bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800`}
			role='alert'
		>
			<div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-cyan-500 bg-cyan-100 rounded-lg dark:bg-cyan-500 dark:text-cyan-200'>
				<svg
					aria-hidden='true'
					className='w-5 h-5'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
						clipRule='evenodd'
					></path>
				</svg>
				<span className='sr-only'>Check icon</span>
			</div>
			<div className='pl-4 text-sm font-normal text-white'>{props.text}</div>
		</div>
	)
}

export default Toast
