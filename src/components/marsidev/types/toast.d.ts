import type { WithUndef } from './helpers'

/**
 * Set the toast type.
 * `One of: 'info', 'success', 'warn', 'error', 'default'`
 */
export type ToastType = 'info' | 'success' | 'warn' | 'error' | 'default'

export type ToastPosition =
	| 'top-left'
	| 'top-right'
	| 'top-center'
	| 'bottom-left'
	| 'bottom-right'
	| 'bottom-center'

export type ToastTransition = 'bounce' | 'flip' | 'slide' | 'zoom' | 'none'

export type ToastTheme = 'light' | 'dark'

/** Options that can be used from the provider or from the toastify function */
export type CommonToastOptions = {
	/**
	 * Theme to use.
	 * `One of: 'light', 'dark'`
	 * `Default: 'light'`
	 */
	theme?: ToastTheme

	/**
	 * Remove the toast when clicked.
	 * `Default: true`
	 */
	closeOnClick?: boolean

	/**
	 * Transition animation to use when showing/removing toasts.
	 */
	transition?: ToastTransition
}

/** Toastify function options */
export type ToastOptions = CommonToastOptions & {
	/**
	 * Set the delay in ms to close the toast automatically.
	 * `Default: 5000`
	 */
	duration?: number

	/**
	 * Set the toast type.
	 * `One of: 'info', 'success', 'warn', 'error', 'default'`.
	 *
	 * This property will be ignored if used from a toastify sub-method. Example:
	 * `toastify.success('message', { type: 'warn' })` will render a success toast.
	 */
	type?: ToastType
}

/** ToastProvider props */
export type ToastContainerProps = CommonToastOptions & {
	/**
	 * Set the default position to use.
	 * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
	 * `Default: 'top-right'`
	 */
	position?: ToastPosition

	/**
	 * Whether or not to display the newest toast on top.
	 * `Default: false`
	 */
	newestOnTop?: boolean
}

export type ToastSignal = WithUndef<CommonToastOptions> & {
	/**
	 * Unique ID of the toast.
	 */
	id: string

	/**
	 * Body of the toast.
	 */
	message: string

	/**
	 * Set the toast type.
	 * `One of: 'info', 'success', 'warn', 'error', 'default'`
	 */
	type: ToastType
}

type ToastifyMethod = (message: string, options?: ToastOptions) => void

export type Toaster = {
	(message: string, options?: ToastOptions): void
	info: ToastifyMethod
	success: ToastifyMethod
	warn: ToastifyMethod
	error: ToastifyMethod
}
