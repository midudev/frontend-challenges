import { useState } from 'react'

import { Password } from './Password'
import { Input } from './Input'
import { ButtonGenerator } from './ButtonGenerator'
import { ButtonCopy } from './ButtonCopy'

import './style/passwordGenerator.css'

export const PasswordGenerator = () => {
	const [password, setPassword] = useState('need a password?')
	const [value, setValue] = useState(10)

	return (
		<div id='eyubkh-generate-card'>
			<Password>{password}</Password>
			<div id='eyubkh-generate-card-layaut'>
				<ButtonGenerator value={value} setPassword={setPassword} />
				<Input value={value} setValue={setValue} />
				<ButtonCopy password={password} />
			</div>
		</div>
	)
}
