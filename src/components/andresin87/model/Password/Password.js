class Password {
	/** This is inspired in 'password-generator' and 'check-password-generator' libraries */
	static #LETTER = /[a-z]$/i
	static #VOWEL = /[aeiou]$/i
	static #CONSONANT = /[bcdfghjklmnpqrstvwxyz]$/i

	static #STRENGTH_OPTIONS = [
		{
			id: 0,
			value: '🔴',
			minDiversity: 0,
			minLength: 0
		},
		{
			id: 1,
			value: '🟠',
			minDiversity: 2,
			minLength: 6
		},
		{
			id: 2,
			value: '🟡',
			minDiversity: 4,
			minLength: 8
		},
		{
			id: 3,
			value: '🟢',
			minDiversity: 4,
			minLength: 10
		}
	]

	static #RULES = [
		{
			regex: '[a-z]',
			message: 'lowercase'
		},
		{
			regex: '[A-Z]',
			message: 'uppercase'
		},
		{
			regex: '[0-9]',
			message: 'number'
		}
	]

	static #ALLOWED_SYMBOLS = '!"#$%&\'()*+,-./:;<=>?@[\\\\\\]^_`{|}~'

	#password = function (
		length = 10,
		memorable = false,
		prefix = '',
		hasLowerCase,
		hasCapitalLetter,
		hasSymbol,
		hasNumber
	) {
		let char = ''
		let n
		let i
		const validChars = []

		let pattern = Password.getRegexPattern({ hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber })

		// Non memorable passwords will pick characters from a pre-generated
		// list of characters
		if (!memorable) {
			for (i = 33; i <= 126; i += 1) {
				char = String.fromCharCode(i)
				if (char.match(pattern)) {
					validChars.push(char)
				}
			}

			if (!validChars.length) {
				throw new Error(
					`Could not find characters that match the password pattern ${pattern} . Patterns must match individual characters, not the password as a whole.`
				)
			}
		}

		while (prefix.length < length) {
			if (memorable) {
				if (prefix.match(Password.#CONSONANT)) {
					pattern = Password.#VOWEL
				} else {
					pattern = Password.#CONSONANT
				}
				n = this.#rand(33, 126)
				char = String.fromCharCode(n)
			} else {
				char = validChars[this.#rand(0, validChars.length)]
			}
			if (memorable) {
				char = char.toLowerCase()
			}
			if (char.match(pattern)) {
				prefix = '' + prefix + char
			}
		}
		return prefix
	}

	#rand = function (min, max) {
		let key
		let value
		const arr = new Uint8Array(max)
		this.#getRandomValues(arr)
		for (key in arr) {
			// eslint-disable-next-line no-prototype-builtins
			if (arr.hasOwnProperty(key)) {
				value = arr[key]
				if (value >= min && value < max) {
					return value
				}
			}
		}
		return this.#rand(min, max)
	}

	#getRandomValues = function (buf) {
		if (crypto && crypto.getRandomValues) {
			crypto.getRandomValues(buf)
		} else {
			throw new Error('No secure random number generator available.')
		}
	}

	static getRegexPattern = ({ hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber }) => {
		const regexString = [
			hasLowerCase && 'a-z',
			hasCapitalLetter && 'A-Z',
			hasSymbol && Password.#ALLOWED_SYMBOLS,
			hasNumber && '0-9'
		]
			.filter(Boolean)
			.join('')
		return regexString ? new RegExp(`^[${regexString}]*$`) : /\w/
	}

	static passwordStrength = function (
		password = '',
		dataOptions = Password.#STRENGTH_OPTIONS,
		symbols = Password.#ALLOWED_SYMBOLS
	) {
		const options = structuredClone(dataOptions)
		const rules = Password.#RULES
		options[0].minDiversity = 0
		options[0].minLength = 0
		if (symbols) {
			rules.push({
				regex: `[${symbols}]`,
				message: 'symbol'
			})
		}
		const strength = {}

		strength.contains = rules
			.filter((rule) => new RegExp(`${rule.regex}`).test(password))
			.map((rule) => rule.message)

		strength.length = password.length

		const fulfilledOptions = options
			.filter((option) => strength.contains.length >= option.minDiversity)
			.filter((option) => strength.length >= option.minLength)
			.sort((o1, o2) => o2.id - o1.id)
			.map((option) => ({ id: option.id, value: option.value }))

		Object.assign(strength, fulfilledOptions[0])

		return strength
	}

	constructor({
		length = 10,
		memorable = false,
		prefix = '',
		hasLowerCase,
		hasCapitalLetter,
		hasSymbol,
		hasNumber
	}) {
		const password = this.#password(
			length,
			memorable,
			prefix,
			hasLowerCase,
			hasCapitalLetter,
			hasSymbol,
			hasNumber
		)
		const strength = Password.passwordStrength(password)

		return [password, strength]
	}
}

export default Password
