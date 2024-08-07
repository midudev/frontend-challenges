import React from 'react'
import { usePasswordGenerator } from '../../hooks/angelograngetto/usePasswordGenerator'
import IconCopy from './IconCopy'

const Card = () => {
	const { pass, generatePass, length, onSetLength, onCopy, copied } = usePasswordGenerator()
	return (
		<article className='min-h-screen min-w-full bg-black flex justify-center items-center text-white'>
			<section className='flex flex-col m-auto max-w-screen-sm p-3'>
				<h1 className='text-center font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 uppercase'>
					Password Generator
				</h1>
				<small className='text-white text-center mb-10 text-xs'>
					Developed by{' '}
					<a
						className='font-bold underline'
						href='https://github.com/angelograngetto'
						target='_blank'
					>
						Angelo Grangetto
					</a>
				</small>
				<div className='min-w-100 flex justify-center'>
					<input
						value={pass || 'generating...'}
						readOnly
						style={{ maxWidth: '30%' }}
						className='bg-transparent text-center border-none outline-none font-bold text-xl whitespace-nowrap text-ellipsis overflow-hidden'
					/>
					<div className='relative'>
						<button
							onClick={() => onCopy()}
							className='p-2 rounded-full hover:bg-gradient-to-r hover:from-orange-400 hover:to-rose-400'
						>
							<IconCopy className='h-5' />
						</button>
						<p
							className={`transition ease-in-out delay-150 absolute -left-2 ${
								!copied ? 'opacity-0' : ''
							}`}
						>
							Copied!
						</p>
					</div>
				</div>
				<h4 className='mt-4 mb-2 uppercase font-bold text-xl'>Settings</h4>
				<p className='font-semibold'>Length</p>
				<div className='flex items-center'>
					<p className='p-2 font-semibold text-2xl w-16'>{length}</p>
					<input
						type='range'
						min='8'
						max='20'
						step='1'
						value={length}
						onChange={onSetLength}
						className='appearance-none w-full h-2 bg-white rounded outline-none slider-thumb accent-orange-400'
					/>
				</div>
				<button
					onClick={() => generatePass()}
					className='min-w-full bg-gradient-to-r from-orange-400 to-rose-400 text-black font-bold h-14 rounded-md text-xl hover:opacity-90'
				>
					Re-Generate
				</button>
			</section>
		</article>
	)
}

export default Card
