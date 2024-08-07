let string = 'abcdefghijklmnopqrstuvwz'
const numb = '0123456789'
const sym = '._-+=?!%$£*/|,'

export default function generatePsswrd (num, symbols, numbers) {
	let array = ''
	let password = ''
	if (!numbers && symbols) array = string + sym
	if (numbers && !symbols) array = string + numb
	if (numbers && symbols) array = string + numb + sym

	array.split('')
	
	for (let i = 0; i < num; i++) {
		const idx = Math.floor(Math.random() * array.length)
		password += (array[idx])
	}
	return password
}