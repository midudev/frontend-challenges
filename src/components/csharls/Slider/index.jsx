import useGenerator from '../hooks/useGenerator'

export default function Slider({ min = 8, max = 30 }) {
	const { length, changeLength } = useGenerator()

	const handleOnchange = (e) => {
		changeLength(e.target.value)
	}
	return (
		<div className='flex mx-auto'>
			<label className='md:mt-2'>
				Password length:
				<input
					className='ml-2'
					type='range'
					id='password-length'
					min={min}
					max={max}
					step='1'
					value={length}
					onChange={handleOnchange}
				/>
			</label>
			<span className='text-3xl md:ml-2'>{length}</span>
		</div>
	)
}
