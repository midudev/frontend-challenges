const PASSWORD_PATTERN =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_+~|}{[]:;?><,.-='

const generatePassword = (length: number, pattern: string): string => {
	const randomValues = new Uint32Array(length)
	window.crypto.getRandomValues(randomValues)
	const patternLength = pattern.length
	let password = ''
	randomValues.forEach((value) => {
		password += pattern.charAt(value % patternLength)
	})
	return password
}

export { generatePassword, PASSWORD_PATTERN }
