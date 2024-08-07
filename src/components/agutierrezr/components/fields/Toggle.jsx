import React from 'react'

export const Toggle = ({ checked, onChange, label, id, name }) => {
	return (
		<div className='flex items-center justify-between'>
			<label htmlFor={id}>{label}</label>
			<input
				className='agutierrezr__toggle'
				type='checkbox'
				id={id}
				name={name}
				checked={checked}
				onChange={onChange}
			/>
		</div>
	)
}
