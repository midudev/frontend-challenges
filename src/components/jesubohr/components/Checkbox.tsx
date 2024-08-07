import { useState, useId } from 'react'

export interface ICheckboxProps {
	text: string
	initialCheck?: boolean
	linkedValue?: string
	onChange?: (linkedValue: string, checked: boolean) => void
}

export const Checkbox = ({ text, initialCheck, linkedValue, onChange }: ICheckboxProps) => {
	const [checked, setChecked] = useState(initialCheck ?? true)
	const id = useId()

	return (
		<label htmlFor={ `checkbox-${id}` } className='flex items-center gap-3 w-fit cursor-pointer'>
			<input
				id={ `checkbox-${id}` }
				type='checkbox'
				checked={ checked }
				onChange={ () => {
					setChecked(!checked)
					onChange(linkedValue, !checked)
				} }
				className='appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-sky-500 checked:border-sky-200/60 focus:outline-none focus-visible:ring-2 ring-sky-300 ring-offset-2 ring-offset-body ring-opacity-80 cursor-pointer'
			/>
			<span className='min-w-fit'>{ text }</span>
		</label>
	)
}
