const generatePass = (digits = 8, specialCharacters = true, upperCase = false, number = true) => {
	const PUSH_CHARS = `${number ? '00123456789' : ''}${
		upperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
	}abcdefghijklmnopqrstuvwxyz${specialCharacters ? '%&_()=-.!?¿&%$' : ''}`
	const length = PUSH_CHARS.length
	const lastRandChars = []
	let now = new Date().getTime()
	const timeStampChars = new Array(8)
	for (let i = 7; i >= 0; i--) {
		timeStampChars[i] = PUSH_CHARS.charAt(now % length)
		now = Math.floor(now / length)
		if (now === 0) {
			now = new Date().getTime()
		}
	}
	let pass = ''
	for (let i = 0; i < digits; i++) {
		lastRandChars[i] = Math.floor(Math.random() * length)
	}
	for (let i = 0; i < digits; i++) {
		pass += PUSH_CHARS.charAt(lastRandChars[i])
	}
	return pass
}

export default generatePass
