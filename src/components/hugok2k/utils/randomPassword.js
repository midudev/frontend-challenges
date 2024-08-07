import randomWords from './randomWords'

export default function randomPassword(input, option) {
	const { words, number, symbol } = option
	if (words) return randomWords()
	let pass = ''
	const abcLower = 'abcdefghijklmnopqrstuvwxyz'
	const abcUpper = abcLower.toUpperCase()
	const passNum = '01234567890123456789'
	const passSym = '!@#$%&*?]}).!@#$%&*?]}).'
	let passGen = abcLower + abcUpper
	if (number) passGen += passNum
	if (symbol) passGen += passSym
	for (let i = 1; i <= input; i++) {
		const char = Math.floor(Math.random() * passGen.length + 1)
		pass += passGen.charAt(char)
	}
	return pass
}
