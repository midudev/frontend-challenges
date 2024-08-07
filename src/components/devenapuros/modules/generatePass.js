const charset = {
	lowercase: 'abcdefghijklmnñopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
	numbers: '0123456789',
	symbols: '^!$%&|[](){}:;.,*+-#@<>~'
}

/**
 * @param length The length of the password that will be generated.
 * @param lowercase Boolean value indicating whether the password includes lowercase letters.
 * @param uppercase Boolean value indicating whether the password includes uppercase letters.
 * @param numbers Boolean value indicating whether the password includes numbers.
 * @param symbols Boolean value indicating whether the password includes symbols.
 */
export function generateMiduPass(length, lowercase, uppercase, numbers, symbols) {
	let passwordTemplate = ''
	let passGenerated = ''

	if (lowercase) passwordTemplate += charset.lowercase
	if (uppercase) passwordTemplate += charset.uppercase
	if (numbers) passwordTemplate += charset.numbers
	if (symbols) passwordTemplate += charset.symbols

	let i = 0
	while (i < length) {
		const randomChar = passwordTemplate[Math.floor(Math.random() * passwordTemplate.length)]
		passGenerated += randomChar
		i++
	}
	return passGenerated
}
