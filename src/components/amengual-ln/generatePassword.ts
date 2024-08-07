export const generatePassword = (length: number, numbers: boolean, symbols: boolean) => {
	let generatedPassword = ''

	for (let i = 0; i < length; i++) {
		generatedPassword += getRandomChar(numbers, symbols)
	}

	return generatedPassword
}

const getRandomChar = (numbers: boolean, symbols: boolean) => {
	const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const NUMBERS = '0123456789'
	const SYMBOLS = '|@·~¬!"#$%&/()=¿°?¡¨*[]{},.-;:_'

	let possibleChars = LETTERS

	if (numbers) possibleChars = possibleChars.concat(NUMBERS)
	if (symbols) possibleChars = possibleChars.concat(SYMBOLS)

	const MAX_CHAR = possibleChars.length

	const randomIndex = Math.floor(Math.random() * MAX_CHAR)

	return possibleChars[randomIndex]
}