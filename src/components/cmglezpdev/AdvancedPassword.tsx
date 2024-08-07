import { ChangeEvent, useState, useEffect } from 'react'
import { usePassword } from '@hooks/cmglezpdev'
import {
	ButtonComponent,
	InputComponent,
	RangeInputComponent,
	StrengthPassword
} from './basic-components'

export const AdvancedPassword = () => {
	const [phrase, setPhrase] = useState('')
	const [lengthPassword, setLenghtPassword] = useState(10)
	const [strengthPassword, setStrengthPassword] = useState<number>(null)
	const { password, passwordStrength, generatePasswordByPhrase } = usePassword()

	const handleLengthControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(parseInt(e.target.value))
	}

	const handleGenPassword = () => {
		generatePasswordByPhrase(phrase, lengthPassword)
	}

	useEffect(() => {
		if (!password || password.trim().length <= 0) return
		const strength = passwordStrength(password)
		setStrengthPassword(strength)
	}, [password])

	return (
		<div className='flex flex-col items-center'>
			<InputComponent
				name='password'
				value={password}
				placeholder='Password'
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={() => {}}
			/>

			<InputComponent
				name='phrase'
				value={phrase}
				placeholder='Enter a Recovery Phrase'
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={(e) => { setPhrase(e.target.value) }}
			/>

			<StrengthPassword
				strength={strengthPassword}
			/>

			<RangeInputComponent
				value={lengthPassword}
				onChange={handleLengthControl}
			/>

			<ButtonComponent
				textButton='Generate Password'
				onClick={handleGenPassword}
			/>
		</div>
	)
}
