import { ChangeEvent, FC } from 'react'

interface RangeProps {
	value: number
	label?: string
	onChange?: (value: number) => void
}

export const Range: FC<RangeProps> = ({
	value,
	label,
	onChange
}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const eventValue = parseInt(event.target.value)
		onChange(eventValue)
	}

	return (
		<div className='josel95-range-container'>
			<input
				className='josel95-range'
				type='range'
				min={8}
				max={32}
				value={value}
				onChange={handleChange}/>
			<span className='josel95-range-text'>{label} {value}</span>
		</div>
	)
}