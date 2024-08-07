import { DELIMITERS } from '../constants'
import words from './words'

export function getRandomPassword(options) {
	if (options.withWords) {
		const passwordLength = options.wordLength
		const array = new Uint32Array(passwordLength)
		window.crypto.getRandomValues(array)
		const newPassword = []
		for (let i = 0; i < passwordLength; i++) {
			newPassword.push(words[array[i] % words.length])
		}
		return newPassword.join(DELIMITERS[options.wordSeparator].sign)
	} else {
		const passwordLength = options.charLength
		let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		if (options.withNumbers) {
			chars += '0123456789'
		}
		if (options.withSymbols) {
			chars += '!@#$%^&*~()[]{}=-_.+/:'
		}
		const array = new Uint32Array(passwordLength)
		window.crypto.getRandomValues(array)

		const newPassword = []
		for (let i = 0; i < passwordLength; i++) {
			newPassword.push(chars[array[i] % chars.length])
		}

		return newPassword.join('')
	}
}

export function leetText(target, replaceHash) {
	const text = target.textContent
	if (replaceHash) {
		const hashText = text
			.replace(/a/gi, '4')
			.replace(/e/gi, '3')
			.replace(/i/gi, '1')
			.replace(/o/gi, '0')
			.replace(/b/gi, '8')
			.replace(/g/gi, '9')
			.replace(/s/gi, '5')
			.replace(/t/gi, '7')
		target.textContent = hashText
	} else {
		target.textContent = target.dataset.value
	}
}
