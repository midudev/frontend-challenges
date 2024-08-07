export interface GeneratePasswordParams {
	length: number;
	uppercases: boolean;
	lowercases: boolean;
	numbers: boolean;
	symbols: boolean;
}

interface Dictionary {
	upperCases: string;
	lowerCases: string;
	numbers: string;
	symbols: string;
}

const minimumPasswordLength = 4
const dictionary: Dictionary = {
	upperCases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lowerCases: 'abcdefghijklmnopqrstuvwxyz',
	numbers: '0123456789',
	symbols: '!@#$%&*()_+{}[]:;<>?,./'
}

const getRandomNumber = (max: number): number => Math.floor(Math.random() * max)

const getRandomChar = (chars: string[], charsIndex: number): string => {
	const charIndex = getRandomNumber(chars[charsIndex].length)
	return chars[charsIndex][charIndex]
}

const generatePassword = ({
	length,
	uppercases,
	lowercases,
	numbers,
	symbols
}: GeneratePasswordParams): string => {
	const lengthPassword = Math.max(length, minimumPasswordLength)
	const chars: string[] = [
		uppercases ? dictionary.upperCases : [],
		lowercases ? dictionary.lowerCases : [],
		numbers ? dictionary.numbers : [],
		symbols ? dictionary.symbols : []
	].flat()

	const password: string[] = []
	for (let i = 0; i < minimumPasswordLength; i++) {
		password.push(getRandomChar(chars, i % chars.length))
	}

	if (lengthPassword > minimumPasswordLength) {
		for (let i = minimumPasswordLength; i < lengthPassword; i++) {
			const randomChar = getRandomChar(chars, getRandomNumber(chars.length))
			password.push(randomChar)
		}
	}

	return password.join('')
}

export { generatePassword }
