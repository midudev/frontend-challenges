import React from 'react'

export default function IconButton({ handleClick, src }) {
	return (
		<button
			onClick={() => {
				console.log('IconButton onClick')
				handleClick()
			}}
			className='flex justify-center items-center p-2 rounded-full hover:bg-slate-500/20 transition-colors w-[50px] h-[50px]'
		>
			<img src={src} alt='' srcSet='' className='' />
		</button>
	)
}
