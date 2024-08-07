import { ChangeEvent, useState, useEffect } from 'react'
import { ISettings, SettingsOption, usePassword } from '@hooks/cmglezpdev'
import { Settings } from '@components/cmglezpdev/Settings'
import {
	ButtonComponent,
	RangeInputComponent,
	InputComponent,
	StrengthPassword
} from '@components/cmglezpdev/basic-components'

const INITIAL_STATE: SettingsOption[] = [
	{
		name: 'letters',
		checked: true
	},
	{
		name: 'numbers',
		checked: false
	},
	{
		name: 'divide',
		checked: false
	},
	{
		name: 'special',
		checked: false
	}
]

export const CustomPassword = () => {
	const [lengthPassword, setLenghtPassword] = useState(10)
	const [settings, setSettings] = useState<SettingsOption[]>(INITIAL_STATE)
	const { password, generatePassword, passwordStrength } = usePassword()
	const [strengthPassword, setStrengthPassword] = useState<number>(null)

	const handleLengthControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(parseInt(e.target.value))
	}

	const handleGenPassword = () => {
		const set = {}

		for (let i = 0; i < settings.length; i++) {
			const config = settings[i]
			set[config.name] = config.checked
		}
		generatePassword(set as ISettings, lengthPassword)
	}

	useEffect(() => {
		if (!password || password.trim().length <= 0) return
		const strength = passwordStrength(password)
		setStrengthPassword(strength)
	}, [password])

	return (
		<div className='flex flex-col items-center'>
			<InputComponent
				value={password}
				name='password'
				placeholder={'Password'}
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={() => {}}
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

			<Settings
				initalSettings={INITIAL_STATE}
				getValues={setSettings}
			/>
		</div>
	)
}
