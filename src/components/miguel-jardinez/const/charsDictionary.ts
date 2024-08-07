import { TypePassword } from '../utils/generatePassword'

export const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
export const upperCase = 'ABCDEFGHIJKLMNOPQQRSTUVWXYZ'
export const specialChars = '@/~^?¡!¿#$%&'

export const limitAlphabetLower = lowerCase.length
export const limitAlphabetUpper = upperCase.length
export const limitSpecials = specialChars.length

const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max)
}

const selectChar = (chooseCarcter: number): string => {
	switch (chooseCarcter) {
	case 0:
		return lowerCase[getRandomInt(limitAlphabetLower)]

	case 1:
		return upperCase[getRandomInt(limitAlphabetUpper)]

	case 2:
		return specialChars[getRandomInt(limitSpecials)]

	default:
		break
	}
}

const selectTypeOrChar = (type: TypePassword) => {
	switch (type) {
	case 'ALL':
		return getRandomInt(3)

	case 'UPPANDLOW':
		return getRandomInt(2)

	case 'UPPER':
		return getRandomInt(1)

	default:
		return 0
	}
}

export const passwordGenerator = (limit: number, type: TypePassword) => {
	let password: string[] = []

	for (let i = 0; i < limit; i++) {
		const charChosen = selectTypeOrChar(type)
		const char = selectChar(charChosen)
		password = [...password, char]
	}

	return password.join('')
}
