import Passowrd from './password'
import Card from './card'
import { Slider } from './slider'
import { useState } from 'react'
import Characters from './characters'

export default function App() {
	const [passwordLength, setPasswordLength] = useState(5)
	const [charactersTypes, setCharacterTypes] = useState(['uppercaseLetters', 'lowercasesLetters'])
	return (
		<div className='flex justify-center items-center h-screen'>
			<Card>
				<h1 className='text-4xl'>Password Generator</h1>
				<Passowrd passwordLength={passwordLength} charactersTypes={charactersTypes} />
				password Length: {passwordLength}
				<Slider
					max={20}
					min={3}
					value={passwordLength}
					changeHandler={(newValue: number) => setPasswordLength(newValue)}
				/>
				<Characters onChangeHandler={(list: string[]) => setCharacterTypes(list)} />
			</Card>
		</div>
	)
}
