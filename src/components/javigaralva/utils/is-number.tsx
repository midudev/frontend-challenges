import { NUMBERS } from '../constants/constants'

export function isNumber(letter: string) {
	return NUMBERS.includes(letter)
}
