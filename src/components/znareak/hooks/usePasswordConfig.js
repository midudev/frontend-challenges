import { useState } from 'react'
import useToggle from './useToggle'
import usePassword from './usePassword'

export default function usePasswordConfig(t) {
	const [withSymbols, toggleSymbols] = useToggle(true)
	const [withNumbers, toggleNumbers] = useToggle(true)
	const [withLower, toggleLower] = useToggle(true)
	const [withUpper, toggleUpper] = useToggle(true)
	const [length, setLength] = useState(10)

	const SECURE_FLAGS = [withSymbols, withNumbers, withLower, withUpper]
	const IS_WRONG_PASSWORD = SECURE_FLAGS.every((f) => !f)
	const IS_SECURE_PASSWORD = SECURE_FLAGS.every(Boolean)

	const { password, generatePassword } = usePassword({
		IS_WRONG_PASSWORD,
		withSymbols,
		withNumbers,
		withLower,
		withUpper,
		length
	})

	const PREFERENCES = [
		{
			text: t('symbols'),
			desc: t('symbolsDesc'),
			checked: withSymbols,
			onChange: toggleSymbols
		},
		{
			text: t('numbers'),
			desc: t('numbersDesc'),
			checked: withNumbers,
			onChange: toggleNumbers
		},
		{
			text: t('uppercase'),
			desc: t('uppercaseDesc'),
			checked: withUpper,
			onChange: toggleUpper
		},
		{
			text: t('lowercase'),
			desc: t('lowercaseDesc'),
			checked: withLower,
			onChange: toggleLower
		}
	]

	return {
		IS_WRONG_PASSWORD,
		IS_SECURE_PASSWORD,
		PREFERENCES,
		setLength,
		length,
		password,
		generatePassword
	}
}
