import React from 'react'
import styles from '@components/devenapuros/styles/primaryButton.module.css'

export const PrimaryButton = ({ children, handleClick, disabled }) => {
	return (
		<button
			className={`${styles.primaryButton} ${disabled && styles.disabled}`}
			onClick={handleClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
