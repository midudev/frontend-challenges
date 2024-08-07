import { useEffect, useState, FC } from 'react'

interface Props {
	strength: number
}

export const StrengthPassword:FC<Props> = ({ strength }) => {
	const [colors, setColors] = useState<string[]>(['bg-white', 'bg-white', 'bg-white', 'bg-white'])

	const fillWithColor = (array: string[], end:number, color:string) => {
		for (let i = 0; i < Math.min(array.length, end); i++) {
			array[i] = color
		}

		return array
	}

	const getColors = (strength:number) => {
		const base = ['bg-white', 'bg-white', 'bg-white', 'bg-white']
		if (!strength || strength === 0) return base

		if (strength <= 49) return fillWithColor(base, 1, 'bg-red-600')
		if (strength >= 50 && strength <= 69) return fillWithColor(base, 2, 'bg-orange-400')
		if (strength >= 70 && strength <= 84) return fillWithColor(base, 3, 'bg-yellow-400')
		return fillWithColor(base, base.length, 'bg-green-600')
	}

	useEffect(() => {
		setColors(getColors(strength))
	}, [strength])

	return (
		<div className='w-8/12 flex flex-row'>
			<div className={`w-1/4 h-1 ${colors[0]} m-1`}></div>
			<div className={`w-1/4 h-1 ${colors[1]} m-1`}></div>
			<div className={`w-1/4 h-1 ${colors[2]} m-1`}></div>
			<div className={`w-1/4 h-1 ${colors[3]} m-1`}></div>
		</div>
	)
}
