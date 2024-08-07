import React from 'react'
import styles from '@components/devenapuros/styles/toggleLabel.module.css'

export const ToggleLabel = ({ content, active }) => {
	return <span className={`${styles.label} ${active && styles.active}`}>{content}</span>
}
