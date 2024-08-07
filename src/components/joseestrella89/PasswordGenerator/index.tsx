import React, { ChangeEvent, useState } from 'react'
import CardContainer from '@components/joseestrella89/CardContainer'
import InputText from '@components/joseestrella89/InputText'
import Slider from '@components/joseestrella89/Slider'
import {
	generatePassword,
	PASSWORD_PATTERN
} from '@components/joseestrella89/PasswordGenerator/RandomValuesGenerator'

const PasswordGenerator = () => {
	const [password, setPassword] = useState<string>('')
	const [animatePasswordGenerated, setAnimatePasswordGenerated] = useState<boolean>(false)
	const [passwordLength, setPasswordLength] = useState<number>(12)

	const handleNewPasswordLenght = (evt: ChangeEvent<HTMLInputElement>) => {
		const { target } = evt
		const { value } = target
		setPasswordLength(Number(value))
	}

	const handleOnGeneratePassword = () => {
		const newPassword = generatePassword(passwordLength, PASSWORD_PATTERN)
		setPassword(newPassword)
		setAnimatePasswordGenerated(true)
	}

	const handleOnCopyPassword = () => {
		navigator.clipboard.writeText(password)
		setAnimatePasswordGenerated(false)
	}

	return (
		<CardContainer>
			<h1 className='font-sans text-2xl font-bold mb-4'>Password Generator</h1>
			<InputText
				action={handleOnCopyPassword}
				actionText='Copy'
				hasAction
				placeholder='Password'
				showAnimation={animatePasswordGenerated}
				value={password}
			/>
			<Slider
				label='Password Lenght'
				value={passwordLength.toString()}
				onChange={handleNewPasswordLenght}
			/>
			<div className='flex items-center justify-center'>
				<input
					type='submit'
					value='Generate'
					onClick={handleOnGeneratePassword}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded focus:outline-none focus:shadow-outline'
				/>
			</div>
		</CardContainer>
	)
}

export default PasswordGenerator
