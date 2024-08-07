import type { ToastOptions, ToastType, ToastSignal, Toaster } from '@components/marsidev/types'
import { createSignal, createUniqueId } from 'solid-js'
import { DEFAULT_TOAST_OPTIONS as defaults } from '@components/marsidev/utils/constants'

const [toastSignals, setToastSignals] = createSignal<ToastSignal[]>([])
export { toastSignals }

export const onAddToastByType = (toastType: ToastType, message: string, options?: ToastOptions) => {
	const toastDuration = options?.duration || defaults.duration
	const { theme, closeOnClick, transition } = options ?? {}

	const newToastSignal: ToastSignal = {
		id: createUniqueId(),
		type: toastType,
		message,
		theme,
		closeOnClick,
		transition
	}

	setToastSignals((t) => [...t, newToastSignal])

	setInterval(() => {
		const newToasts = toastSignals().filter((toast) => toast.id !== newToastSignal.id)
		setToastSignals(newToasts)
	}, toastDuration)
}

export const onRemoveToast = (id: string) => {
	const toastToRemove = toastSignals().find((toast) => toast.id === id)

	if (toastToRemove) {
		const newToasts = toastSignals().filter((toast) => toast.id !== toastToRemove.id)
		setToastSignals(newToasts)
	}
}

export const toastify = ((): Toaster => {
	const toaster: Toaster = (message, options) => {
		const toastType = options?.type || defaults.type
		onAddToastByType(toastType, message, options)
	}
	toaster.info = (message, options) => {
		onAddToastByType('info', message, options)
	}
	toaster.success = (message, options) => {
		onAddToastByType('success', message, options)
	}
	toaster.warn = (message, options) => {
		onAddToastByType('warn', message, options)
	}
	toaster.error = (message, options) => {
		onAddToastByType('error', message, options)
	}
	return toaster
})()
