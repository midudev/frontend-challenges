export const PasswordGenerator = (length: number, characters: string[]) => {
	let charset = ''
	characters.forEach((character: string) => {
		if (character === 'uppercaseLetters') {
			charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		} else if (character === 'lowercasesLetters') {
			charset += 'abcdefghijklmnopqrstuvwxyz'
		} else {
			charset += '0123456789'
		}
	})
	let retVal = ''
	for (let i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n))
	}
	return retVal
}
