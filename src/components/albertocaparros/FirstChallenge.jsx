import { React } from 'react'
import UsePassword from './UsePassword'

const FirstChallenge = () => {
	const {
		password,
		passwordLength,
		copied,
		setPasswordLength,
		handleGetPassword,
		handleCopyToClipboard
	} = UsePassword()

	return (
		<div className='flex h-screen'>
			<div className='container m-auto bg-cyan-800 flex flex-col px-6 py-4 gap-3 rounded-md w-2/3 lg:w-1/3'>
				<span className='text-white text-center'>
					<b>Password: </b>
					{password || 'Click the button to generate'}
				</span>

				<input
					type='range'
					name='password-length'
					id='password-length'
					min={5}
					max={20}
					onChange={(e) => {
						setPasswordLength(e.target.value)
					}}
				/>

				<label htmlFor='password-length' className='text-white '>
					Password Length: {passwordLength}
				</label>

				<button
					className=' text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
					onClick={handleGetPassword}
				>
					Get password
				</button>
				<button
					className=' text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
					onClick={handleCopyToClipboard}
				>
					Copy to clipboard
				</button>
				<span className='text-white text-center'>{copied}</span>
			</div>
		</div>
	)
}

export default FirstChallenge
