export default function generatePassword(length = 10) {
	if (typeof length !== 'number') return console.error('Password length must be a number')
	let password = []
	while (password.length !== length) {
		const randomUpperCase = Math.floor(Math.random() * (90 - 65) + 65)
		const randomLowerCase = Math.floor(Math.random() * (122 - 97) + 97)
		password += String.fromCharCode(Math.round(Math.random()) ? randomLowerCase : randomUpperCase)
	}
	return password
}
