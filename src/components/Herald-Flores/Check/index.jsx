import React from 'react'

const Check = ({ id, text, checked }) => {
	return (
		<label htmlFor={id} className='inline-flex relative items-center mb-4 cursor-pointer'>
			<input
				type='checkbox'
				value=''
				id={id}
				name={id}
				className='sr-only peer'
				defaultChecked={checked}
			/>
			<div className="w-11 h-6 bg-gray-400 rounded-full peer ring-2 dark:ring-blue-500 dark:peer-focus:ring-blue-600 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-blue-500 peer-checked:bg-blue-600"></div>
			<span className='ml-1.5 text-sm font-medium dark:text-white text-gray-900'>{text}</span>
		</label>
	)
}

export default Check
