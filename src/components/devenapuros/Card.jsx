import React from 'react'
import styles from '@components/devenapuros/styles/card.module.css'

export const Card = ({ children }) => {
	return <article className={styles.card}>{children}</article>
}
