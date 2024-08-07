import React from 'react'

export const PasswordLengthBar = ({ length, handler }) => {
	return (
		<div>
			<div className='flex pb-2'>
				<div className='flex-1 w-64 text-gray-400 pt-2'>
					Character Length
				</div>
				<div><span className='text-3xl text-[#098340] '>{length}</span></div>
			</div>
			<div>
				<input id='characterLength' type='range' min='0' max='20' className='w-full cursor-pointer' onChange={handler}></input>
			</div>
		</div>
	)
}
