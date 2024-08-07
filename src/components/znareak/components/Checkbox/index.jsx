import React from 'react'
import css from './checkbox.module.css'

export default function Checkbox(props) {
	return (
		<label className={css.container}>
			<input checked='checked' type='checkbox' {...props} />
			<div className={css.checkmark}></div>
		</label>
	)
}
