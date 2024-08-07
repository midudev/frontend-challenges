export const Allowed = {
	Uppers: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	Lowers: 'abcdefghijklmnopqrstuvwxyz',
	Numbers: '0123456789',
	Symbols: '&/\\^=?!@#$%*+.,:;|',
	Brackets: '()[]{}<>',
	Space: ' ',
	Dashes: '-_',
	'Non-ASCII': 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ'
}
const getRandomCharFromString = (str: string) => str.charAt(Math.floor(Math.random() * str.length))

export function generatePassword (length: number, included: string[]) {
	let password = ''

	// Add a random character from each included type
	included.forEach(type => {
		password += getRandomCharFromString(Allowed[type])
	})

	// Fill the rest with random characters
	const allowed = included.map((type) => Allowed[type]).join('')
	for (let i = password.length; i < length; i++) {
		password += getRandomCharFromString(allowed)
	}
	return password
}

export function getPasswordEntropy (length: number, included: string[]) {
	if (included.length === 0) return 0
	const poolSize = included.map((type) => Allowed[type]).join('').length
	return Math.log2(poolSize) * length
}
