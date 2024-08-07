import React, { useState } from 'react'

import { Form } from './components/Form'
import { HeaderMain } from './components/HeaderMain'
import { TitleGradient } from './components/TitleGradient'
import { AppContext } from './context'
import './index.css'

const initSavedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || []

function PGApp() {
	const [state, setState] = useState({
		password: '',
		savedPasswords: initSavedPasswords
	})
	return (
		<AppContext.Provider value={{ state, setState }}>
			<header className='header-eduardoguette'></header>
			<main className='flex selection:bg-[#b4ff39] selection:text-[#170f1e] justify-start items-center flex-col min-h-screen main-eduardoguette mx-auto p-5'>
				<HeaderMain />
				<section className='flex justify-center mt-10 items-center flex-col w-full'>
					<TitleGradient title='Password Generator' classStyle={'md:mb-16 mb-8 text-2xl md:text-4xl'}/>
					<Form />
				</section>
				<footer className='text-center mt-4 text-white text-opacity-50'>
					Desarrollado por Eduardo Guette
					<div className='flex justify-center gap-2 mt-2'>
						<a className='text-white opacity-50 hover:opacity-100' href='https://www.linkedin.com/in/eduardo-guette/' target='_blank'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-brand-linkedin'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<rect x='4' y='4' width='16' height='16' rx='2'></rect>
								<line x1='8' y1='11' x2='8' y2='16'></line>
								<line x1='8' y1='8' x2='8' y2='8.01'></line>
								<line x1='12' y1='16' x2='12' y2='11'></line>
								<path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
							</svg>
						</a>
						<a className='text-white opacity-50 hover:opacity-100' target='_blank' href='https://github.com/eduardoguette?tab=repositories'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-brand-github'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
							</svg>
						</a>
					</div>
				</footer>
			</main>
		</AppContext.Provider>
	)
}

export default PGApp
