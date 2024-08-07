import React, { useState } from 'react'
import HomeNavIcons from './HomeNavIcons'

const HomeNav = ({ openWindows = [] }) => {
	const [miduEasterEgg, setMiduEasterEgg] = useState(false)

	const handleEasterEgg = () => {
		setMiduEasterEgg(true)
		setTimeout(() => {
			setMiduEasterEgg(false)
		}, 2000)
	}

	return (
		<div className='absolute bottom-0 bg-zinc-800/70 backdrop-blur-sm inset-x-0 h-12 flex justify-center items-center gap-3'>
			<HomeNavIcons openIcon={false} path='/diegocadavid/homeIcon.png' />
			{openWindows.map((w) => {
				return <HomeNavIcons key={w} path={`/diegocadavid/${w}Icon.png`} />
			})}
			<div className='absolute right-3'>
				<div className='flex justify-center items-center gap-3'>
					{/* Icons */}
					<div className='flex gap-3 mr-3'>
						<div className='w-4 h-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								className='w-full h-full stroke-slate-200'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z'
								/>
							</svg>
						</div>
						<div className='w-4 h-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								className='w-full h-full stroke-slate-200'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z'
								/>
							</svg>
						</div>
						<div className='w-4 h-4'>
							<div className='w-4 h-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									className='w-full h-full stroke-slate-200'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className='leading-4 text-right text-sm text-slate-200 font-light flex flex-col'>
						<p> 3:19 p.m </p>
						<p> 3/10/2022 </p>
					</div>
					{miduEasterEgg && (
						<img
							className='absolute w-32 h-32 right-1 -top-36 diegocadavid_animate-up'
							src='/diegocadavid/midu.png'
							alt=''
						/>
					)}
					{ !miduEasterEgg && <div
						className='bg-zinc-400 hover:bg-zinc-300 transition-colors ease-in h-4 w-4 rounded-full flex items-center justify-center cursor-pointer relative'
						onClick={handleEasterEgg}
					>
						<p className='text-sm'> 1 </p>
					</div>}
				</div>
			</div>
		</div>
	)
}

export default HomeNav
