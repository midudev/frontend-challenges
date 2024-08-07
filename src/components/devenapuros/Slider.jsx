import React, { useEffect, useRef } from 'react'
import styles from '@components/devenapuros/styles/slider.module.css'

export const Slider = ({ value = 0, handleChange, min = 0, max = 100 }) => {
	const fillRef = useRef()
	useEffect(() => {
		const fillLength = ((value - min) * 100) / (max - min)
		fillRef.current.style.width = `${fillLength}%`
	}, [value])

	return (
		<div className={styles.container}>
			<span className={styles.bar}>
				<span ref={fillRef} className={styles.fill} />
			</span>
			<input
				id='slider'
				className={styles.slider}
				type='range'
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}
