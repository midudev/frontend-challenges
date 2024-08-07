import React from 'react'

export const GenerateButton = ({ handler }) => {
	return (
		<div className='mt-3 items-center justify-center'>
			<button className='flex w-full gap-4 rounded mt-7 uppercase text-base text-[#111418] items-center font-bold justify-center leading-6 py-3 px-6 bg-[#5FE79C] hover:bg-[#5FE79C]/95 transition-colors focus:outline-none'
				onClick={handler}>
				Generate
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M13.0449 5.4593L18.5857 11L2.99988 11C2.44759 11 1.99988 11.4478 1.99988 12C1.99988 12.5523 2.44759 13 2.99988 13L18.5857 13L13.0449 18.5408C12.6544 18.9313 12.6544 19.5645 13.0449 19.955C13.4355 20.3455 14.0686 20.3455 14.4591 19.955L21.707 12.7072C22.0975 12.3166 22.0975 11.6835 21.707 11.2929L14.4591 4.04509C14.2632 3.84915 14.0062 3.75152 13.7494 3.7522C13.6863 3.75237 13.6232 3.75847 13.561 3.7705C13.3719 3.80711 13.1914 3.89864 13.0449 4.04509C12.6544 4.43561 12.6544 5.06878 13.0449 5.4593Z'
						fill='currentColor'
					/>
				</svg>
			</button>
		</div>
	)
}
