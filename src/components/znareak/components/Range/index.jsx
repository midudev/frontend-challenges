import React from 'react'
import cls from '../../helpers/classnames'
import css from './range.module.css'

export default function Range({ className, ...props }) {
	return (
		<div className={css.slidecontainer}>
			<input type='range' min='10' max='40' className={cls(css.slider, className)} {...props} />
		</div>
	)
}
