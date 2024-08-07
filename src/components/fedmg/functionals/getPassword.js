export function getPassword(range) {
	const characters = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ_'
	let code = ''

	for (let i = 0; i < range; i++) {
		code += characters[Math.floor(Math.random() * characters.length)]
	}
	return code
}
