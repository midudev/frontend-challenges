const InputSlider = ({ length, handleChange, min, max }) => {
	return (
		<div className='grid gap-4'>
			<div className='flex justify-between'>
				<label htmlFor='length' className='text-zinc-400'>
					Length:
				</label>
				<span className='text-indigo-300'>{length}</span>
			</div>
			<input
				className='appearance-none rounded-md bg-zinc-800 h-2 focus:outline-dashed focus:outline-indigo-300'
				type='range'
				id='length'
				min={min}
				max={max}
				value={length}
				onChange={handleChange}
			/>
		</div>
	)
}

export default InputSlider
