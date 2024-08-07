export const Checkbox = ({ label, onChange, checked = false }) => (
	<div>
		<label className='cursor-pointer'>
			<input className='mr-2' type='checkbox' checked={checked} onChange={(e) => onChange(e.currentTarget.checked)}/>
			{label}
		</label>
	</div>
)
