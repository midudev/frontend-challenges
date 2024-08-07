const InputRange = ({ id, title, value, onChange, min = 1, max = 10, step = 1 }) => {
	return (
		<div className='my-2 flex items-center w-full gap-4 flex-col sm:flex-row'>
			<div className='flex items-center'>
				<p className='whitespace-nowrap text-lg text-gray-500 lg:text-xl dark:text-gray-400 font-bold'>
					{title}: <span className='px-5 font-normal'>{value}</span>
				</p>
			</div>

			<input
				id={id}
				className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 overflow-hidden py-2'
				type='range'
				value={value}
				step={step}
				min={min}
				max={max}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}

export default InputRange
