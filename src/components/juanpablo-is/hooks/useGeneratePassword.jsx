import { useState } from 'react'

const options = {
	symbols: [
		{ start: 33, end: 47 },
		{ start: 58, end: 64 },
		{ start: 91, end: 96 },
		{ start: 123, end: 126 }
	],
	numbers: [{ start: 48, end: 57 }],
	mayus: [{ start: 65, end: 90 }],
	minus: [{ start: 97, end: 122 }]
}

const useGeneratePassword = () => {
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const mainProcess = (length, count, optionsCharacter) => {
		let text = ''

		const mapped = Object.keys(optionsCharacter).reduce((acc, allowed) => {
			if (allowed && options[allowed]) {
				acc.push([[allowed], options[allowed]])
			}

			return acc
		}, [])

		while (text.length < length) {
			const randomOption = Math.floor(Math.random() * mapped.length + 1)
			const option = mapped[randomOption - 1]

			const randomItem = option[1].length === 1 ? 0 : Math.floor(Math.random() * option[1].length)
			const item = option[1][randomItem]

			const character = Math.floor(Math.random() * (item.end - item.start + 1) + item.start)

			const charCodeString = String.fromCharCode(character)

			// Check if the character exists in a range count index
			if (text.length === 0 || ![...text.substring(text.length - count)].includes(charCodeString)) {
				text += charCodeString
			}
		}

		setPassword(text)
		return text
	}

	const generateNewPassword = ({ length = 0, count = 0, options = {} }) => {
		setLoading(true)
		const password = mainProcess(length, count, options)
		setLoading(false)

		const passwords = JSON.parse(window.sessionStorage.getItem('password-generated') || '[]')
		passwords.push({ password, date: +new Date() })
		window.sessionStorage.setItem('password-generated', JSON.stringify(passwords))
	}

	return { password, loading, generateNewPassword }
}

export default useGeneratePassword
