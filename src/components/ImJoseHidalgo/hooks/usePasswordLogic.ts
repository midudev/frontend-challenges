import { useState, useRef } from 'react'
import { FILTERS_VALUES } from '../constants/defaultValues'

interface IProps {
	passwordLength: number
	filters: string[]
}

export const usePasswordLogic = ({ passwordLength, filters }: IProps) => {
	const { uppercase, lowercase, numbers, symbols } = FILTERS_VALUES
	const [password, setPassword] = useState('')
	const tooltipRef = useRef<HTMLSpanElement>(null)
	const generatePassword = () => {
		const upper = filters.includes(uppercase) ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
		const lower = filters.includes(lowercase) ? 'abcdefghijklmnopqrstuvwxyz' : ''
		const number = filters.includes(numbers) ? '0123456789' : ''
		const symbol = filters.includes(symbols) ? '!@#$%&' : ''
		const passType = upper + lower + number + symbol
		let generatedPassword = ''
		for (let i = 0; i < passwordLength; i++) {
			generatedPassword += passType.charAt(Math.floor(Math.random() * passType.length))
		}
		setPassword(generatedPassword)
	}
	const copyPassword = () => {
		tooltipRef.current.innerText = password ? 'Copied!' : 'Empty :('
		tooltipRef.current?.classList.add('show')
		password && navigator.clipboard.writeText(password)
		setTimeout(() => {
			tooltipRef.current?.classList.remove('show')
		}, 1000)
	}
	return { password, generatePassword, copyPassword, tooltipRef }
}
