export function generatePassword (passLength) {
	let password = ''
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

	for (let i = 0; i <= passLength; i++) {
		const random = Math.floor(Math.random() * chars.length)
		password += chars.substring(random, random + 1)
	}

	return password
}