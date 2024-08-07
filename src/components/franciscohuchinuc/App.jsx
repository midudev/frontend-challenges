import React, { Fragment, useState } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { passwordGenerator } from './passwordGenerator'
import { Security } from './Security'

export function App() {
	const DEFAULT_LENGTH = 8
	const [range, setRange] = useState(DEFAULT_LENGTH)
	const [password, setPassword] = useState('')
	const [copyAnimation, setCopyAnimation] = useState('bg-[#24496D]')


	const hanldeClick = () => {
		const passwordOptions = {
			length: range,
			settings: {
				uppercase: true,
				numbers: true,
				symbols: true
			}
		}
		setPassword(passwordGenerator(passwordOptions))
	}

	const hanldeSetRange = (event) => {
		setRange(event.target.value)
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password).then(() => {
			setCopyAnimation('bg-green-600')
			setTimeout(() => {
				setCopyAnimation('bg-[#24496D]')
			}, 1000)
		})
	}

	return (
		<Fragment>
			<Navbar />
			<main className='p-5 flex flex-col items-center justify-center mt-10'>
				<h1 className='text-white text-base text-center font-medium md:text-2xl'>Password Generator</h1>
				<span className='text-white/50 text-xs text-center md:text-sm'>Create a strong password by choosing custom properties</span>
				<section className='mt-14 w-full max-w-md'>
					<div className='relative overflow-hidden'>
						<p
							className='w-full h-8 rounded-lg bg-[#24496D] text-white flex items-center whitespace-nowrap text-ellipsis overflow-hidden pl-2 pr-14'
						>
							{password}
						</p>
						<div className='flex gap-2'>
							<span className='text-xs text-white md:text-sm'> Security level: </span>
							<Security length={range} />
						</div>
						<button
							disabled={!password}
							className={`absolute right-0 top-0 h-8 w-10 flex items-center justify-center ${copyAnimation} transition-colors rounded-r-lg group`}
							onClick={copyToClipboard}
						>
							<svg className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${password && 'group-hover:animate-bounce'}`} viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M8.5 2.2H9.75C10.0815 2.2 10.3995 2.32643 10.6339 2.55147C10.8683 2.77651 11 3.08174 11 3.4V11.8C11 12.1183 10.8683 12.4235 10.6339 12.6485C10.3995 12.8736 10.0815 13 9.75 13H2.25C1.91848 13 1.60054 12.8736 1.36612 12.6485C1.1317 12.4235 1 12.1183 1 11.8V3.4C1 3.08174 1.1317 2.77651 1.36612 2.55147C1.60054 2.32643 1.91848 2.2 2.25 2.2H3.5' stroke='white'/>
								<path d='M7.875 1H4.125C3.77982 1 3.5 1.26863 3.5 1.6V2.8C3.5 3.13137 3.77982 3.4 4.125 3.4H7.875C8.22018 3.4 8.5 3.13137 8.5 2.8V1.6C8.5 1.26863 8.22018 1 7.875 1Z' stroke='white' />
							</svg>

						</button>
					</div>

					<div className='flex flex-col gap-1 mt-10 mb-10'>
						<span className='text-xs text-white md:text-sm'>Password Length {range}</span>
						<input type='range' min='8' max='20'
							className='w-full h-2 bg-[#24496D] rounded-lg appearance-none'
							defaultValue={DEFAULT_LENGTH}
							onChange={hanldeSetRange}
						/>
					</div>

					<button
						className='rounded-lg bg-white text-[#142850] font-semibold w-full h-8 hover:bg-gray-200'
						onClick={hanldeClick}
					>
						Generate Password
					</button>
				</section>
			</main>
			<Footer />
		</Fragment>
	)
}

