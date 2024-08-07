export default function Checkbox({ title = '', onChange, checked = false }) {
	return (
		<div className='checkbox-container'>
			<span> {title} </span>
			<label className='toggler-wrapper style-1'>
				<input type='checkbox' onChange={onChange} checked={checked} />
				<div className='toggler-slider'>
					<div className='toggler-knob'></div>
				</div>
			</label>
		</div>
	)
}
