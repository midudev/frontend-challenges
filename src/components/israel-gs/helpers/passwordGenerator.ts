function passwordGenerator(
	length = 10,
	allowLowerCase = true,
	allowUpperCase = true,
	allowNumbers = true,
	allowSpecialCharacters = true
): string {
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
	const upperCase = lowerCase.toUpperCase()
	const numbers = '0123456789'
	const specialCharacters = '+-_/{}[]%&$#.,;:'

	const allowedCharacters = [
		allowUpperCase && upperCase,
		allowLowerCase && lowerCase,
		allowNumbers && numbers,
		allowSpecialCharacters && specialCharacters
	]
		.filter(Boolean)
		.join('')

	return Array.from(
		globalThis.crypto.getRandomValues(new Uint8Array(length)),
		(num) => allowedCharacters[num % allowedCharacters.length]
	).join('')
}

export default passwordGenerator