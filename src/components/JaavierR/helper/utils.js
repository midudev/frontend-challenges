export const ABC_ARRAY = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
]

const passwordsMinMaxLength = {
	'PIN Code': { min: 4, max: 12 },
	'Memorable Password': { min: 3, max: 15 },
	'Random Password': { min: 8, max: 100 }
}

export const separators = {
	Hyphens: '-',
	Underscores: '_',
	Periods: '.',
	Commas: ',',
	Spaces: ' '
}

export function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

export function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

export function getNumber() {
	return Math.floor(Math.random() * 10)
}

export function getSymbol() {
	const symbols = [33, 42, 45, 46, 64, 95]
	return String.fromCharCode(symbols[Math.floor(Math.random() * symbols.length)])
}

export function setMinMaxLength({ length, min, max }) {
	return length < min ? min : length > max ? max : length
}

export function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomOddIntFromInterval(min, max) {
	if (min % 2 === 0) ++min
	return 2 * randomIntFromInterval(1, (max - min) / 2) - 1
}

export function makeRandomString({ arr, length = null }) {
	if (!length) length = Math.random() < 0.5 ? 3 : 4
	return [...arr]
		.sort(() => 0.5 - Math.random())
		.splice(0, length)
		.join('')
}

export function checkIfIncludeAtLeastOneNumberAndSymbol(arr) {
	const password = arr.join('')
	const arrLength = arr.length - 1
	const idx = randomOddIntFromInterval(0, arrLength)

	if (!/\d/.test(password)) {
		arr[idx] = getNumber()
	}

	if (!/[!@*_\-/.]/.test(password)) {
		arr[idx] = getSymbol()
	}

	return arr
}

export function validatePasswordMinMaxLength({ type, length }) {
	if (length < passwordsMinMaxLength[type].min) {
		length = passwordsMinMaxLength[type].min
	}

	if (length > passwordsMinMaxLength[type].max) {
		length = passwordsMinMaxLength[type].max
	}

	return length
}
