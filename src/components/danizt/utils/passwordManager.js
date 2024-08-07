export const getRandomPassword = (charactersAvaliable, length) => {
	let randomPassword = ''
	for (let i = 0; i < length; i++) {
		randomPassword += charactersAvaliable.charAt(
			Math.floor(Math.random() * charactersAvaliable.length)
		)
	}
	return randomPassword
}

export const copyPassword = (password) => {
	navigator.clipboard.writeText(password)
	return true
}

export const getPasswordStrength = (password) => {
	// 1 lower && 1 upper && 1 number && 1 special && length +8
	const strongRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

	// 1 lower && 1 upper && 1 special && (length +6 || 1 number)
	const mediumRegEx =
		/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/

	if (strongRegEx.test(password)) {
		return 3
	} else if (mediumRegEx.test(password)) {
		return 2
	} else {
		return 1
	}
}
