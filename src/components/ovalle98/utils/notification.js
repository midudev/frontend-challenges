function createNotification() {
	const toast = document.getElementById('ovalle98-msj')
	const notif = document.createElement('div')
	notif.classList.add('ovalle98-pg-msj')
	notif.innerText = 'Password copied successfully'
	toast.appendChild(notif)

	setTimeout(() => {
		notif.remove()
	}, 3000)
}

export default createNotification