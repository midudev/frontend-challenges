import React from 'react'

interface Props {
	children: React.ReactNode
}

const CardContainer = ({ children }: Props) => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='bg-opacity-50 bg-gray-100 rounded-2xl m-2 p-8 lg:w-1/3 md:w-1/3 w-11/12'>
				{children}
			</div>
		</div>
	)
}

export default CardContainer
