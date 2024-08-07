import { useState, useEffect } from 'react'

import { Password } from '../../../components/andresin87/model/index.js'

export default function usePassword({ length, memorable, prefix } = {}) {
	const [password, setPassword] = useState('')
	const [strength, setStrength] = useState({})
	const [{ hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber }, setFlags] = useState({
		hasLowerCase: true,
		hasCapitalLetter: false,
		hasSymbol: false,
		hasNumber: false
	})

	const update = (value) => {
		setPassword(value)
		setStrength(Password.passwordStrength(value))
		const currentFlags = { hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber }
		const hasSettings =
			(settings) =>
			(value, safe = false) =>
				value.length > 0
					? Boolean(
							value.split('').find((value) => value.match(Password.getRegexPattern(settings)))
					  ) // eslint-disable-line no-mixed-spaces-and-tabs
					: safe
		const flags = {
			hasLowerCase: hasSettings({ hasLowerCase: true })(value, true),
			hasCapitalLetter: hasSettings({ hasCapitalLetter: true })(value),
			hasSymbol: hasSettings({ hasSymbol: true })(value),
			hasNumber: hasSettings({ hasNumber: true })(value)
		}
		const result = Object.entries(flags).find(
			([flagKey, flagValue]) => flagValue === true && currentFlags[flagKey] === false
		)
		if (result) {
			const [flagKey, flagValue] = result
			setFlags({ ...currentFlags, [flagKey]: flagValue })
		}
	}

	const generate = (settings = {}) => {
		const newResult = new Password({
			length,
			memorable,
			prefix,
			hasLowerCase,
			hasCapitalLetter,
			hasSymbol,
			hasNumber,
			...settings
		})
		setPassword(newResult[0])
		setStrength(newResult[1])
	}
	const copyToClipboard = async (text = password) => {
		await navigator.clipboard.writeText(text)
	}

	useEffect(() => {
		generate({
			length,
			memorable,
			prefix
		})
	}, [length, memorable, prefix])

	return Object.assign(
		[
			password,
			update,
			strength,
			generate,
			copyToClipboard,
			{ hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber },
			setFlags
		],
		{
			password,
			update,
			strength,
			generate,
			copyToClipboard,
			flags: { hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber },
			setFlags
		}
	)
}
