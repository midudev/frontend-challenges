import React, { useState } from 'react'
import { CheckIcon, CopyIcon } from './Icons'

export default function PasswordResult({ password, placeholder }) {
	const [isCopied, setIsCopied] = useState(false)

	const passwordColor = password ? 'text-gray-300' : 'text-gray-500'

	const handleCopy = () => {
		navigator.clipboard.writeText(password).then(() => {
			setIsCopied(true)
			setTimeout(() => {
				setIsCopied(false)
			}, 1000)
		})
	}

	return (
		<div className='bg-slate-800 w-full p-4 items-center text-gray-500'>
			<span className={`text-lg ${passwordColor} ${isCopied ? 'underline' : ''}  font-bold`}>
				{password || placeholder}
			</span>
			<button onClick={handleCopy} className='w-5 float-right hover:text-gray-300'>
				{isCopied ? <CheckIcon /> : <CopyIcon />}
			</button>
		</div>
	)
}
