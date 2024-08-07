import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'

// Icons
import IconGenerate from './common/icons/IconGenerate'
import IconSave from './common/icons/IconSave'

const ActionsButtons = () => {
	const {
		passwordLength,
		concurrenceLength,
		automaticGenerator,
		setAutomaticGenerator,
		optionsCharacter,
		generateAlert,
		handlerNewPassword
	} = useContext(passwordContext)

	const handlerSaveConfiguration = () => {
		localStorage.setItem(
			'preferencies-password-generator',
			JSON.stringify({
				length: passwordLength,
				concurrence: concurrenceLength,
				automaticGenerator,
				optionsCharacter
			})
		)
		generateAlert('Options saved!', 5000, 'options')
	}

	return (
		<div className='flex-1 max-w-xl w-full py-2'>
			<div className='w-full flex gap-4 my-3 content-center items-center'>
				<button
					type='button'
					onClick={handlerSaveConfiguration}
					className='flex-1 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-blue-700  border-3'
				>
					Save options
					<IconSave />
				</button>
				<div className='flex-1 flex items-center m-auto justify-center'>
					<input
						id='default-checkbox'
						type='checkbox'
						checked={automaticGenerator}
						onChange={() => setAutomaticGenerator(!automaticGenerator)}
						className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
					/>
					<label
						htmlFor='default-checkbox'
						className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Auto generator?
					</label>
				</div>
			</div>

			<button
				onClick={handlerNewPassword}
				className='inline-flex w-full justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
			>
				Generate password
				<IconGenerate />
			</button>
		</div>
	)
}

export default ActionsButtons
