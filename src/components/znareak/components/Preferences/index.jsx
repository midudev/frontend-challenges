import React from 'react'
import Checkbox from '../Checkbox'
import RangeInput from '../Range'
import css from './preferences.module.css'

function Preferences({ children, title, ...props }) {
	return (
		<div className={css.preferences} {...props}>
			<h3 className={css.subtitle}>{title}</h3>
			<ul className={css.list}>{children}</ul>
		</div>
	)
}

function Item({ text, children, desc, ...props }) {
	return (
		<li>
			<div className={css.container}>
				<Checkbox {...props} />
				<span>{text || children}</span>
			</div>
			{desc && <span className={css.desc}>{desc}</span>}
		</li>
	)
}

function Range({ text, children, desc, ...props }) {
	return (
		<li>
			<div className={css.container}>
				<RangeInput {...props} />
			</div>

			{(text || children) && <span>{text || children}</span>}
			{desc && <span className={css.desc}>{desc}</span>}
		</li>
	)
}

Preferences.Item = Item
Preferences.Range = Range

export default Preferences
