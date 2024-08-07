import React from 'react'

export const Component = ({ children }) => {
	return (
		<div className='w-1/2 h-1/2 bg-white rounded-md bg-opacity-25 shadow-lg backdrop-blur-sm flex flex-col justify-evenly'>
			{children}
		</div>
	)
}
