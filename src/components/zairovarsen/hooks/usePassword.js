import { useState } from 'react'

export function usePassword() {
	const lowerCase = 'abcdefghijklmnopqrstuvxyz'
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
	const numbers = '0123456789'
	const specialCharacters = '£$&()*+[]@#^-_!?'

	const [value, setValue] = useState('')
	const [length, setLength] = useState(8)
	const [options, setOptions] = useState({
		lowerCase: false,
		upperCase: false,
		numbers: false,
		specialCharacters: false
	})

	const getRandomValFromArr = (arr) => {
		if (!arr.length) {
			return ''
		}
		const index = Math.floor(Math.random() * arr.length)
		return arr[index]
	}

	const changeOption = (option) => {
		setOptions((prevState) => ({
			...prevState,
			[option]: !prevState[option]
		}))
	}

	const generatePassword = () => {
		let result = ''
		const optionsFiltered = Object.keys(options).reduce((acc, key) => {
			if (options[key]) {
				acc.push(key)
			}
			return acc
		}, [])

		for (let i = 0; i < length; i += 1) {
			const option = getRandomValFromArr(optionsFiltered)

			switch (option) {
			case 'lowerCase':
				result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
				break
			case 'upperCase':
				result += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
				break
			case 'numbers':
				result += numbers.charAt(Math.floor(Math.random() * numbers.length))
				break
			case 'specialCharacters':
				result += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
				break
			default:
				result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
				break
			}
		}
		setValue(result)
	}

	return {
		length,
		setLength,
		value,
		options,
		changeOption,
		generatePassword
	}
}
