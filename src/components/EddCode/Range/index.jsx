const Range = ({ passwordLength, changeRange }) => (
	<>
		<label htmlFor='range' className='text-white text-sm font-md font-mono uppercase'>
				Password length(min 5 max 20)
		</label>
		<div className='flex'>
			<input
				type='range'
				name='length'
				className='w-full'
				min='5'
				max='20'
				value={passwordLength}
				step='1'
				onChange={changeRange}
			/>
			<span className='ml-8'>{ passwordLength }</span>
		</div>
	</>
)

export default Range
