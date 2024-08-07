/** @jsxImportSource solid-js */
import type { ToastTheme } from '@components/marsidev/types'
import type { Component } from 'solid-js'

interface ToastCloseButtonProps {
	id: string
	theme: ToastTheme
	onRemove: () => void
}

export const ToastCloseButton: Component<ToastCloseButtonProps> = (props) => {
	const isDarkTheme = props.theme === 'dark'

	return (
		<button
			id={props.id}
			type='button'
			aria-label='Close toast'
			data-dismiss='toast'
			classList={{ 'text-white': isDarkTheme, 'text-black': !isDarkTheme }}
			class='cursor-pointer border-0 bg-transparent p-1 opacity-30 outline-0 transition-all ease-out hover:opacity-100 focus:opacity-100 focus:outline-2'
			onClick={(e) => {
				e.stopPropagation()
				props.onRemove()
			}}
		>
			<svg aria-hidden='true' viewBox='0 0 14 16' fill='currentColor' height='16' width='14'>
				<path
					fill-rule='evenodd'
					d='M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
				></path>
			</svg>
		</button>
	)
}
