import style from './select.module.css'

export default function SelectSeparator({ label, name, value, onChange }) {
	const widths = {
		6: 'w-[13ch]',
		7: 'w-[14ch]',
		11: 'w-[18ch]',
		19: 'w-[26ch]'
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
				<option>Hyphens</option>
				<option>Spaces</option>
				<option>Periods</option>
				<option>Commas</option>
				<option>Underscores</option>
				<option>Numbers</option>
				<option>Numbers and Symbols</option>
			</select>
		</div>
	)
}
