import { getRandomNumberValues } from './dom.js'
import { isValidArray } from './validations.js'

/**
 * @param {object} param
 * @param {number} param.limit
 * Obtiene una contraseña aleatoria dependiendo de las opciones dadas
 */
export const getRandomPassword = async ({ limit }) => {
	const randomStringValue = getRandomNumberValues(8)
		.join('')
		.match(/.{1,2}/g)
		.map((val) => parseInt(val))
	return getNumbersReplacedByLetters(randomStringValue).join('').substring(0, limit)
}

/**
 * @param {number} int
 * Obtiene una letra en base a un número entero dado
 */
export const getCharFromInt = (int) => {
	const code = 'a'.charCodeAt(0)
	return String.fromCharCode(code + int)
}

/**
 * @param {Array<number>} numberList
 * Transforma un arreglo de número  a un arreglo de letras
 */
export function getNumbersReplacedByLetters(numberList) {
	if (!isValidArray(numberList)) return
	return numberList.map((num) => getCharFromInt(num >= 52 ? num / 4 : num / 2))
}
