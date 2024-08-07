const InputRange = ({ name, min, max, value, onChange }) => {
	return (
		<input
			className='appearance-none bg-blue-200 rounded-xl h-2'
			type='range'
			name={name}
			min={min}
			max={max}
			value={value}
			onChange={onChange}
		/>
	)
}

export default InputRange
