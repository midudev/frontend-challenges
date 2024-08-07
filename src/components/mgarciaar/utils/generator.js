const NUMBERS = '1234567890'
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const CAPITAL_LETTERS = LETTERS.toUpperCase()
const SYMBOLS = '!@#$%&=^*-_'

export const generatePassword = (
	passwordLength,
	addLetters = false,
	addNumbers = false,
	addSymbols = false
) => {
	let generatedPass = ''
	let possibleChars = ''

	if (addLetters) {
		possibleChars += LETTERS + CAPITAL_LETTERS
	}

	if (addNumbers) {
		possibleChars += NUMBERS
	}

	if (addSymbols) {
		possibleChars += SYMBOLS
	}

	// We populate the generated pass until it has the configured length
	for (let i = 0; i < passwordLength; i++) {
		const index = Math.round((possibleChars.length - 1) * Math.random())
		generatedPass += possibleChars[index]
	}

	return generatedPass
}
