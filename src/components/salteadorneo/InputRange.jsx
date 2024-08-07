import { MIN, MAX } from './utils'

import './InputRange.css'

export default function InputRange({ length, setLength }) {
	function handleLength(e) {
		const val = e.target.value
		e.target.style.backgroundSize = ((val - MIN) * 100) / (MAX - MIN) + '% 100%'
		setLength(val)
	}
	return (
		<input
			type='range'
			className='range-length'
			min={MIN}
			max={MAX}
			defaultValue={length}
			onChange={handleLength}
			step={1}
		/>
	)
}
