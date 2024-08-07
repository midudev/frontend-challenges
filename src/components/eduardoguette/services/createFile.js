export const createFile = (savedPasswords) => {
	if (savedPasswords.length < 1) return
	let dataDownloaded = ''
	savedPasswords.forEach((pass) => {
		const elem = `
Site: ${pass.url}
Username: ${pass.username}
Passsword: ${pass.password}
		`
		dataDownloaded += elem
	})
	const data = new Blob([dataDownloaded], { type: 'text/plain' })
	const a = document.createElement('a')
	a.href = window.URL.createObjectURL(data)
	a.target = '_blank'
	a.download = `BackupPass-${new Date().toISOString()}.txt`
	a.click()
}
