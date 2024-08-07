import { useContext, useCallback } from 'react'
import GeneratorContext from '../context/generatorContext'
import generatePassword from '../service/passwordGenerator'

export default function useGenerator() {
	const { length, password, setLength, setPassword } = useContext(GeneratorContext)

	const changeLength = useCallback(
		(passLength) => {
			setLength(passLength)
		},
		[setLength]
	)

	const createPassword = useCallback(() => {
		const newpass = generatePassword({ length })
		setPassword(newpass)
	}, [setPassword, length])

	const copyToClipboard = useCallback((password) => {
		navigator.clipboard.writeText(password).then(alert('Passwprd copied to clipboard!'))
	})
	return {
		length,
		password,
		changeLength,
		createPassword,
		copyToClipboard
	}
}
