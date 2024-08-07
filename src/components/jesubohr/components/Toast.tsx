import type { ReactNode } from 'react'
import { IconOutline } from './Icons'

export interface IToastProps {
	message: string
	icon?: ReactNode
	onClose: () => void
}

export const Toast = ({ icon, message, onClose }: IToastProps) => {
	return (
		<div tabIndex={1} className='absolute top-4 left-4 flex items-start gap-6 p-1 bg-sky-700 border-2 border-sky-200/60 rounded focus:outline-none focus-visible:ring-4 ring-sky-400 ring-opacity-40'>
			<div className='flex items-stretch'>
				{
					icon && (<div className='mr-1 p-2'>{ icon }</div>)
				}
				<p className='flex items-center w-fit max-w-sm'>{ message }</p>
			</div>
			<button
				className='p-2 rounded-sm hover:bg-black/20 active:bg-black/30 text-gray-200 focus:outline-none focus-visible:ring-2 ring-white/60'
				onClick={onClose}
			>
				<IconOutline size={22}>
					<IconOutline.XMark />
				</IconOutline>
			</button>
		</div>
	)
}
