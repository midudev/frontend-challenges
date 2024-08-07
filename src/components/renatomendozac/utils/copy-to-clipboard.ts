const copyToClipboard = (textToCopy: string): void => {
	navigator.clipboard.writeText(textToCopy)
}

export { copyToClipboard }
