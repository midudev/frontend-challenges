import { isValidArray } from './validations.js'

/**
 * @param {string} selector
 * Auxiliar para obtener la referencia de un elemento del DOM
 */
export const $ = (selector) => document.querySelector(selector)

/**
 * @param {HTMLElement} ref
 * @param {string} value
 * Actualiza el texto en un elemento del DOM
 */
export const updateTextOf = (ref, value) => {
	ref.textContent = value
}

/**
 * @param {Array<HTMLButtonElement>} buttonsRefsList
 * @param {boolean} newState
 * Auxiliar para habilitar o deshabilitar elementos, se hace modificando su atributo `disabled`
 */
export const toggleButtonsDisabledState = (buttonsRefsList, newState) => {
	if (!isValidArray(buttonsRefsList)) return

	buttonsRefsList.forEach((buttonRef) => {
		buttonRef.disabled = newState
	})
}

/**
 * @param {number} value
 * Obtiene un arreglo de número criptográficamente aleatorios
 */
export const getRandomNumberValues = (value) =>
	window.crypto.getRandomValues(new Uint32Array(value))

/**
 * @param {string} text
 * Auxiliar para escribir en el portapapeles
 */
export const copyToClipboard = (text) => {
	return new Promise((resolve, reject) => {
		if (!navigator.clipboard) reject(new Error(null, { cause: 'No clipboard' }))

		navigator.clipboard
			.writeText(text)
			.then(() => resolve())
			.catch((err) => reject(err))
	})
}
