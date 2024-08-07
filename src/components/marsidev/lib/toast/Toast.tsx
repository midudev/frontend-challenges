/** @jsxImportSource solid-js */
import type {
	CommonToastOptions,
	WithUndef,
	ToastSignal,
	ToastType,
	ToastPosition
} from '@components/marsidev/types'
import type { Component, JSX } from 'solid-js'
import { createSignal } from 'solid-js'
import { onRemoveToast } from '@components/marsidev/lib/toast/toastify'
import { SuccessIcon, ErrorIcon, InfoIcon, WarnIcon } from '@components/marsidev/components/icons'
import { DEFAULT_TOAST_OPTIONS as defaults } from '@components/marsidev/utils/constants'
import { ToastTransitionWrapper } from '@components/marsidev/lib/toast/ToastTransitionWrapper'
import { ToastCloseButton } from '@components/marsidev/lib/toast/ToastCloseButton'

type ToastProps = WithUndef<CommonToastOptions> & {
	toast: ToastSignal
	position: ToastPosition
}

const ICONS_BY_TYPE: Record<ToastType, JSX.Element> = {
	success: SuccessIcon,
	error: ErrorIcon,
	info: InfoIcon,
	warn: WarnIcon,
	default: null
}

export const Toast: Component<ToastProps> = (props) => {
	const { toast, position: toastPosition } = props
	const { id, message, type: toastType } = toast

	// priority: toast props (toast function) -> component props -> default options
	const closeOnClick = toast.closeOnClick ?? props.closeOnClick ?? defaults.closeOnClick
	const transition = toast.transition ?? props.transition ?? defaults.transition
	const theme = toast.theme ?? props.theme ?? defaults.theme
	const isDarkTheme = theme === 'dark'

	const [isActive, setIsActive] = createSignal(true)

	const onRemove = () => {
		if (transition === 'none') {
			onRemoveToast(id)
			return
		}

		// this will trigger the exit animation and finally will execute the onFinish function
		setIsActive(false)
	}

	const ToastIcon = ICONS_BY_TYPE[toastType]

	return (
		<ToastTransitionWrapper
			isActive={isActive()}
			onFinish={() => onRemoveToast(id)}
			transition={transition}
			position={toastPosition}
			toastId={`toast.${id}`}
		>
			<div
				id={`toast.${id}`}
				aria-labelledby={`toast.${id}.body.message`}
				aria-live='assertive'
				aria-atomic='true'
				role='alert'
				class='relative flex max-h-[800px] min-h-[64px] flex-row items-start justify-start overflow-hidden rounded-none p-[8px] shadow-md transition-all hover:shadow-lg sm:rounded-md'
				classList={{
					'bg-[#121212] text-white': isDarkTheme,
					'bg-white text-[#757575]': !isDarkTheme,
					'cursor-pointer': closeOnClick,
					'cursor-auto': !closeOnClick
				}}
				onClick={(e) => {
					e.stopPropagation()
					if (closeOnClick) {
						onRemove()
					}
				}}
			>
				<div
					id={`toast.${id}.body`}
					class='mx-0 my-auto flex shrink grow basis-auto flex-row items-center border-black p-[6px]'
				>
					<span id={`toast.${id}.body.icon`}>{ToastIcon}</span>
					<p id={`toast.${id}.body.message`} class='select-none break-words'>
						{message}
					</p>
				</div>

				<ToastCloseButton onRemove={onRemove} theme={theme} id={`toast.${id}.close-button`} />
			</div>
		</ToastTransitionWrapper>
	)
}
