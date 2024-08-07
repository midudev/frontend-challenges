import React from 'react'
import { CheckIcon } from './icons/CheckIcon'
import styles from './styles/copiedTip.module.css'

export const CopiedTip = () => {
	return (
		<div className={styles.container}>
			<CheckIcon />
			<span className={styles.tipContainer}>Password copied</span>
			<span className={styles.tipDiamond}></span>
		</div>
	)
}
