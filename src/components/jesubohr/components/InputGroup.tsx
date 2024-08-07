import type { ReactNode, RefObject } from 'react'

export interface IInputGroupProps {
	className?: string
	placeholder: string
	icon?: ReactNode
	inputRef?: RefObject<HTMLInputElement>
	onIconClick?: () => void
}

export const InputGroup = ({ inputRef, className, placeholder, icon, onIconClick }: IInputGroupProps) => {
	return (
		<div className={
			'flex items-center p-1 border-2 border-gray-400 rounded focus-within:border-sky-500 focus-within:ring-4 ring-sky-400 ring-opacity-40' +
			(className ? ` ${className}` : '')
		}>
			<label htmlFor='generated-password' className='sr-only'>{ placeholder }</label>
			<input
				ref={ inputRef }
				type='text'
				id='generated-password'
				placeholder={ placeholder }
				className='pl-2 w-full bg-transparent text-white text-lg focus:outline-none'
				disabled
			/>
			{
				icon && (
					<button
						className='p-2 rounded-sm hover:bg-sky-500/30 hover:text-sky-500 active:bg-sky-500/40 active:text-sky-400 text-gray-500 focus:outline-none focus-visible:ring-2 ring-sky-500/50'
						onClick={ onIconClick }
					>{ icon }</button>
				)
			}
		</div>
	)
}
