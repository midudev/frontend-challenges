import { FC, ChangeEvent } from 'react'


interface Props {
	value: number;
	name?: string;
	onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}


export const RangeInputComponent:FC<Props> = ({ name = '', value, onChange }) => {
	return (
		<div className='mt-3 w-full flex items-center flex-col'>
			<p className='w-72 flex justify-between px-4'>
				<span className='text-white font-bold'>Length</span>
				<span className='text-white font-bold'>{ value }</span>
			</p>
			<input
				type='range'
				min='6'
				max='40'
				name={name}
				defaultValue='10'
				className='w-72 outline-none'
				onChange={onChange}
			/>
		</div>
	)
}
