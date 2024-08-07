export function InputSwitch({ label, name, value, onChange, className }) {
	return (
		<div className={`flex items-center justify-between ${className}`}>
			<label htmlFor={`${name}-text`} className='mr-2 font-semibold'>
				{label}
			</label>
			<div className='items-center flex'>
				<label htmlFor={name} className='inline-flex relative items-center cursor-pointer w-fit'>
					<input
						id={name}
						name={name}
						type='checkbox'
						className='sr-only peer'
						value={value}
						checked={value}
						onChange={onChange}
					/>
					<div className="w-11 h-6 bg-neutral-200 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-pink-600" />
				</label>
			</div>
		</div>
	)
}
