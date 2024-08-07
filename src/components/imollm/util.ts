import { PasswordData } from './types'

const lowerCaseChars = 'abcdefghijklmnopqrstuvxyz'
const upperCaseChars = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const symbols = '!"·$%&/()=?¿-.,;:_'
const numbers = '1234567890'

export const calcStrength = (passwordData: PasswordData): string => {
	const { type, length } = passwordData
	let strength: 'Weak' | 'Medium' | 'Strong'

	if ((type === 'alphanumeric' || type === 'numbers') && length <= 8) {
		strength = 'Weak'
	} else if (type === 'random' && length <= 6) {
		strength = 'Weak'
	} else if (type === 'random' && length > 6 && length < 12) {
		strength = 'Medium'
	} else if ((type === 'alphanumeric' || type === 'numbers') && length > 8 && length < 12) {
		strength = 'Medium'
	} else if ((type === 'alphanumeric' || type === 'numbers') && length >= 12) {
		strength = 'Strong'
	} else if (type === 'random' && length >= 12) {
		strength = 'Strong'
	}

	return strength
}

export const generatePassword = (passwordData: PasswordData): string => {
	const { length, type } = passwordData
	let password = ''
	let chars: string

	if (type.toLowerCase() === 'alphanumeric') {
		chars = lowerCaseChars.concat(upperCaseChars).concat(numbers)
	} else if (type.toLowerCase() === 'random') {
		chars = lowerCaseChars.concat(upperCaseChars).concat(numbers).concat(symbols)
	} else if (type.toLowerCase() === 'numbers') {
		chars = numbers
	} else {
		chars = lowerCaseChars.concat(upperCaseChars).concat(symbols).concat(numbers)
	}

	for (let i = 0; i < length; i++) {
		password += chars[Math.floor(Math.random() * chars.length)]
	}

	return password
}

export const copyPasswordToClipboard = (password: string) => {
	const copyMsg = document.querySelector('#copy-msg') as HTMLDivElement

	navigator.clipboard.writeText(password)
	copyMsg.classList.remove('invisible')

	setTimeout(() => {
		copyMsg.classList.add('invisible')
	}, 2000)
}
