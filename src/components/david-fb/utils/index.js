import { OPTIONS } from '../constants'

function generatePassword(PasswordLength, characters) {
	const MIN = 0
	const MAX = characters.length - 1
	let password = ''

	for (let i = 0; i < PasswordLength; i++) {
		const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
		password += characters[random]
	}

	return password
}

function getPasswordLevel(password) {
	const length = password.length
	const level = OPTIONS.reduce((acc, obj) => {
		const isInPassword = obj.characters.some((char) => password.includes(char))
		if (isInPassword) {
			acc++
		}
		return acc
	}, 0)

	if (length <= 5) return 'Too Weak'
	if ((length >= 6 && level === 4) || (length >= 9 && level >= 3)) return 'Strong'
	if ((length >= 7 && level >= 2) || length >= 9) return 'Medium'
	return 'Weak'
}

export { generatePassword, getPasswordLevel }
