import { useState } from 'react'
import Copy from './svg/Copy'

const KeyInput = ({ value }) => {
	const [showCopied, setShowCopied] = useState(false)
	const handlerCopy = () => {
		if (value.length > 0) {
			navigator.clipboard.writeText(value)
			setShowCopied(true)
			setTimeout(() => {
				setShowCopied(false)
			}, 1500)
		}
	}
	return (
		<>
			<div className='flex w-full '>
				<span
					onClick={handlerCopy}
					className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 cursor-pointer rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
				>
					<Copy fill='none' />
				</span>
				<input
					type='text'
					id='website-admin'
					className='rounded-none font-bold rounded-r-lg bg-gray-50 border text-gray-500 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
					placeholder='Clave generada'
					readOnly
					value={value}
				/>
			</div>
			<div className='text-sm text-gray-500 text-sm' style={{ opacity: showCopied ? 1 : 0 }}>
				<small>Copiado!</small>
			</div>
		</>
	)
}

export default KeyInput
