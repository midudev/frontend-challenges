import { SliderType } from './types'
export const Slider = ({ max, min, value, changeHandler }: SliderType) => {
	return (
		<input
			type='range'
			min={min}
			max={max}
			value={value}
			className={'w-full'}
			step={1}
			onChange={(value: any) => changeHandler(value.target.value)}
		/>
	)
}
