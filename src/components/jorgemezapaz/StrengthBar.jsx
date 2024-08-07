import React from 'react'

export const StrengthBar = ({ strongthLabel, level, color }) => {
	return (
		<div className='grid grid-cols-3 gap-1 bg-black p-3 mt-3'>
			<div className='ml-3'><span className='text-gray-600 font-bold text-sm'>STRENGTH</span></div>
			<div className='text-right pr-2'>
				<span className='font-semibold'>{strongthLabel}</span>
			</div>
			<div className=' grid grid-cols-4 gap-0'>
				<div className={`w-3 h-7 ${level >= 1 ? color : 'border-2'}`}></div>
				<div className={`w-3 h-7 ${level >= 2 ? color : 'border-2'}`}> </div>
				<div className={`w-3 h-7 ${level >= 3 ? color : 'border-2'}`}></div>
				<div className={`w-3 h-7 ${level === 4 ? color : 'border-2'}`}></div>
			</div>
		</div>
	)
}
