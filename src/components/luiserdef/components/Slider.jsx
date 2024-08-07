function Slider({ maxPasswordSize, passwordLength, updateSliderValue }) {
	return (
		<div className='mt-5 w-full'>
			<p className='text-center'>Longitud: {passwordLength}</p>
			<input
				className='slider-pass'
				onChange={updateSliderValue}
				type='range'
				min='1'
				max={maxPasswordSize}
				value={passwordLength}
			/>
		</div>
	)
}

export default Slider
