import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context'
import { createFile } from '../services/createFile'
import { FormSavePass } from './FormSavePass'
import { ListPasswords } from './ListPasswords'

export const Menu = ({ state: stateMenu, setState: setStateMenu }) => {
	const {
		setState,
		state: { savedPasswords }
	} = useContext(AppContext)
	const [showSaveNewPass, setShowSaveNewPass] = useState(false)
	const [showSavedPasswords, setSavedPasswords] = useState(false)
	const refSavedPass = useRef(null)
	const onHiddenModals = () => {
		setStateMenu(false)
		setShowSaveNewPass(false)
		setSavedPasswords(false)
	}

	useEffect(() => {
		setState((p) => ({ ...p, onHiddenModals }))
		if (showSaveNewPass) {
			refSavedPass.current.focus()
		}
	}, [showSaveNewPass, showSavedPasswords])

	const handleDownloadFile = () => {
		createFile(savedPasswords)
		onHiddenModals()
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('keydown', (e) => e.key === 'Escape' && onHiddenModals())
	}
	if (stateMenu) {
		return (
			<>
				<div className='inset-0 fixed' onClick={onHiddenModals} />
				<ul className='z-10 right-0 top-[75%] text-sm border rounded-md bg-[rgb(36,35,44)] absolute flex flex-col  border-[#8e7f9f] p-2 drop-shadow-md'>
					<li>
						<button
							onClick={() => setShowSaveNewPass(true)}
							className='text-left  py-2 px-3 hover:bg-[rgb(124,127,255,.3)] hover:text-[rgb(124,127,255)] rounded-md whitespace-nowrap w-full flex items-center gap-4'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								strokeWidth='1.75'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2'></path>
								<circle cx='12' cy='14' r='2'></circle>
								<polyline points='14 4 14 8 8 8 8 4'></polyline>
							</svg>
							Save password
						</button>
					</li>
					<li>
						<button
							onClick={() => setSavedPasswords(true)}
							className='text-left whitespace-nowrap w-full py-2 px-3 hover:bg-[rgb(124,127,255,.3)] hover:text-[rgb(124,127,255)] rounded-md flex items-center gap-5'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
								/>
							</svg>
							View passwords
						</button>
					</li>
					<li>
						<button
							disabled={savedPasswords.length < 1}
							onClick={handleDownloadFile}
							className='text-left whitespace-nowrap w-full py-2 px-3 hover:bg-[rgb(124,127,255,.3)] hover:text-[rgb(124,127,255)] rounded-md  flex items-start gap-5 disabled:opacity-90 disabled:cursor-not-allowed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
								/>
							</svg>
							Download passwords
						</button>
					</li>
				</ul>
				{showSaveNewPass && (
					<FormSavePass
						onHidden={onHiddenModals}
						refFocus={refSavedPass}
						setState={setShowSaveNewPass}
					/>
				)}
				{showSavedPasswords && <ListPasswords onHidden={onHiddenModals} />}
			</>
		)
	}
}
