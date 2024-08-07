import { useState } from 'react'
import { generatePassword, TypePassword } from '../utils/generatePassword'

export const useGeneratePassword = () => {
	const [password, setPassword] = useState<string>()

	const onCopyPassword = () => {
		navigator.clipboard.writeText(password)
	}

	const onGeneratePassword = (limitPassword: number, type: TypePassword) => {
		const password = generatePassword({ limitPassword, type })
		setPassword(password)
	}

	return {
		onCopyPassword,
		onGeneratePassword,
		password
	}
}
