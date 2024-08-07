import { passwordCharacters } from './passwordCharacters'

function generatePassword(filterStatus, passwordLength) {
	const { lowerCase, upperCase, numbers, specialCharacters } = passwordCharacters

	let passCharacters = lowerCase

	if (filterStatus.upperCase) {
		passCharacters += upperCase
	}
	if (filterStatus.numbers) {
		passCharacters += numbers
	}
	if (filterStatus.symbols) {
		passCharacters += specialCharacters
	}

	let generatedPassword = ''
	for (let i = 0; i < passwordLength; i++) {
		const maxValue = passCharacters.length
		const characterPos = Math.floor(Math.random() * maxValue)
		generatedPassword += passCharacters[characterPos]
	}
	return generatedPassword
}

export default generatePassword
