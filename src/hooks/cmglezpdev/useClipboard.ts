import { useState, useRef } from 'react'

export const useClipboard = () => {
	const [copied, setCopied] = useState<boolean>(false)
	const refElement = useRef<HTMLInputElement>()

	const copyText = () => {
		const text = refElement.current.value || ''
		navigator.clipboard.writeText(text)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}
	return { refElement, copied, copyText }
}
