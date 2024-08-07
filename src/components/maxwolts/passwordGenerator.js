const generate = (length, words) => {
	const letters =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?,;-_¡!¿*%&$/()[]{}|@><'
	let password
	if (words) {
		const arrayWords = words.split(' ')
		password = generatePasswordWithWords(arrayWords, length)
	} else {
		password = generateRandomPassword(letters, length)
	}

	return password
}

const generateRandomPassword = (base, length) => {
	let password = ''
	for (let i = 0; i < length; i++) {
		const random = Math.floor(Math.random() * base.length)
		password += base.charAt(random)
	}
	return password
}

const generatePasswordWithWords = (words, length) => {
	let randomPassword = generate(length)
	let newPassword = ''
	words.forEach((element) => {
		if (newPassword.length > 0) {
			randomPassword = newPassword
		}
		const random = Math.floor(Math.random() * randomPassword.length)
		const after = randomPassword.slice(random)
		const before = randomPassword.slice(0, random)
		newPassword = before + element + after
	})
	return newPassword
}

export { generate }
