import { PasswordGenerator } from '../passwordGenerator'

const LOWERCASES = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'

describe('password generator function', () => {
	it('should return the correct number of charracter', () => {
		const password = PasswordGenerator(5, ['uppercaseLetters', 'lowercasesLetters'])
		expect(password.length).toEqual(5)
	})
	it('should return only numbers', () => {
		const password = PasswordGenerator(5, ['numbers'])
		password.split('').forEach((letter) => {
			expect(NUMBERS).toMatch(letter)
		})
	})
	it('should return only Uppecases', () => {
		const password = PasswordGenerator(5, ['uppercaseLetters'])
		password.split('').forEach((letter) => {
			expect(UPPERCASES).toMatch(letter)
		})
	})
	it('should return only Lowercases', () => {
		const password = PasswordGenerator(5, ['lowercasesLetters'])
		password.split('').forEach((letter) => {
			expect(LOWERCASES).toMatch(letter)
		})
	})
	it('should return only Lowercases and Uppecases', () => {
		const password = PasswordGenerator(5, ['lowercasesLetters', 'uppercaseLetters'])
		password.split('').forEach((letter) => {
			expect(LOWERCASES + UPPERCASES).toMatch(letter)
		})
	})
})
