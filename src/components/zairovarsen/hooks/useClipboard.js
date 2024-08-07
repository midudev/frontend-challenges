import { useState } from 'react'

export function useClipboard() {
	const [isCopied, setIsCopied] = useState(false)

	const saveToClipBoard = (text) => {
		setIsCopied(true)
		navigator.clipboard.writeText(text)
		setTimeout(() => {
			setIsCopied(false)
		}, 3000)
	}

	return {
		saveToClipBoard,
		isCopied
	}
}
