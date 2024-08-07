import React, { useRef, useEffect } from 'react'
import './style.css'

export default function InputRange({ min, max, steps, value, handleValueChange }) {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.style.backgroundSize = ((value - min) * 100) / (max - min) + '% 100%'
	}, [value])

	return (
		<section className='david-fb__range'>
			<div>
				<p>Character Length</p>
				<p id='rangeValue'>{value}</p>
			</div>
			<input
				ref={inputRef}
				type='range'
				id='inputRange'
				value={value}
				min={min}
				max={max}
				step={steps}
				onChange={(e) => handleValueChange(e.target.value)}
			/>
		</section>
	)
}
