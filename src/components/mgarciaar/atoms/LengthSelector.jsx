export const LengthSelector = ({ onChange, value, min = 4, max = 24 }) => (
	<label className='flex items-center'>
		<input className='w-full h-2 bg-gray-200 appearance-none cursor-pointer rounded' type='range' onChange={e => onChange(e.currentTarget.value)} min={min} max={max} value={value} />
		<input className='w-14 p-2 pt-1 pb-1 ml-2' type='number' min={min} onChange={e => onChange(e.currentTarget.value)} max={max} value={value} />
	</label>
)