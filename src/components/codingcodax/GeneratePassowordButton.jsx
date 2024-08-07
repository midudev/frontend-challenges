import { RefreshIcon } from '@components/codingcodax/icons'

const GeneratePasswordButton = ({ handleChange }) => {
	return (
		<button
			className='py-4 px-6 w-full flex items-center justify-center gap-4 text-indigo-100 bg-indigo-600 rounded-xl duration-200 hover:bg-indigo-700 active:scale-90'
			onClick={handleChange}
		>
			Generate <RefreshIcon className='stroke-indigo-100 w-5 h-5' />
		</button>
	)
}

export default GeneratePasswordButton
