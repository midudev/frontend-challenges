import type { FC } from 'react'
import { useState } from 'react'

// Components
import Wrapper from './Wrapper'
import Password from './Password'
import Range, { IOnMove } from './range'

const MIN_RANGE = 4
const MAX_RANGE = 16

const characters = [
	'!@#$%^&*()_+=-[]{}|/?.,<>~;:',
	'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
	'0123456789'
]

const Page: FC = function() {
	const [password, setPassword] = useState<string>('')
	const [range, setRange] = useState({
		percentage: 0,
		quantity: MIN_RANGE
	})

	const handleOnMoveRange = (data: IOnMove) => setRange(data)

	const handleOnClickGeneratePassword = () => {
		const charactersArrLength: number = characters.length
		const passwordArr: Array<string> = []

		for (let i = 0; i < range.quantity; i++) {
			const position: number = i % charactersArrLength
			const theCharacters: string = characters[position]

			const randomIndex: number = Math.floor(Math.random() * (theCharacters.length - 1))

			passwordArr.push(theCharacters[randomIndex])

			if (i === 0) continue

			passwordArr.sort(() => Math.random() - 0.5)
		}

		const thePassword: string = passwordArr.join('')

		setPassword(thePassword)
	}

	return (
		<Wrapper>
			<h1 className='text-2xl text-center font-medium mb-8'>Password Generator</h1>

			<Password
				className='mb-8'
				value={password}
			/>

			<div className='mb-8'>
				<span className='text-gray-400 block mb-2'>Length: <span className='text-gray-200'>{range.quantity}</span></span>

				<div className='bg-[#1C2141] flex items-center p-4 rounded-md'>
					<span className='pr-6'>{MIN_RANGE}</span>
					<Range
						className='w-full'
						min={MIN_RANGE}
						max={MAX_RANGE}
						percentage={range.percentage}
						onMove={handleOnMoveRange}
					/>
					<span className='pl-6'>{MAX_RANGE}</span>
				</div>
			</div>

			<button
				className='w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 min-h-[3.5rem] rounded-md px-4'
				type='button'
				onClick={handleOnClickGeneratePassword}
			>
        Generate Password
			</button>
		</Wrapper>
	)
}

export default Page