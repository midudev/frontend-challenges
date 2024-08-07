import React from 'react'

const CopyButton = ({ text }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(text)
	}

	return (
		<button
			className='flex items-center py-2 px-3 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white copy-to-clipboard-button hover:bg-gray-700 active:bg-gray-600 focus:outline-none'
			onClick={copyToClipboard}
		>
			<svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'></path>
			</svg>
			<span className='copy-text'>Copy</span>
		</button>
	)
}

export default CopyButton
