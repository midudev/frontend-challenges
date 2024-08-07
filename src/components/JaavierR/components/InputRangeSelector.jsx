import style from './range.module.css'

export function InputRangeSelector({ label, name, value, onChange, onBlur, min, max }) {
	return (
		<div className='flex justify-between items-center text-base space-x-4 py-4'>
			<label className='font-semibold'>{label}</label>

			<input
				type='range'
				name={name}
				min={min}
				max={max}
				className={style.inputRange}
				step={1}
				value={value}
				onChange={onChange}
			/>

			<input
				type='text'
				name={`${name}-text`}
				className='w-10 text-white bg-neutral-900 ring-1 ring-zinc-600/70 rounded-lg text-center focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-neutral-800 focus:outline-none'
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				onKeyPress={(event) => {
					if (!/[0-9]/.test(event.key)) {
						event.preventDefault()
					}
				}}
			/>
		</div>
	)
}
