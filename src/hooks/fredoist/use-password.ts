import { writable, get } from 'svelte/store'
import { useOptions } from '@hooks/fredoist/use-options'

const NUMBERS = '0123456789'
const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SYMBOLS = '!@#$%^&*()_+-=[]{};:,./<>?'

const password = writable('')

export function usePassword() {
	const { subscribe, set } = password
	const options = useOptions()

	const generate = () => {
		const { length, numbers, lowercase, uppercase, symbols } = get(options)

		const chars = []
		if (numbers) chars.push(NUMBERS)
		if (lowercase) chars.push(LOWERCASE_LETTERS)
		if (uppercase) chars.push(UPPERCASE_LETTERS)
		if (symbols) chars.push(SYMBOLS)

		if (!chars.length) return set('')

		const charSet = chars.join('')

		let password = ''
		for (let i = 0; i < length; i++) {
			password += charSet[Math.floor(Math.random() * charSet.length)]
		}
		set(password)
	}

	return {
		subscribe,
		generate
	}
}
