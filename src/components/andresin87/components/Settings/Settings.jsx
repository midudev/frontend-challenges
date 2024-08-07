import { Toggle, Slider } from '../index.js'

import './index.css'

const Settings = ({
	password,
	setLength,
	hasLowerCase,
	hasCapitalLetter,
	hasSymbol,
	hasNumber,
	setFlags,
	generate
}) => {
	const handleChangeFlag =
		(key) =>
			(event, { value }) => {
				const currentFlags = {
					hasLowerCase,
					hasCapitalLetter,
					hasSymbol,
					hasNumber
				}
				let flags = { ...currentFlags, [key]: !value }
				if (!Object.values(flags).includes(true)) {
					flags = { ...currentFlags, [key]: !value, hasLowerCase: true }
				}
				setFlags(flags)
				const result = Object.entries(flags).find(
					([flagKey, flagValue]) => flagValue === false && currentFlags[flagKey] === true
				)
				if (result) {
					generate({ length: password.length, ...flags })
				}
			}
	return (
		<div className='settings'>
			<div className='settings-row'>
				<div className='settings-item'>
					<Slider value={password.length} onChange={(ev, { value }) => setLength(value)} />
				</div>
			</div>
			<div className='settings-row'>
				<div className='settings-item'>
					<Toggle
						nodes={[<i className='icon'>a</i>, <i className='icon'>a</i>]}
						value={hasLowerCase}
						onChange={handleChangeFlag('hasLowerCase')}
						isDisabled={hasLowerCase && !hasCapitalLetter && !hasSymbol && !hasNumber}
					/>
				</div>
				<div className='settings-item'>
					<Toggle
						nodes={[<i className='icon'>A</i>, <i className='icon'>A</i>]}
						value={hasCapitalLetter}
						onChange={handleChangeFlag('hasCapitalLetter')}
					/>
				</div>
				<div className='settings-item'>
					<Toggle
						nodes={[<i className='icon'>1</i>, <i className='icon'>1</i>]}
						value={hasNumber}
						onChange={handleChangeFlag('hasNumber')}
					/>
				</div>
				<div className='settings-item'>
					<Toggle
						nodes={[<i className='icon'>#</i>, <i className='icon'>#</i>]}
						value={hasSymbol}
						onChange={handleChangeFlag('hasSymbol')}
					/>
				</div>
			</div>
		</div>
	)
}

export default Settings
