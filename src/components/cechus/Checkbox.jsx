import { leetText } from './utils/utils'

export default function Checkbox(props) {
	const { label, id, onChange, value } = props

	return (
		<div className='flex gap-x-2 items-center'>
			<input
				className='w-4 h-4 accent-[#a5f71e] cursor-pointer'
				value={value}
				checked={value}
				onChange={() => onChange()}
				type='checkbox'
				id={id}
				name={id}
			/>
			<label
				className='cursor-pointer select-none'
				htmlFor={id}
				data-value={label}
				onMouseOver={(e) => leetText(e.target, true)}
				onMouseLeave={(e) => leetText(e.target, false)}
			>
				{label}
			</label>
		</div>
	)
}
