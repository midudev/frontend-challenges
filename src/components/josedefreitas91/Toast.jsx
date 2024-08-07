import CheckIcon from './CheckIcon'

export default function Toast({ message }) {
	return (
		<div className='flex items-center py-2 w-full text-gray-500 bg-white rounded-lg'>
			<div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
				<CheckIcon />
			</div>
			<div className='ml-3 text-sm font-normal'>{message}</div>
		</div>
	)
}
