import React from 'react'
import styles from '@components/devenapuros/styles/toggleSwitch.module.css'

export const ToggleSwitch = ({ active, handleClick, disabled }) => {
	return (
		<button
			className={`${styles.toggleContainer} ${active && styles.active} ${
				disabled && styles.disabled
			}`}
			onClick={handleClick}
			disabled={disabled}
		>
			<span className={styles.toggleCircle}></span>
		</button>
	)
}
