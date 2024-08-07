import React from 'react'
import cls from '../../helpers/classnames'
import css from './input.module.css'

export default function Input({ className, children, ...props }) {
	return (
		<div className={css.container}>
			<input className={cls(css.input, className)} {...props} />
			<svg
				className={css.icon}
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				height='1em'
				width='1em'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
				<path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
			</svg>
			{children}
		</div>
	)
}
