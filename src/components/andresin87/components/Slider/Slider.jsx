import { handleFn } from '../../utils'

import './index.css'

const Slider = ({ min = 0, max = 20, value, onChange }) => {
	const handleChange = (event) => {
		handleFn(onChange)(event, { value: event.target.value })
	}
	const maximum = max > value ? max : value
	return (
		<div className='slider'>
			<span className='slider-label'>{min}</span>
			<input
				className='slider-input'
				type='range'
				max={maximum}
				min={min}
				value={value}
				onChange={handleChange}
			/>
			<span className='slider-label'>{maximum}</span>
		</div>
	)
}

export default Slider
