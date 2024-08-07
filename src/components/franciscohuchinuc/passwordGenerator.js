const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const uppderCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '0123456789'
const symbols = '!@#$%*+'

export function passwordGenerator ({ length = 8, settings = {} }) {
	let string = lowerCaseLetters

	settings.uppercase && (string += uppderCaseLetters)
	settings.numbers && (string += numbers)
	settings.symbols && (string += symbols)

	let newPassword = ''
	for (let i = 0; i < length; i++) {
		newPassword += string[Math.floor(Math.random() * string.length)]
	}
	return newPassword
}
