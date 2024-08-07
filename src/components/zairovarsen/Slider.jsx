export default function Slider({ from, to, onChange, value }) {
	return (
		<div className='slider-container'>
			<span> {from} </span>
			<input id='slider' onChange={onChange} type='range' min={from} max={to} value={value} />
			<span> {to} </span>
		</div>
	)
}
