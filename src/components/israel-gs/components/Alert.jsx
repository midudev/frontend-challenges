import React, { useEffect } from 'react'

export default function Alert({ show, setShow, message, type }) {
	useEffect(() => {
		if (show) {
			setTimeout(() => {
				setShow(false)
			}, 2000)
		}
	}, [show])

	const alertType = type === 'error' ? 'bg-red-500' : 'bg-green-500'

	return (
		<div className='h-20 flex justify-center items-center'>
			<div className={`${alertType} px-4 py-2 rounded-md ${!show && 'opacity-0'}`}>
				<h1 className='text-black'>{message}</h1>
			</div>
		</div>
	)
}
