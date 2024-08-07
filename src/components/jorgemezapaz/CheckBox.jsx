import React from 'react'

export const CheckBox = ({ name, text, isChecked, handler }) => {
	return (
		<div>
			<input type='checkbox' id={name} checked={isChecked} onChange={handler} />
			&nbsp;&nbsp;{text}
		</div>
	)
}
