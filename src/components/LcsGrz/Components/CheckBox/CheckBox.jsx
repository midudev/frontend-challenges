// @vendors
import React from 'react'
// @components
import Divider from '../Divider/Divider'
// @media
import CheckMark from './Media/CheckMark'
// @styles
import './CheckBox.css'

// ─────────────── ∞ ───────────────

export default function CheckBox({ name, label, hint, onChange, isChecked, disabled }) {
	return (
		<button
			className={isChecked ? 'lcsgrz-cb-container-checked' : 'lcsgrz-cb-container-unchecked'}
			type='button'
			onClick={onChange}
			disabled={disabled}
			name={name}
		>
			<div className='lcsgrz-cb-label-box'>
				<label>{label}</label>
				<Divider width={10} />
				<label className='lcsgrz-cb-hint'>{hint}</label>
			</div>
			{isChecked && <CheckMark size={15} color='white' />}
		</button>
	)
}
