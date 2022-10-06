import { useState } from 'react'
import { Tittle, randomPassword, Output, GenerateButton, Range } from './'

export const Card = () => {
	const [rangeCharacters, setRangeCharacters] = useState(6)
	const [password, setPassword] = useState('')
	const [copy, setCopy] = useState(false)

	const onSubmitGeneratePassword = () => {
		setCopy(false)
		const password = randomPassword(rangeCharacters)
		setPassword(password)
	}
	return (
		<div className='mx-auto max-w-md'>
			<Tittle children={'GENERATE PASSWORD'} />
			<div className='space-y-6 py-8 text-base leading-7 text-white'>
				<Output password={password} copy={copy} setCopy={setCopy} />
				<Range rangeCharacters={rangeCharacters} setRangeCharacters={setRangeCharacters} />
				<GenerateButton onSubmitGeneratePassword={onSubmitGeneratePassword} />
			</div>
		</div>
	)
}
