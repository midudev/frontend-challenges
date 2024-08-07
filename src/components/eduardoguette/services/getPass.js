const dic = {
	symbols: '!"#$%&\'()*+,-./:;<=>?@[]^_{|}~',
	uppercase: 'ABCDEFGHJKMNPQRTUVWXYZ',
	lowercase: 'abcdefghijkmnpqrtuvwxyz',
	numbers: '0123456789'
}
/**
 * It takes an object with a length property and a bunch of boolean properties, and returns a string of
 * random characters from the characters specified by the boolean properties
 * @param data - { lengthPass, numbers, lowercase, uppercase, symbols }
 * @returns A random string of characters based on the length of the string and the characters that are
 * included in the string.
 */
export function getPass(data) {
	const { lengthPass } = data
	let result = ''
	let query = ''
	Object.keys(data).forEach(el => {
		if (typeof el === 'string' && data[el] === true) {
			query += dic[el]
		}
	})
	for (let i = 0; i < lengthPass; i++) {
		result += query.charAt(Math.floor(Math.random() * query.length))
	}
	return result.slice(0, lengthPass)
}
