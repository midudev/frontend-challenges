import { useEffect, useState } from 'react'
import { PasswordData } from './types'
import { generatePassword, calcStrength, copyPasswordToClipboard } from '@components/imollm/util'

const Generator = () => {
	const types = ['alphanumeric', 'random', 'numbers']
	const initalState = {
		password: '',
		type: 'alphanumeric',
		strength: '',
		length: 12
	}
	const [passwordData, setPasswordData] = useState(initalState as PasswordData)

	useEffect(() => {
		const firstRender = true
		handleGeneratePassword(firstRender)
	}, [])

	const handleLength = (currentTarget: HTMLInputElement) => {
		passwordData.length = Number(currentTarget.value)
		setPasswordData(passwordData)

		const lengthSpan = document.querySelector('#length-span') as HTMLSpanElement
		lengthSpan.innerText = currentTarget.value
	}

	const handleTypeClick = (currentTarget: HTMLInputElement) => {
		passwordData.type = currentTarget.value as 'alphanumeric' | 'random' | 'numbers'
		setPasswordData(passwordData)

		const active = document.querySelector('input[type="radio"][checked]') as HTMLInputElement
		active.checked = false
		currentTarget.checked = true
	}

	const handleGeneratePassword = (firstRender: boolean) => {
		const passwordInput = document.querySelector('span#password') as HTMLSpanElement
		const passwordStrength = document.querySelector('span#strength') as HTMLSpanElement

		passwordData.password = generatePassword(passwordData)
		passwordData.strength = calcStrength(passwordData)

		if (!firstRender) copyPasswordToClipboard(passwordData.password)
		passwordInput.innerText = passwordData.password
		passwordStrength.innerText = passwordData.strength
	}

	return (
		<div className='grid place-content-center h-screen text-white'>
			<div className='flex flex-col items-center gap-3 border-2 border-white rounded w-[500px] py-10 bg-gradient-to-r from-cyan-500 to-blue-500'>
				<div className='flex flex-col'>
					<figure className='rounded-full bg-white flex self-center justify-center w-[150px]'>
						<img src='/imollm/midu-icon.png' alt='Midu PassGen' className='' />
					</figure>
					<h1 className='text-center text-2xl mt-3'>Midu PassGen</h1>
					<span
						id='password'
						className='p-4 text-xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'
					></span>
				</div>
				<div className='w-[50%] flex flex-col gap-3 text-xl'>
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<span>Strength</span>
							<span id='strength'></span>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<span className='pb-3'>Select length</span>
							<span id='length-span'>{passwordData.length}</span>
						</div>
						<input
							type='range'
							onChange={(e) => handleLength(e.currentTarget)}
							max='50'
							min='1'
							defaultValue='12'
						/>
					</div>
					<ul className=''>
						{types.map((type, index) => {
							return (
								<li key={index} className='capitalize'>
									<input
										type='radio'
										name='type'
										value={type.toLowerCase().split(' ').join('-')}
										defaultChecked={type === passwordData.type}
										onChange={(e) => handleTypeClick(e.currentTarget)}
									/>
									<span className='ml-2'>{type}</span>
								</li>
							)
						})}
					</ul>
					<div className='flex justify-center mt-4 gap-x-3'>
						<button
							className='border-2 border-white rounded bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4'
							onClick={() => handleGeneratePassword(false)}
						>
							Generate
						</button>
						<button
							className='border-2 border-white rounded bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4'
							onClick={() => copyPasswordToClipboard(passwordData.password)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								fill='white'
								width='20px'
								height='20px'
							>
								<path d='M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z' />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div id='copy-msg' className='mt-3 text-center invisible'>
				<span className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>
					Password has been copied to clipboard
				</span>
			</div>
		</div>
	)
}

export default Generator
