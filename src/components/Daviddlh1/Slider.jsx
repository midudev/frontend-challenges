import { useState, useEffect } from 'react'
import './styles/Slider.css'

const Slider = ({ minValue, maxValue, step, sliderRef, passwordStrength, setPasswordStrength }) => {
	const [value, setValue] = useState(0)
	const [modifyAllowed, setModifyAllowed] = useState(true)
	const getBackgroundSize = () => {
		return { backgroundSize: `${(value * 100) / (maxValue - minValue)}% 100%` }
	}

	useEffect(() => {
		setPasswordStrengthBasedOnLength()
	}, [value])

	const setPasswordStrengthBasedOnLength = () => {
		if (value + 10 === 16 && modifyAllowed) {
			setPasswordStrength(passwordStrength + 1)
			setModifyAllowed(false)
		} else if (value + 10 === 15 && !modifyAllowed) {
			setPasswordStrength(passwordStrength - 1)
			setModifyAllowed(true)
		} else if (value + 10 > 15 && modifyAllowed) {
			setPasswordStrength(passwordStrength + 1)
			setModifyAllowed(false)
		} else if (value + 10 < 15 && !modifyAllowed) {
			setPasswordStrength(passwordStrength - 1)
			setModifyAllowed(true)
		}
	}

	const setProgressBar = () => {
		setValue(Math.floor(sliderRef.current.value))
	}

	return (
		<div className='slider__main-container'>
			<div className='slider__first-container'>
				<p>Character length</p>
				<input className='slider__value-output' type='text' value={value + minValue} disabled />
			</div>
			<div>
				<input
					type='range'
					className='slider__slider'
					ref={sliderRef}
					onChange={setProgressBar}
					onClick={setProgressBar}
					min={0}
					max={maxValue - minValue}
					defaultValue={0}
					step={step}
					style={getBackgroundSize()}
				/>
			</div>
		</div>
	)
}

export default Slider
