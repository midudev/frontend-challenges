import { CSSProperties } from 'react'
import { random } from '../random'

export function getVerticalLinesStyle() {
	const style: CSSProperties = {}
	const thickness = 380 + random(-200, 100)
	const alpha = 4 + random(-2, 2)
	style.textDecorationLine = 'overline'
	const color = 0 + random(50, 100)
	style.textDecorationColor = `hsl(${color}deg 100% 50% / ${alpha}%)`
	style.textDecorationThickness = `${thickness}px`
	return style
}
