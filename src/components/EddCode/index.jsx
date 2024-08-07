import { useRef, useState } from 'react'
import Range from './Range'
import Password from './Password'

const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(8)
	const [password, setPassword] = useState('')
	const { current: letters } = useRef('abcdefghijklmnopqrstuvwxyz')
	const { current: uppercaseLetters } = useRef(letters.toUpperCase())
	const { current: numbers } = useRef('0123456789')
	const { current: symbols } = useRef('!@#$%^&*()_+~`|}{[]:;?><,./-=')
	const { current: pwdOptions } = useRef(`${letters}${uppercaseLetters}${numbers}${symbols}`)


	const handleChangeRange = (evt) => {
		setPasswordLength(evt.target.value)
	}

	const handleCreatePassword = () => {
		generatePasswordRecursivly('', Number(passwordLength))
	}

	const generatePasswordRecursivly = (newPassword, length) => {
		if (length === 0) {
			setPassword(newPassword)
			return newPassword
		}

		newPassword += pwdOptions[Math.floor(Math.random() * pwdOptions.length)]

		return generatePasswordRecursivly(newPassword, length - 1)
	}

	return (
		<div className='text-white shadow-md shadow-cyan-500/50 rounded mt-10 p-8'>
			<Range passwordLength={passwordLength} changeRange={handleChangeRange}/>
			<Password password={password}/>
			<button
				className='mt-8 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'
				onClick={handleCreatePassword}
			>
				Create password
			</button>
		</div>
	)
}

export default PasswordGenerator

