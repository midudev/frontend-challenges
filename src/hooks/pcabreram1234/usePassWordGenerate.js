const chars = 'QWERTYUIOPASDFGHJKLZXCVBMqwertyuiopasdfghjklzxcvbnmn!@#$%^&*0123456789'

const usePassWordGenerate = (n) => {
	let charIndex = 0
	let pass = ''

	for (let index = 0; index < n; index++) {
		charIndex = Math.ceil(Math.random() * 70)
		if (chars[charIndex] === undefined) {
			charIndex = Math.ceil(Math.random() * 60)
		}
		pass += chars[charIndex]
	}

	return pass.toString()
}

export { usePassWordGenerate }
