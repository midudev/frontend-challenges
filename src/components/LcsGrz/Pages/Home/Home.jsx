// @vendors
import React, { useState, useEffect, useMemo } from 'react'
// @components
import { CheckBox, Range, AboutMe, PasswordBox, Divider } from '../../Components'
// @utils
import randomPasswordGenerator, { getPasswordEntropy } from '../../Scripts/RPG'
// @config
import settingsKeys from '../../config/settingsKeys'
// @styles
import './Home.css'

// ─────────────── ∞ ───────────────

const defaultConfig = {
	[settingsKeys.LENGTH]: 25,
	[settingsKeys.LOWER_CASE]: true,
	[settingsKeys.UPPER_CASE]: true,
	[settingsKeys.NUMBERS]: true,
	[settingsKeys.SIMBOLS]: true,
	[settingsKeys.ESPACES]: false,
	[settingsKeys.EMOJIS]: false
}

// ─────────────── ∞ ───────────────

export default function Page() {
	const [settings, setSettings] = useState(defaultConfig)
	const [randomPassword, setRandomPassword] = useState('')

	const allowDisable = useMemo(() => {
		const { length, ...charsConfig } = settings

		return Object.values(charsConfig).filter(Boolean).length === 1
	}, [settings])

	const handleInputChange = ({ target }) => {
		const { type, value, name } = target

		setSettings((prevState) => ({
			...prevState,
			[name]: type === 'button' ? !prevState[name] : value
		}))
	}

	const generatePassword = () => {
		setRandomPassword(randomPasswordGenerator(settings))
	}

	useEffect(generatePassword, [settings])

	return (
		<main className='lcsgrz-h-container'>
			<div className='lcsgrz-h-content-box'>
				<div className='lcsgrz-h-title-box'>
					<label className='lcsgrz-h-title'>RANDOM</label>
					<label className='lcsgrz-h-title'>PASSWORD</label>
					<label className='lcsgrz-h-title'>GENERATOR</label>
				</div>
				<Divider height={16} />
				<label className='lcsgrz-h-subtitle'>
					Create strong and secure passwords to keep your accounts safe
				</label>
				<Divider height={50} />
				<PasswordBox
					password={randomPassword}
					entropy={getPasswordEntropy(settings)}
					onCreate={generatePassword}
				/>
				<div className='lcsgrz-h-settings'>
					<Divider height={50} />
					<Range
						name={settingsKeys.LENGTH}
						label='Password Length'
						min='4'
						max='64'
						value={settings[settingsKeys.LENGTH]}
						onChange={handleInputChange}
					/>

					<Divider height={36} />
					<div className='lcsgrz-h-checkbox-container'>
						<div className='lcsgrz-h-checkbox-box'>
							<CheckBox
								name={settingsKeys.LOWER_CASE}
								label='Allow Lowercase (abc)'
								isChecked={settings[settingsKeys.LOWER_CASE]}
								onChange={handleInputChange}
								disabled={allowDisable && settings[settingsKeys.LOWER_CASE]}
							/>
							<Divider height={28} />
							<CheckBox
								name={settingsKeys.UPPER_CASE}
								label='Allow Uppercase (ABC)'
								isChecked={settings[settingsKeys.UPPER_CASE]}
								onChange={handleInputChange}
								disabled={allowDisable && settings[settingsKeys.UPPER_CASE]}
							/>
							<Divider height={28} />
							<CheckBox
								name={settingsKeys.NUMBERS}
								label='Allow Numbers (0-9)'
								isChecked={settings[settingsKeys.NUMBERS]}
								onChange={handleInputChange}
								disabled={allowDisable && settings[settingsKeys.NUMBERS]}
							/>
						</div>
						<Divider width={28} />
						<div className='lcsgrz-h-checkbox-box'>
							<CheckBox
								name={settingsKeys.SIMBOLS}
								label='Allow Symbols (!@#$%^&*()+)'
								isChecked={settings[settingsKeys.SIMBOLS]}
								onChange={handleInputChange}
								disabled={allowDisable && settings[settingsKeys.SIMBOLS]}
							/>
							<Divider height={28} />
							<CheckBox
								name={settingsKeys.ESPACES}
								label='Allow Espaces (AbC 0Fd)'
								isChecked={settings[settingsKeys.ESPACES]}
								onChange={handleInputChange}
								disabled={allowDisable && settings[settingsKeys.ESPACES]}
							/>
							<Divider height={28} />
							<CheckBox
								name={settingsKeys.EMOJIS}
								label='Allow Alt Emojis (♫♥♦♣♠★)'
								hint='EXPERIMENTAL, may not work on all platforms'
								isChecked={settings[settingsKeys.EMOJIS]}
								onChange={handleInputChange}
								disabled={allowDisable && settings[settingsKeys.EMOJIS]}
							/>
						</div>
					</div>
					<Divider height={20} />
					<label className='lcsgrz-h-settings-label'>
						Use the settings to specify parameters to improve your password security
					</label>
				</div>
			</div>
			<Divider height={20} />
			<AboutMe />
		</main>
	)
}
