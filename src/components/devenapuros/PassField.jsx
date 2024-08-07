import React, { useState } from 'react'
import styles from '@components/devenapuros/styles/passField.module.css'
import { CopyButton } from '@components/devenapuros/CopyButton'
import { CopiedTip } from './CopiedTip'

export const PassField = ({ value, setValue }) => {
	const [check, setCheck] = useState(false)

	const copyPass = () => {
		navigator.clipboard
			.writeText(value)
			.then(() => {
				setCheck(true)
				setTimeout(() => {
					setCheck(false)
				}, 1300)
			})
			.catch(() => {
				alert('Cannot copy password to clipboard')
			})
	}

	return (
		<div className={styles.container}>
			<input
				type='text'
				placeholder='Generating password...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				readOnly
			/>
			<span className={styles.separator}></span>
			{!check && <CopyButton handleClick={copyPass} />}
			{check && <CopiedTip />}
		</div>
	)
}
