import { useState } from 'react'

const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = (text) => {
		try {
			if (text !== '' || text !== undefined) {
				navigator.clipboard.writeText(text)
				setIsCopied(true)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return [isCopied, setIsCopied, copyToClipboard]
}

export default useCopyToClipboard
