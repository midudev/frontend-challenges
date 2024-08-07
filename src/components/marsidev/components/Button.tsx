/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource solid-js */
import type { ParentComponent, JSX } from 'solid-js'

type ButtonsProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: ParentComponent<ButtonsProps> = (props) => {
	return (
		<button
			onClick={props.onClick ? props.onClick : () => {}}
			class='text-md flex min-h-[50px] w-auto min-w-[140px] items-center justify-center gap-2 rounded-[60px] bg-violet-500 py-2 px-4 font-bold leading-8 text-white shadow-md transition duration-150 ease-in-out hover:scale-105 hover:brightness-[0.8] focus:outline-violet-600 active:scale-95 sm:min-w-[180px] sm:text-lg'
		>
			{props.children}
		</button>
	)
}
