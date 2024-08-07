import { useState } from 'react'
import InputSlider from './InputSlider'
import { generatePassword } from '@components/codingcodax/utils'
import GeneratePasswordButton from './GeneratePassowordButton'
import InputPassword from './InputPassword'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(15)
	const [passwordIsVisible, setPasswordIsVisible] = useState(false)
	const [passwordIsCopy, setPasswordIsCopy] = useState(false)

	const buttonHandleChange = (e) => {
		e.preventDefault()

		const passwordConfig = {
			length: passwordLength,
			numbers: true,
			symbols: true,
			lowercase: true,
			uppercase: true
		}

		const passwordGenerated = generatePassword(passwordConfig)
		console.log(passwordGenerated, passwordConfig)
		setPassword(passwordGenerated)
	}

	const inputHandleChange = (e) => {
		const value = e.target.value

		setPasswordLength(+value)
	}

	const toggleIsVisible = (e) => {
		e.preventDefault()

		setPasswordIsVisible((prevValue) => !prevValue)
	}

	const copyPassword = (e) => {
		e.preventDefault()
		if (!navigator.clipboard) return

		navigator.clipboard.writeText(password)
		setPasswordIsCopy(true)

		setTimeout(() => setPasswordIsCopy(false), 500)
	}

	return (
		<div className='max-w-xs w-full'>
			<h1 className='mb-10 text-indigo-300 text-2xl font-bold text-center'>Password Generator</h1>

			<form className='grid gap-8'>
				<InputSlider length={passwordLength} handleChange={inputHandleChange} min={8} max={80} />
				<GeneratePasswordButton handleChange={buttonHandleChange} />
				<InputPassword
					password={password}
					isVisible={passwordIsVisible}
					toggleIsVisible={toggleIsVisible}
					isCopy={passwordIsCopy}
					copyPassword={copyPassword}
				/>
			</form>
		</div>
	)
}

export default PasswordGenerator
