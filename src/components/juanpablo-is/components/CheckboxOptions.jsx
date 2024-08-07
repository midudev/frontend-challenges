import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'

const CheckboxOptions = () => {
	const { optionsCharacter, setOptionsCharacter } = useContext(passwordContext)

	const handlerChangeCharacter = (e) => {
		setOptionsCharacter((prev) => {
			if (e.target.checked) {
				return { ...prev, [e.target.id]: e.target.checked }
			}

			const newState = { ...prev }
			delete newState[e.target.id]
			return newState
		})
	}

	return (
		<div className='my-2 flex items-center w-full gap-4 flex-col sm:flex-row'>
			<div className='flex items-center'>
				<p className='whitespace-nowrap text-lg text-gray-500 lg:text-xl dark:text-gray-400 font-bold'>
					Character used:
				</p>
			</div>

			<ul className='items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
				<li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
					<div className='flex items-center pl-3'>
						<input
							id='mayus'
							type='checkbox'
							value='mayus'
							defaultChecked={!!optionsCharacter.mayus}
							onChange={handlerChangeCharacter}
							disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.mayus}
							className='h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
						/>
						<label
							htmlFor='mayus'
							className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							ABC
						</label>
					</div>
				</li>
				<li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
					<div className='flex items-center pl-3'>
						<input
							id='minus'
							type='checkbox'
							value='minus'
							defaultChecked={!!optionsCharacter.minus}
							onChange={handlerChangeCharacter}
							disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.minus}
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
						/>
						<label
							htmlFor='minus'
							className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							abc
						</label>
					</div>
				</li>
				<li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
					<div className='flex items-center pl-3'>
						<input
							id='symbols'
							type='checkbox'
							value='symbols'
							defaultChecked={!!optionsCharacter.symbols}
							onChange={handlerChangeCharacter}
							disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.symbols}
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
						/>
						<label
							htmlFor='symbols'
							className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							#!%$&
						</label>
					</div>
				</li>
				<li className='w-full dark:border-gray-600'>
					<div className='flex items-center pl-3'>
						<input
							id='numbers'
							type='checkbox'
							value='numbers'
							defaultChecked={!!optionsCharacter.numbers}
							onChange={handlerChangeCharacter}
							disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.numbers}
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
						/>
						<label
							htmlFor='numbers'
							className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							12345
						</label>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default CheckboxOptions
