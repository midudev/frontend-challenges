import React from 'react'
import ClipboardIcon from '../assets/clipboard-text.svg'
import RefreshIcon from '../assets/refresh.svg'
import IconButton from '../components/IconButton.jsx'

export default function PasswordResult({ onRefresh, onCopy, password }) {
	return (
		<div className='flex items-center w-full bg-white px-4 py-2 rounded-md'>
			<output className='text-black flex-1 overflow-hidden truncate' name='length'>
				{password}
			</output>
			<IconButton src={ClipboardIcon} handleClick={onCopy} />
			<IconButton src={RefreshIcon} handleClick={onRefresh} />
		</div>
	)
}
