const validate = (lastValue, newValue) => {
	if (lastValue === newValue) {
		return false
	}
	return true
}

const getNewValue = (characters, password) => {
	let newVal = characters.charAt(Math.floor(Math.random() * characters.length))
	if (!validate(password.slice(-1), newVal)) {
		newVal = getNewValue(characters, password)
	}

	return newVal
}

const NUMERIC = '0123456789'
const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SPECIAL = '!@#$%^&'

const addValuesToArray = (char, array, destination) => {
	if (array.includes(char)) destination.push(char)
}

const isValidPassword = (password, settings) => {
	const { numbers, letters, uppers, specials } = settings
	const numberAmount = []
	const lettersAmount = []
	const specialAmount = []
	const uppersAmount = []
	let valid = true
	password.split('').forEach((char) => {
		addValuesToArray(char, NUMERIC, numberAmount)
		addValuesToArray(char, ALPHA, lettersAmount)
		addValuesToArray(char, ALPHA_UPPER, uppersAmount)
		addValuesToArray(char, SPECIAL, specialAmount)
	})
	valid = valid && numbers ? !!numberAmount.length : valid
	valid = valid && letters ? !!lettersAmount.length : valid
	valid = valid && uppers ? !!uppersAmount.length : valid
	valid = valid && specials ? !!specialAmount.length : valid
	return valid
}

export const generatePaswordValue = (length, charsConfig) => {
	let password = ''
	let chars = charsConfig.letters ? ALPHA : ''
	chars += charsConfig.numbers ? NUMERIC : ''
	chars += charsConfig.specials ? SPECIAL : ''
	chars += charsConfig.uppers ? ALPHA_UPPER : ''
	let characters = chars.split('').sort(() => {
		return Math.random() - 0.5
	})
	characters = characters.join('')
	for (let i = 0; i < length; i++) {
		password += getNewValue(characters, password)
	}
	const isValid = isValidPassword(password, charsConfig)
	if (!isValid) return generatePaswordValue(length, charsConfig)
	return password
}

export const generatePasword = (ref, ctnt) => {
	const theLetters = 'abcdefghijklmnopqrstuvwxyz#%&^+=-'
	const speed = 10
	const increment = 6
	const clen = ctnt.length
	let si = 0
	let stri = 0
	let block = ''
	let fixed = ''
	;(function rustle(i) {
		setTimeout(function () {
			if (--i) {
				rustle(i)
			}
			nextFrame(i)
			si = si + 1
		}, speed)
	})(clen * increment + 1)

	function nextFrame() {
		for (let i = 0; i < clen - stri; i++) {
			const num = Math.floor(theLetters.length * Math.random())
			const letter = theLetters.charAt(num)
			block = block + letter
		}

		if (Number(si) === increment - 1) {
			stri++
		}

		if (Number(si) === increment) {
			fixed = fixed + ctnt.charAt(stri - 1)
			si = 0
		}

		ref.innerHTML = fixed + block
		block = ''
	}
}

export const calculateSecurityLevel = (password) => {
	const splitNumeric = NUMERIC.split('')
	const splitAlpha = ALPHA.split('')
	const splitAlphaUpper = ALPHA_UPPER.split('')
	const splitSpecial = SPECIAL.split('')
	const splitPass = password.split('')
	let hasNumeric, hasSpecial, hasAlpha, hasAlphaUpper
	let securityLevel = 0
	splitPass.forEach((value) => {
		hasNumeric = hasNumeric || splitNumeric.some((num) => num === value)
		hasSpecial = hasSpecial || splitSpecial.some((spec) => spec === value)
		hasAlpha = hasAlpha || splitAlpha.some((alp) => alp === value)
		hasAlphaUpper = hasAlphaUpper || splitAlphaUpper.some((alpN) => alpN === value)
	})
	if (splitPass.length < 10) {
		return 0
	}
	if ((hasNumeric && hasAlpha && hasAlphaUpper) || hasSpecial) {
		securityLevel = 1
	}
	if (hasNumeric && hasAlpha && hasAlphaUpper && hasSpecial) {
		securityLevel = 2
	}
	if (splitPass.length >= 16) {
		securityLevel++
	}
	return securityLevel
}

export const SECURITY_NAMES = {
	0: 'Débil',
	1: 'Normal',
	2: 'Fuerte',
	3: 'Super Fuerte'
}

export const SECURITY_COLORS = {
	0: 'red',
	1: '#d97706',
	2: '#079115',
	3: '#03560c'
}

export const getCheckboxLabel = {
	numbers: 'Numericos',
	letters: 'Letras',
	uppers: 'Mayusculas',
	specials: 'Especiales'
}

export const INITIAL_CHECKBOXES = { numbers: true, letters: true, uppers: true, specials: true }
