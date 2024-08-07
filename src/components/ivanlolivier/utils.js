import { SIMBOLS, MIN_SECURE_PASSWORD_LENGTH } from './constants'

export const createPassword = (characters, length) => {
	let password = ''
	const charactersLength = characters.length
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return password
}

export const calculatePasswordStrength = (password) => {
	let strength = 0
	if (password.length >= MIN_SECURE_PASSWORD_LENGTH) {
		strength += 1
	}
	if (password.match(/[a-z]+/)) {
		strength += 1
	}
	if (password.match(/[A-Z]+/)) {
		strength += 1
	}
	if (password.match(/[0-9]+/)) {
		strength += 1
	}
	if (new RegExp(`[${SIMBOLS.split('').join('\\')}]+`).test(password)) {
		strength += 1
	}
	return strength
}
