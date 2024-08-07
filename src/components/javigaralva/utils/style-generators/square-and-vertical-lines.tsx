import { CSSProperties } from 'react'
import { random } from '../random'

export function getSquareAndVerticalLinesStyle() {
	const style: CSSProperties = {}
	{
		const width = 28 + random(-10, 10)
		const alpha = 4 + random(-2, 2)
		const offset = 54 + random(-50, 50)
		const color = 0 + random(50, 100)
		style.outlineOffset = `${offset}px`
		style.outlineColor = `hsl(${color}deg 100% 50% / ${alpha}%)`
		style.outlineWidth = `${width}px`
		style.outlineStyle = 'dashed'
	}
	{
		const thickness = 380 + random(-200, 100)
		const alpha = 4 + random(-2, 2)
		const color = 0 + random(100, 150)
		style.textDecorationLine = 'underline'
		style.textDecorationColor = `hsl(${color}deg 100% 50% / ${alpha}%)`
		style.textDecorationThickness = `${thickness}px`
	}
	return style
}
