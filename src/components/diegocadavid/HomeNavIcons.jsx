import React from 'react'

const HomeNavIcons = ({ path, openIcon = true }) => {
	return (
		<div className='h-6 w-6 relative cursor-pointer opacity-80 hover:opacity-100 transition-all ease-linear'>
			<img className='w-full h-full object-contain object-center' src={path} alt='Icon nav' />
			{openIcon && <span className='absolute bg-slate-300/70 inset-x-2 rounded-full h-1 -bottom-2'> </span>}
		</div>
	)
}

export default HomeNavIcons
