import animation from './utils/animation'

import './style/input.css'

export const Input = ({ value, setValue }) => {
	function handlerRange(event) {
		event.preventDefault()
		setValue(Number(event.target.value))
		animation(value)
	}
	return (
		<div id='eyubkh-input'>
			<label htmlFor='eyubkh-input-range'>{value <= 9 ? '0' + value : value}</label>
			<input
				id='eyubkh-input-range'
				onChange={handlerRange}
				type='range'
				value={value}
				min='5'
				max='16'
			/>
		</div>
	)
}
