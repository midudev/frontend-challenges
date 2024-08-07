import { CSSProperties } from 'react'
import { random } from '../random'

export function getBigDotsStyle() {
	const style: CSSProperties = {}
	const width = 128 + random(-100, 100)
	const offset = 154 + random(-100, 100)
	const alpha = 2 + random(-1, 6)
	const color = 0 + random(-10, 40)
	style.outlineOffset = `${offset}px`
	style.outlineColor = `hsl(${color}deg 100% 50% / ${alpha}%)`
	style.outlineWidth = `${width}px`
	style.outlineStyle = 'dotted'
	style.borderRadius = '50%'
	return style
}
