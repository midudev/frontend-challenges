import { useEffect, useState } from 'react'

export default function TestComponent() {
	const [copied, setCopied] = useState(false)
	const [generatedPassword, setGeneratedPassword] = useState('')

	const options = {
		letters: 'abcdefghijkmnlopqrstuvwxyz',
		numbers: '1234567890',
		symbols: '$%&#/^@'
	}

	const passwordLength = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	let finalArray = []

	const randomOptions = () => {
		const optionsArray = ['letters', 'numbers', 'symbols']

		const select = optionsArray[Math.floor(Math.random() * optionsArray.length)]

		return select
	}

	const getRandomPassword = () => {
		finalArray = []

		passwordLength.map(() => {
			finalArray.push(options[randomOptions()].charAt(Math.floor(Math.random() * 7)))
		})

		setGeneratedPassword(finalArray.toString().replace(/,/g, ''))
	}

	useEffect(() => {
		setTimeout(() => {
			getRandomPassword()
		}, 1000)
	}, [])

	const onClick = () => {
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 4000)
	}

	return (
		<div className='text-white flex flex-col h-screen justify-center items-center bg-black '>
			<article className='rounded-md  p-10 mb-64'>
				<section className=' font-extrabold text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600'>
					Password Generator
				</section>
				<section className='bg-gradient-to-r from-pink-600 to-purple-600 rounded-md p-0.5 my-6'>
					<p className='text-xl p-2 rounded-md text-center  border-transparent border-2  bg-black'>
						{generatedPassword || 'Generating password...'}
					</p>
				</section>
				<section className='flex justify-between gap-6 mb-6'>
					<button
						onClick={() => getRandomPassword()}
						className='text-black font-semibold bg-white border-white border-2 rounded-md w-48 h-12 px-3 hover:text-white hover:bg-black'
					>
						Generate
					</button>
					<section className='relative group'>
						<section className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></section>
						<button
							onClick={onClick}
							className='bg-black border-transparent relative border-2 rounded-md font-semibold w-48 h-12 px-3  transition duration-200 '
						>
							Copy Password
						</button>
					</section>
				</section>
				<section className='relative'>
					{copied && (
						<section className='absolute border-green-600 border-2 rounded-md font-semibold  p-2.5 w-full'>
							<p className='text-center'>Copied</p>
						</section>
					)}
				</section>
			</article>
		</div>
	)
}
