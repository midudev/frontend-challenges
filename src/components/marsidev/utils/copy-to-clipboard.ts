/** @link https://github.com/marsidev/react-hooks/blob/main/src/utils/clipboard.ts */
/**
 * Copy a text to the clipboard
 * If the browser supports the Clipboard API, use it. Otherwise, fall back to the legacy
 * `document.execCommand('copy')` method
 * @param text - The text to copy to the clipboard.
 * @returns The return value is a boolean indicating whether the copy operation was successful.
 */
export const copyTextToClipboard = async (text: string) => {
	const clipboardTextAPISupported = 'clipboard' in navigator && 'writeText' in navigator.clipboard
	const legacySupported = 'execCommand' in document

	if (!clipboardTextAPISupported && !legacySupported) {
		console.warn('Copy to clipboard not supported')
		return false
	}

	try {
		if (clipboardTextAPISupported) {
			await navigator.clipboard.writeText(text)
		} else {
			document.execCommand('copy', true, text)
		}
		return true
	} catch (error) {
		console.warn('Error copying text to clipboard', error)
		return false
	}
}
