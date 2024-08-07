import type { PasswordConfig } from '@components/codingcodax/@types'

const CHARACTERS = {
	numbers: '0123456789',
	symbols: '!@#$%^&*()_-+={[}];:<,>.?/',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

const generatePassword = (config: PasswordConfig) => {
	let finalCharacters = ''
	let password = ''

	for (const configProp in config) {
		if (config[configProp] === true) finalCharacters += CHARACTERS[configProp]
	}

	for (let i = 0; i < config.length; i++) {
		password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
	}

	return password
}

export default generatePassword
