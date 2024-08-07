import { useContext, useState } from 'react'
import { AppContext } from '../context'
import copyClipboard from '../services/copyClipboard'

export const ButtonCopy = () => {
	const { state } = useContext(AppContext)
	const { password } = state
	const [isCopied, setIsCopied] = useState(false)
	const handleCopy = () => {
		setIsCopied(true)
		setTimeout(() => {
			copyClipboard(password)
			setIsCopied(false)
		}, 500)
	}
	if (isCopied) {
		return <span className=' select-none  text-xs block'>Copied!</span>
	}
	return (
		<button
			onClick={handleCopy}
			role='button'
			title='Copy'
			className=' focus:outline-none hover:bg-[rgb(124,127,255,.3)] focus:text-black h-max w-max p-3 rounded-full '
		>
			<svg
				width='22px'
				height='22px'
				strokeWidth='1.5'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				color='#ffffff'
			>
				<path
					d='M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z'
					stroke='#ffffff'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
				<path
					d='M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9'
					stroke='#ffffff'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
			</svg>
		</button>
	)
}
