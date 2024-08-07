import { writable } from 'svelte/store'

type ToastOptions = {
	id?: number
	type: 'error' | 'success' | 'info'
	dismissible?: boolean
	timeout: number
	message: string
}

export const toasts = writable([])

export const addToast = (toast: ToastOptions) => {
	const id = Math.floor(Math.random() * 10000)

	const defaults: ToastOptions = {
		id,
		type: 'info',
		dismissible: false,
		timeout: 3000,
		message: 'Hello!'
	}

	toasts.update((all) => [{ ...defaults, ...toast }, ...all])

	if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout)
}

export const dismissToast = (id: ToastOptions['id']) => {
	toasts.update((all) => all.filter((t) => t.id !== id))
}
