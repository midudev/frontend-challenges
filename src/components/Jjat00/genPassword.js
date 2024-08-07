const genPassword = (configPassword) => {
	let chars = ''
	if (configPassword.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	if (configPassword.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
	if (configPassword.numbers) chars += '0123456789'
	if (configPassword.symbols) chars += '!@#$%^&*()'
	const passwordLength = configPassword.length
	let password = ''
	for (let i = 0; i <= passwordLength; i++) {
		const randomNumber = Math.floor(Math.random() * chars.length)
		password += chars.substring(randomNumber, randomNumber + 1)
	}
	return password
}

export default genPassword
