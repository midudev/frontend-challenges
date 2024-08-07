export const copyPassword = async (password) => {
	try {
		await navigator.clipboard.writeText(password)
	} catch (err) {
		console.error('Error to copy: ', err)
	}
}
