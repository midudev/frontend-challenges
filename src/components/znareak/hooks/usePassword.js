import { useState, useEffect, useCallback } from 'react'

export default function usePassword({
	IS_WRONG_PASSWORD,
	withSymbols,
	withNumbers,
	withLower,
	withUpper,
	length
}) {
	const LOWERS = 'abcdefghijklmnopqrstuvwxyz'
	const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const NUMBERS = '0123456789'
	const SYMBOLS = '$#%.@*_&+'
	const [password, setPassword] = useState('')

	const getRandomChar = useCallback((arr) => {
		const i = Math.floor(Math.random() * arr.length)
		const char = arr[i]
		return char
	}, [])

	const generatePassword = useCallback(() => {
		if (IS_WRONG_PASSWORD) return
		let characters = ''
		let passwordResult = ''
		const addCharacters = (flag, chars) => {
			if (flag) {
				passwordResult += getRandomChar(chars)
				characters += chars
			}
		}
		addCharacters(withSymbols, SYMBOLS)
		addCharacters(withNumbers, NUMBERS)
		addCharacters(withLower, LOWERS)
		addCharacters(withUpper, UPPERS)

		for (let i = passwordResult.length; i < length; i++) {
			passwordResult += getRandomChar(characters)
		}

		setPassword(passwordResult)
	}, [IS_WRONG_PASSWORD, withSymbols, withNumbers, withLower, withUpper, length, getRandomChar])

	useEffect(generatePassword, [generatePassword])

	return { password, generatePassword }
}
