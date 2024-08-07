import { UPPER_CASE_LETTERS_LIST } from '../constants/constants'

export function isUpperCaseLetter(letter: string) {
	return UPPER_CASE_LETTERS_LIST.includes(letter)
}
