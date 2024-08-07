const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?'

const generatePassword = (lenght) => {
	let result = ''

	for (let i = 0; i < lenght; i++) {
		result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
	}
	return result
}

export default generatePassword
