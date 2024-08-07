import { useEffect, useMemo, useState } from 'react'
import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { LengthSelector } from '../atoms/LengthSelector'
import { PassBox } from '../molecules/PassBox'
import { generatePassword } from '../utils/generator'

export const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [includeSymbols, setIncludeSymbols] = useState(false)
	const [includeNumbers, setIncludeNumbers] = useState(true)
	const [includeLetters, setIncludeLetters] = useState(true)
	const [newPasswordLength, setNewPasswordLength] = useState(8)

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	const handleGeneratePassword = () => {
		setPassword(generatePassword(newPasswordLength, includeLetters, includeNumbers, includeSymbols))
	}

	const isValidForGeneration = useMemo(() => {
		return includeLetters || includeNumbers || includeSymbols
	}, [includeLetters, includeNumbers, includeSymbols])

	return (
		<div className='bg-white p-8 rounded-2xl'>
			<h3 className='text-lg font-semibold mb-4'>Password generator</h3>
			<div className='space-y-3'>
				<PassBox generatedPassword={password}/>
				<LengthSelector onChange={setNewPasswordLength} value={newPasswordLength} />
				<div className='space-y-1'>
					<Checkbox checked={includeLetters} label='Include letters' onChange={setIncludeLetters}/>
					<Checkbox checked={includeNumbers} label='Include numbers' onChange={setIncludeNumbers}/>
					<Checkbox checked={includeSymbols} label='Include symbols' onChange={setIncludeSymbols}/>
				</div>
				<Button disabled={!isValidForGeneration} fullWidth label='GENERATE!' onClick={handleGeneratePassword} />
			</div>
		</div>
	)
}