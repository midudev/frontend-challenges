const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+/*-#$%&()={}[]!¡?¿'

function generatePass (length = 10) {
	let newPass = ''
	const max = letters.length
	for (let i = 0; i < length; i++) {
		newPass += letters[getRandomInt(max)]
	}
	return newPass
}

function getRandomInt (max) {
	return Math.floor(Math.random() * max)
}

export default generatePass