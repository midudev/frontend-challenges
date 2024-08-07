import React from 'react'

const TitleWindow = ({ name,dark=true, handleCloseWindow }) => {
	return (
		<div className={`px-4 py-4 flex justify-between items-center ${dark ?'bg-[#060505]' : 'bg-[#dadada]'}`}>
			<h2 className={`${ dark ? 'text-white' : 'text-slate-800'}`}>{name}</h2>
			{/* Buttons title */}
			<div className='flex gap-2'>
				<div onClick={handleCloseWindow} className='rounded-full w-3 h-3 cursor-pointer transition-colors ease-linear hover:bg-red-700 bg-red-400'> </div>
				<div className='rounded-full w-3 h-3 cursor-pointer transition-colors ease-linear hover:bg-yellow-600 bg-yellow-200'> </div>
				<div className='rounded-full w-3 h-3 cursor-pointer transition-colors ease-linear hover:bg-green-600 bg-green-300'> </div>
			</div>
		</div>
	)
}

export default TitleWindow
