import style from './select.module.css'

export default function SelectPasswordType({ label, name, value, onChange }) {
	const widths = {
		8: 'w-[15ch]',
		14: 'w-[21ch]',
		15: 'w-[22ch]',
		18: 'w-[25ch]'
	}

	return (
		<div className='flex justify-between items-center py-4'>
			<label htmlFor={name} className='mr-2 font-semibold'>
				{label}
			</label>
			<select
				id={name}
				name={name}
				className={`${
					widths[value.length]
				} py-2 px-4 text-left text-white bg-neutral-900 ring-1 ring-zinc-600/70 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-neutral-800 focus:outline-none text-sm truncate font-normal ${
					style['select-pass-type']
				}`}
				value={value}
				onChange={onChange}
			>
				<option>Smart Password</option>
				<option>Random Password</option>
				<option>Memorable Password</option>
				<option>PIN Code</option>
			</select>
		</div>
	)
}
