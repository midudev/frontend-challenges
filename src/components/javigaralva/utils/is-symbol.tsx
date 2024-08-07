import { SYMBOLS } from '../constants/constants'

export function isSymbol(letter: string) {
	return SYMBOLS.includes(letter)
}
