import { useState, useEffect } from 'react'

export const usePassword = () => {
	const [password, setPassword] = useState()
	const [length, setLength] = useState(16)

	useEffect(() => {
		generatePassword()
	}, [length])

	const changeLength = (newLength) => setLength(newLength)

	const generatePassword = () => {
		const charSet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%?')
		const charArr = [...charSet]
		let newPass = ''

		for (let i = 0; i < length; i++) {
			const randNum = Math.floor(Math.random() * (charArr.length - 5)) + 4
			newPass += charArr[randNum]
		}
		setPassword(newPass)
	}

	return { generatePassword, changeLength, password, length }
}
