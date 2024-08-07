import { PasswordSetting } from '../models'

const LOWERCASE = [
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
const UPPERCASE = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
]
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const SYMBOLS = ['~', '@', '#', '_', '^', '*', '%', '/', '.', '+', ':', ';', '=']

export const passwordGenerator = (passwordSetting: PasswordSetting) => {
	const { passwordLength, lowercase, uppercase, numbers, symbols } = passwordSetting
	let passwordGenerated = ''
	let characters: string[] = []
	if (lowercase.value) characters = [...characters, ...LOWERCASE]
	if (uppercase.value) characters = [...characters, ...UPPERCASE]
	if (numbers.value) characters = [...characters, ...NUMBERS]
	if (symbols.value) characters = [...characters, ...SYMBOLS]
	const getRandomIndex = (length: number) => Math.floor(Math.random() * length)
	while (passwordGenerated.length < passwordLength.value) {
		passwordGenerated += characters[getRandomIndex(characters.length)]
	}
	return passwordGenerated
}
