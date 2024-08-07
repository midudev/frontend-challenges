import React from 'react'
import styles from './styles.module.css'

const CopyIcon = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
			<rect
				x='128'
				y='128'
				width='336'
				height='336'
				rx='57'
				ry='57'
				fill='none'
				stroke='currentColor'
				strokeLinejoin='round'
				strokeWidth='32'
			/>
			<path
				d='m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24'
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='32'
			/>
		</svg>
	)
}

export default function TextInput({ value = '', placeholder = 'placeholder', onCopy }) {
	return (
		<div className={styles.inputWrapper}>
			<input className={`${styles.input} ${onCopy && styles.paddingRight}`} type='text' readOnly value={value} placeholder={`[ ${placeholder} ]`} />
			{
				onCopy && <button onClick={onCopy} className={styles.copyBtn}>
					<CopyIcon />
				</button>
			}
		</div>
	)
}
