/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

export default function Header() {
  return (
	<header 
		id='codseb3s-header-container' 
		className='pl-[2.25rem] mt-[2.5rem] mb-5'
	>
	  <div id='codseb3s-header-container-wrapper'>
		<div id='codseb3s-arrow-wrapper' className='w-[1.25rem] h-[1rem] mb-[1.25rem]'>
		  <a href='https://hacktoberfest-2022.vercel.app/' lang='es' target='_self'>
			<svg id='codseb3s-arrow' className='relative w-[1.25rem] h-[.875rem] top-[0.0625rem] left-[-.25rem] stroke-[.125rem] stroke-[#FFFFFF] fill-transparent rotate-[180deg]' viewBox='0 0 14 14' aria-hidden='true'>
			  <g className='relative' fillRule='evenodd'>
				  <path id='codseb3s-arrow__line-path' d='M0 7h12'></path>
				  <path id='codseb3s-arrow__tip-path' d='M5 0l7 7-7 7'></path>
			  </g>
			</svg>
		  </a>
		</div>
		<h1 id='codseb3s-header-title' className='font-sans'>
		  Password Only
		</h1>
		<h6 id='codseb3s-header-sub-title' className='font-sans'>
		  Simple Password Generator
		</h6>
	  </div>
	</header>
  )
}