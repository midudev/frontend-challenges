import React from 'react'
import useGeneratorPass from '../hooks/useGeneratorPass'
import Title from '../Title/index'
import BtnCopy from '../BtnCopy/index'
import LenghtRange from '../LenghtRange/index'
import FilterOption from '../CheckList/index'
import Alert from '../Alert/index'

const PassGenerator = () => {
	const { generatePass } = useGeneratorPass()
	const btnOuterStyle = {
		filter:
			'drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px)'
	}
	const btnInnerStyle = {
		clipPath: 'polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)'
	}
	const shadow = {
		boxShadow: 'rgb(64, 221, 255) 0px 0px 25px, rgb(64, 221, 255) 0px 0px 8px 2px'
	}

	return (
		<div className='h-screen grid place-content-center px-4'>
			<div
				style={shadow}
				className='w-full mx-auto md:max-w-2xl relative p-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-pink-500 dark:from-yellow-300 to-cyan-500 dark:to-indigo-600'
			>
				<div className='relative w-ful py-5 px-8 transition-all ease-in duration-75 bg-gray-50 dark:bg-gray-900 rounded-lg'>
					<Alert type='success' text='Success, your password has been copied.' id='alert-info' />

					<Alert
						type='warning'
						text='No password generated, please check your options!'
						id='alert-warning'
					/>
					<Title title='Password Generator' />

					<div className='mb-4 flex gap-3 items-center w-ful'>
						<div className='relative w-full'>
							<input
								id='password'
								type='text'
								className='w-full h-9 border-b-2 rounded-none border-cyan-600 bg-transparent focus:outline-none text-white'
								readOnly
							/>
						</div>

						<BtnCopy />
					</div>

					<hr className='my-5 border border-gray-400 dark:border-gray-200' />
					<LenghtRange />
					<FilterOption />

					<button
						onClick={() => generatePass()}
						style={btnOuterStyle}
						className='w-full h-12 my-4 cursor-pointer'
					>
						<span
							style={btnInnerStyle}
							className='w-full h-12 grid place-content-center text-lg shadow-xl font-sans uppercase font-bold text-gray-300 dark:text-gray-900 transition-colors duration-150 focus:shadow-outline bg-gradient-to-r from-gray-700 dark:from-yellow-300 via-gray-800 dark:via-cyan-400 to-gray-900 dark:to-cyan-600 hover:bg-gradient-to-tr focus:outline-none focus:ring-0'
						>
							Generate Password
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default PassGenerator
