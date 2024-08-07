import { CSSProperties } from 'react'
import { sample } from '../utils/sample'
import { getVerticalLinesStyle } from '../utils/style-generators/vertical-lines'
import { getSquareAndVerticalLinesStyle } from '../utils/style-generators/square-and-vertical-lines'
import { getBigCircleDottedStyle } from '../utils/style-generators/big-circle-doted'
import { getBigDotsStyle } from '../utils/style-generators/big-dots'
import { isUpperCaseLetter } from '../utils/is-upper-case-letter'
import { isSymbol } from '../utils/is-symbol'
import { isNumber } from '../utils/is-number'

type ColorizedLetterStyles = {
	classNames: string
	style: CSSProperties
}

interface ColorizedLetterProps {
	letter: string
}
export function ColorizedLetter({ letter }: ColorizedLetterProps) {
	const { classNames, style } = getStyles(letter)
	return (
		<span className={classNames} style={style}>
			{letter}
		</span>
	)
}

function getStyles(letter: string): ColorizedLetterStyles {
	let classNames = 'text-white'
	let style: CSSProperties = {}
	if (isNumber(letter)) {
		classNames = 'text-orange-600'
		style = getBigDotsStyle()
	} else if (isSymbol(letter)) {
		classNames = 'text-lime-600'
		style = getBigCircleDottedStyle()
		style.textShadow = 'rgb(116 255 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 0%) 1px 1px 6px'
	} else if (isUpperCaseLetter(letter)) {
		classNames = 'text-white/50'
		style = getSquareAndVerticalLinesStyle()
	} else {
		classNames = 'text-white px-4'
		style = getVerticalLinesStyle()
	}

	const duration = sample(['duration-500', 'duration-700', 'duration-1000'])

	classNames = `${duration} hover:scale-150 inline-block ${classNames}`

	return {
		classNames,
		style
	}
}
