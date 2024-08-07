export const SettingsSwitchItem = ({ type, filters, onFilterChane }) => {
	const checked = filters.includes(type)
	return (
		<div className='w-auto flex items-center justify-between'>
			<p>{`Include ${type}`}</p>
			<div className='flex items-center'>
				<input
					type='checkbox'
					id={type}
					value={type}
					onChange={onFilterChane}
					checked={checked}
					className='jh-input-checkbox'
				/>
				<label
					className={`jh-checkbox-label ${checked ? 'active' : ''}`}
					htmlFor={type}
				/>
			</div>
		</div>
	)
}
