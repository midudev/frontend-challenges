import { useEffect, useState } from 'react'
import { generatePassword } from '../../components/sergio-jc/func'

const usePassword = () => {
	const [input, setInput] = useState('')
	const [number, setNumber] = useState('10')

	const handlePassword = () => {
		setInput(generatePassword(undefined, number))
	}

	const handleCharacters = (e) => setNumber(e)

	useEffect(() => {
		setInput(generatePassword())
	}, [])
	return {
		input,
		number,
		handleCharacters,
		handlePassword
	}
}

export default usePassword
