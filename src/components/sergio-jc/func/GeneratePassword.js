export const characters = [
	'abcdefghijklmnopqrstuvwxyz',
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	'@!|#"/()=?¡¿[]{}-_.,´¨^~+`:;*¬°&$|<>',
	'0123456789'
]

export const generatePassword = (ary = characters, num = 10) => {
	let password = ''
	for (let i = 0; i < num; i++) {
		const alt = Math.floor(Math.random() * ary.length)
		const letter = Math.floor(Math.random() * ary[alt].length)
		password += ary[alt][letter]
	}
	return password
}
