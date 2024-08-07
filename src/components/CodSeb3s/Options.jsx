import React from 'react';

export default function Options({ strBooleanOption, option }) {
	// Capitalize the name 
	// Option can be uppercase, lowercase, numbers and symbols
	const capitalizeName = option[0].toUpperCase() + option.slice(1)
	
	return (
		<div className='relative mb-2'>
			<label id={strBooleanOption === true 
				? 'codseb3s-check-true' 
				: 'codseb3s-check-false'} 
				className='codseb3s-checkbox block relative font-sans w-[6.25rem] pl-6 cursor-pointer' htmlFor='toggle'>
				{capitalizeName}
				{ option === 'uppercase' 
					? <input
							type='checkbox' 
							value={option} 
							className='absolute w-[100%] h-[.875rem] left-0 top-[.1875rem] opacity-1 z-[1000] opacity-0 cursor-pointer'
							defaultChecked
						/>
					: <input
							type='checkbox' 
							value={option} 
							className='absolute w-[100%] h-[.875rem] left-0 top-[.1875rem] opacity-1 z-[1000] opacity-0 cursor-pointer'
						/>
				}
				<span 
					id={strBooleanOption === true 
						? 'codseb3s-check-true' 
						: 'codseb3s-check-false'}
					className='codseb3s-checkmark absolute w-[.875rem] h-[.875rem] top-[.1875rem] left-0 border-solid border-[.09375rem] border-[#545A64] cursor-pointer'>
				</span>
			</label>
		</div>
	)
}