/** @jsxImportSource solid-js */
import type { Component, JSX } from 'solid-js'
import '@components/marsidev/styles/checkbox.css'

// interface CheckboxProps extends ComponentProps<'input'> {
interface CheckboxProps {
	checked: boolean
	onChange: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>
	id: string
	label: string
	disabled: boolean
}

export const Checkbox: Component<CheckboxProps> = (props) => {
	return (
		<div class='marsidev-checkbox flex items-center'>
			<input
				type='checkbox'
				id={props.id}
				onInput={props.onChange}
				checked={props.checked}
				disabled={props.disabled}
			/>
			<label class='cursor-pointer text-[1rem]' for={props.id}>
				{props.label}
			</label>
		</div>
	)
}
