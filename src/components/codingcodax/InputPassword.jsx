import InputIconButton from './InputIconButton'
import { EyeIcon, EyeClosedIcon, CopyIcon, CopySuccessIcon } from '@components/codingcodax/icons'

const InputPassword = ({ password, isVisible, toggleIsVisible, isCopy, copyPassword }) => {
	console.log(!password.length)

	return (
		<div className='py-2 px-4 grid grid-flow-col gap-3 bg-zinc-800 rounded-md'>
			<input
				className='w-full text-indigo-200 focus:outline-indigo-300 focus:outline-dashed focus:rounded-md placeholder:text-indigo-300/50 bg-transparent'
				placeholder='Password'
				value={password}
				type={isVisible ? 'text' : 'password'}
				readOnly
			/>

			<InputIconButton onClick={toggleIsVisible}>
				{isVisible ? (
					<EyeIcon className='stroke-indigo-100' />
				) : (
					<EyeClosedIcon className='stroke-indigo-100' />
				)}
			</InputIconButton>

			<InputIconButton onClick={copyPassword} isDisabled={!password.length}>
				{isCopy ? (
					<CopySuccessIcon className='stroke-emerald-300' />
				) : (
					<CopyIcon className='stroke-indigo-100' />
				)}
			</InputIconButton>
		</div>
	)
}

export default InputPassword
