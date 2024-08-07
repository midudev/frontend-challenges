import React from 'react'
import Toast from '../toast'
import './style.css'

export default function Toaster({ toasts }) {
	return (
		<div className='david-fb__toaster'>
			{toasts.map((alert) => (
				<Toast
					key={`Toast-${alert.id}`}
					message={alert.message}
					time={alert.duration}
					closeAlert={alert.onClose}
				/>
			))}
		</div>
	)
}
