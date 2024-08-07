import { useState } from 'react'
import copyIcon from '../assets/images/copy-icon.svg'

function GeneratedPasswordBox({ passwordText, isSliderActive }) {
	const [isPassCopied, setIsPassCopied] = useState(false)
	const copyBtBackground = isSliderActive ? 'bg-[#49af7c88]' : 'bg-[#49af7c]'

	function copyPassword() {
		if (passwordText) {
			navigator.clipboard.writeText(passwordText)
			setIsPassCopied(true)
			setTimeout(() => {
				setIsPassCopied(false)
			}, 1000)
		}
	}

	return (
		<div className='relative flex h-10 mt-2'>
			<input
				readOnly
				className='text-[#011d2e] rounded-tl-md rounded-bl-md h-full px-2 w-full outline-none text-black'
				value={passwordText}
			/>
			<button
				style={{ backgroundImage: `url(${copyIcon})` }}
				className={`${copyBtBackground} luiserdef-bt-copy lg:hover:bg-[#27f39e] rounded-tr-md rounded-br-md w-10 bg-no-repeat bg-center bg-[length:25px] px-1 h-full `}
				onClick={copyPassword}
			/>
			<span
				className={`${
					isPassCopied && 'luiserdef-copy-alert'
				} opacity-0 select-none absolute bg-gray-900 px-2 py-1 rounded-lg bottom-[-35px] right-[-20px]`}
			>
				Copiado!
			</span>
		</div>
	)
}

export default GeneratedPasswordBox
