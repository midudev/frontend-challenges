export function generateDate() {
	return new Intl.DateTimeFormat('en-US', {
		day: '2-digit',
		month: 'short',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	}).format(new Date())
}
