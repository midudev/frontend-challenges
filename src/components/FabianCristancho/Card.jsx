import { useEffect, useState } from 'react'

function Card() {
	const [length, setLength] = useState(8)
	const [password, setPassword] = useState('')
	const [msgCopy, setMsgCopy] = useState('')

	useEffect(() => {
		generatePassword()
	}, [])

	const handleChange = ({ target: { value } }) => {
		setLength(value)
	}

	const generatePassword = () => {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let password = ''
		for (let i = 0; i < length; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			password += chars.charAt(randomNumber)
		}
		setPassword(password)
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)

		setMsgCopy('Password copied to clipboard!')
		setTimeout(() => {
			setMsgCopy('')
		}, 2000)
	}

	return (
		<main className='h-screen flex justify-center items-center '>
			<div className='font-mono'>
				<div className='block p-6 max-w-sm bg-slate-800 rounded-lg border border-gray-700 shadow-md hover:bg-slate-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
					<h2 className='mb-2 text-center text-3xl font-bold tracking-tight text-gray-200 dark:text-white'>Password Generator</h2>
					<p className='text-gray-300'>Password Length:</p>
					<p className='text-gray-200 text-center text-2xl'>{length}</p>
					<input type='range' min='3' max='20' step='1' value={length} onChange={handleChange} className='w-full appearance-none h-2 bg-gray-500 rounded-lg  cursor-pointer dark:bg-gray-700'/>
					<div className='flex justify-center items-center my-4'>
						<button onClick= { generatePassword } className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
							Generate Password
						</button>
						<div data-tooltip-target='tooltip-default' className='w-[8%] mx-3'>
							<svg className='fill-gray-300 hover:fill-blue-300 cursor-pointer' onClick={ copyPassword } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path d='M192 0c-41.8 0-77.4 26.7-90.5 64H48C21.5 64 0 85.5 0 112V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H282.5C269.4 26.7 233.8 0 192 0zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm-80 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z'/></svg>
						</div>
					</div>
					<input type='text' value={password} aria-label='disabled input' className='text-center text-xl mb-3 bg-gray-400 border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled/>
					<p className='text-xs text-center text-red-600'>{ msgCopy }</p>
				</div>
				<p className='text-gray-400 text-center'>Handcrafted by <a href='https://github.com/FabianCristancho' target='blank' className='text-lg text-blue-500 hover:underline'>Fabian Cristancho</a></p>
			</div>
		</main>
	)
}

export default Card
