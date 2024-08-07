import { useContext, useState } from 'react'
import passwordContext from '../context/PasswordContext'

// Icons
import IconPasswordHide from './common/icons/IconPasswordHide'
import IconPasswordShow from './common/icons/IconPasswordShow'
import IconCopy from './common/icons/IconCopy'

const InputPassword = () => {
	const [showPassword, setShowPassword] = useState(false)
	const { password, generateAlert } = useContext(passwordContext)

	const handlerCopyPassword = () => {
		navigator.clipboard.writeText(password)
		generateAlert('Password copied to clipboard!', 5000, 'copy')
	}

	return (
		<div className='mt-4 relative w-full'>
			<input
				id='password-generated'
				value={showPassword ? password : '*'.repeat(password.length)}
				type='text'
				disabled
				placeholder='Click "Generate password"'
				className='block p-4 pr-28 w-full text-lg rounded-tl-md rounded-tr-md text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			/>
			<div className='flex items-center absolute h-full top-0 right-0 text-sm font-medium'>
				<button
					className='shadow-2xl dark:bg-gray-700 text-white'
					onClick={() => setShowPassword((prev) => !prev)}
				>
					{showPassword ? <IconPasswordHide /> : <IconPasswordShow />}
				</button>
				<button
					type='button'
					onClick={handlerCopyPassword}
					className='flex items-center h-full p-1.5 text-sm rounded-tr-md font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					<IconCopy />
					<span>Copy</span>
				</button>
			</div>
		</div>
	)
}

export default InputPassword
