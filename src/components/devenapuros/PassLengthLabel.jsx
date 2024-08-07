import React from 'react'
import styles from '@components/devenapuros/styles/passLengthLabel.module.css'

export const PassLengthLabel = ({ length }) => {
	return (
		<div className={styles.container}>
			<span className={styles.label}>Password lenght</span>
			<span className={styles.result}>{length}</span>
		</div>
	)
}
