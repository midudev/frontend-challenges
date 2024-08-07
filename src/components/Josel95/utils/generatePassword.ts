import { getRandomNumber } from './getRandomNumber'

const ALPHABET = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const NUMBERS = '1234567890'
const SPECIALS = '!"#$%&/()=?¡*[]-_.:,;<> '

export const generatePassword = (length: number) => {
	const characters = [
		...ALPHABET.split(''),
		...NUMBERS.split(''),
		...SPECIALS.split('')
	]

	const peekCharacter = () => {
		return characters[getRandomNumber(characters.length)]
	}

	const password = Array(length).fill(0).map(peekCharacter)
	return password.join('')
}