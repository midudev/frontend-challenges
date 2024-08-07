export default ({ stroke = '#fff' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='w-6 h-6 mx-2'
			viewBox='0 0 24 24'
			strokeWidth='currentColor'
			stroke={stroke}
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<polyline points='7 7 12 12 17 7' />
			<polyline points='7 13 12 18 17 13' />
		</svg>
	)
}
