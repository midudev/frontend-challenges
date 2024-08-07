const InputRange = ({ value, change }) => {
	return (
		<div className='flex flex-col justify-center items-center gap-3'>
			<header className='flex gap-20 justify-around items-center'>
				<span className='text-purple-900 font-mono text-sm'>Character length</span>
				<span className='text-purple-900 font-mono font-bold text-lg w-6'>{value}</span>
			</header>
			<input
				type={'range'}
				className='h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 w-60'
				value={value}
				onChange={(e) => change(e.target.value)}
				min={0}
				max={20}
			/>
		</div>
	)
}

export default InputRange
