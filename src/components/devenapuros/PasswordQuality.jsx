import React, { useEffect, useRef } from 'react'
import styles from '@components/devenapuros/styles/passwordQuality.module.css'
import { HappyIcon } from './icons/HappyIcon'
import { NormalFaceIcon } from './icons/NormalFaceIcon'
import { SadIcon } from './icons/SadIcon'
import { EmotionIcon } from './icons/EmotionIcon'

export const PasswordQuality = ({ length = 0, min = 0, max = 100 }) => {
	const indicatorRef = useRef()

	useEffect(() => {
		const color = length > 18 ? '#76ba99' : length >= 9 ? '#FFC54D' : '#EB5353'
		let quality = Math.round(((length - min) * 100) / (max - min) / 10)
		if (quality === 0) quality = 1
		for (let i = 0; i < quality; i++) {
			indicatorRef.current.children[i].style.background = color
		}
		for (let i = quality; i < 10; i++) {
			indicatorRef.current.children[i].style.background = '#ddd'
		}
	}, [length])

	return (
		<div className={styles.qualityContainer}>
			<span>Password quality</span>
			<div className={styles.qualityBar}>
				<div className={styles.qualityBar} ref={indicatorRef}>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
					<span className={styles.qualityIndicator}></span>
				</div>
				<div className={styles.qualityIcon}>
					{length >= 49 && <EmotionIcon fill='#76ba99' />}
					{length <= 48 && length >= 19 && <HappyIcon fill='#76ba99' />}
					{length <= 18 && length >= 9 && <NormalFaceIcon fill='#FFC54D' />}
					{length <= 8 && <SadIcon fill='#EB5353' />}
				</div>
			</div>
		</div>
	)
}
