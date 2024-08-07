const characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789~@#_$*%/&+?!'

export const generatePassword = (range = 6) => {
	let password = ''
	for (let index = 0; index < range; index++) {
		password += characters[Math.floor(Math.random() * characters.length)]
	}
	return password
}
