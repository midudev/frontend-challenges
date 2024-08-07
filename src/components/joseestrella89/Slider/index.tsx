import React, { ChangeEvent } from 'react'

interface Props {
	label?: string
	max?: number
	min?: number
	onChange: (evt: ChangeEvent<HTMLInputElement>) => void
	value: string
}

const Slider = ({ label, max = 50, min = 1, onChange, value }: Props) => {
	return (
		<>
			<label className='font-sans'>{label}</label>
			<div className='flex flex-direction-row items-center mb-4'>
				<input
					className='w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700'
					type='range'
					min={min}
					max={max}
					value={value}
					onChange={onChange}
				/>
				<label className='font-sans font-bold ml-2'>{value}</label>
			</div>
		</>
	)
}

export default Slider
