import { randomBetween } from './random'

const LOWER_A_CHAR_CODE = 97
const LOWER_Z_CHAR_CODE = 122
const UPPER_A_CHAR_CODE = 65
const UPPER_Z_CHAR_CODE = 90

export const randomLowercase = () => {
	return String.fromCharCode(randomBetween(LOWER_A_CHAR_CODE, LOWER_Z_CHAR_CODE))
}

export const randomUppercase = () => {
	return String.fromCharCode(randomBetween(UPPER_A_CHAR_CODE, UPPER_Z_CHAR_CODE))
}

export const randomSymbol = () => {
	const symbols = '!@#$%^&*'
	return symbols[randomBetween(0, symbols.length - 1)]
}
