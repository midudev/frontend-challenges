import type { FC } from 'react'
import { useRef } from 'react'

// Components
import Bar from './Bar'

export interface IOnMove {
  percentage: number,
  quantity: number
}

interface IValues {
  min: number,
  max: number
}

interface Props extends IValues {
  className?: string,
  onMove: (payload: IOnMove) => void,
  percentage: number
}

const getPercentage = (clientX: number, target: HTMLDivElement) => {
	const { left, right } = target.getBoundingClientRect()

	if (left >= clientX) return 0
	else if (clientX >= right) return 100

	const value = clientX - left
	const maxValue = right - left

	return (value * 100) / maxValue
}

const getValues = ({ min, max }: IValues, percentage: number) => {
	const maxValue = max - min

	const value = Math.round(((percentage * maxValue) / 100))
	const valueToPercentage = (value * 100) / maxValue

	return {
		value: value + min,
		percentage: valueToPercentage
	}
}

const Range: FC<Props> = function({
	className = '',
	min,
	max,
	onMove,
	percentage
}) {
	const divRef = useRef<HTMLDivElement | null>(null)

	const handleOnMouseMove = (e: MouseEvent) => {
		const { current: $div } = divRef

		if (!$div) return

		const thePercentage = getPercentage(e.clientX, $div)

		const { value, percentage } = getValues({ min, max }, thePercentage)

		onMove({
			percentage,
			quantity: value
		})
	}

	const handleOnMouseUp = () => {
		window.removeEventListener('mousemove', handleOnMouseMove)
		window.removeEventListener('mouseup', handleOnMouseUp)
	}

	const handleOnMouseDown = () => {
		window.addEventListener('mousemove', handleOnMouseMove)
		window.addEventListener('mouseup', handleOnMouseUp)
	}

	return (
		<div
			className={`h-1 bg-stone-700 rounded-full ${className}`}
			onMouseDown={handleOnMouseDown}
			ref={divRef}
		>
			<Bar
				percentage={percentage}
			/>
		</div>
	)
}

export default Range