import type { ChangeEvent } from 'react'
import { useState } from 'react'
import styles from '../styles/Slider.module.css'

export interface ISliderProps {
	min: number
	max: number
	onChange?: (value: number) => void
}

export const Slider = ({ min, max, onChange }: ISliderProps) => {
	const [currentValue, setCurrentValue] = useState(min)

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value)
		setCurrentValue(value)
		onChange(value)
	}

	return (
		<div className='flex items-center gap-4 w-full'>
			<input
				type='range'
				min={ min }
				max={ max }
				value={ currentValue }
				className={ styles.slider + ' bg-sky-400/80' }
				onInput={ handleInput }
			/>
			<span className='w-8 h-8 text-center text-2xl font-semibold'>{ currentValue }</span>
		</div>
	)
}
