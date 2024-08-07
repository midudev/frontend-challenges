import React from 'react'
import css from './button.module.css'
import cls from '../../helpers/classnames'

export default function Button({ type, ...props }) {
	return (
		<button className={cls(css.button, { [css.ghost]: type === 'ghost' })} {...props}>
			{props.children}
			{props.text}
		</button>
	)
}
