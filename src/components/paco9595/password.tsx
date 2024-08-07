import { useEffect, useState } from 'react'
import { PasswordGenerator } from './passwordGenerator'
import { PasswordType } from './types'
import './styles/clipboard.css'

export default function Passowrd({ passwordLength, charactersTypes }: PasswordType) {
	const [word, setWord] = useState('')
	const [copyState, setCopyState] = useState('copy')

	useEffect(() => {
		const newWord = PasswordGenerator(passwordLength, charactersTypes)
		setWord(newWord)
	}, [passwordLength, charactersTypes])

	const clickHandler = () => {
		navigator.clipboard.writeText(word)
		setCopyState('copyed')
	}
	return (
		<div className='password bg-[#C9EAD7] h-11 rounded-lg py-2 px-2 text-black tracking-[4px] font-medium text-xl mt-8 mb-5 flex justify-between'>
			{word}
			{word && (
				<div className='clipboard' onMouseLeave={() => setCopyState('copy')}>
					<span className='popover'>{copyState}</span>
					<img
						width={16}
						height={16}
						src='/paco9595/clipboard.svg'
						alt='clipboard icon'
						onClick={clickHandler}
					/>
				</div>
			)}
		</div>
	)
}
