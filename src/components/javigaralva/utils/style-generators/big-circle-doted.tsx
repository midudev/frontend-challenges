import { CSSProperties } from 'react'
import { random } from '../random'

export function getBigCircleDottedStyle() {
	const style: CSSProperties = {}
	const width = 8 + random(-4, 2)
	const offset = 204 + random(-100, 100)
	const alpha = 6 + random(-2, 2)
	const color = 124 + random(-25, 75)
	style.outlineOffset = `${offset}px`
	style.outlineColor = `hsl(${color}deg 100% 50% / ${alpha}%)`
	style.outlineWidth = `${width}px`
	style.outlineStyle = 'dotted'
	style.borderRadius = '50%'
	return style
}
