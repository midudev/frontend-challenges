
export const BtnList = ({ setState }) => {
	return (
		<button className='focus:outline-none hover:bg-[rgb(124,127,255,.3)]  h-max w-max p-3 rounded-full ' onClick={() => setState(p => !p)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				width='22px'
				height='22px'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
				/>
			</svg>
		</button>
	)
}
