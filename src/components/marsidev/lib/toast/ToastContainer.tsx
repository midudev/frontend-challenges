/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import type { ToastPosition, ToastContainerProps } from '@components/marsidev/types'
import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Toast } from '@components/marsidev/lib/toast/Toast'
import { toastSignals } from '@components/marsidev/lib/toast/toastify'
import { DEFAULT_TOAST_OPTIONS as defaults } from '@components/marsidev/utils/constants'

const CLASSES_BY_POSITION: Record<ToastPosition, string> = {
	'bottom-left': 'bottom-0 translate-x-0 sm:left-8 sm:bottom-8',
	'bottom-center': 'bottom-0 translate-x-0 sm:left-2/4 sm:bottom-8 sm:-translate-x-2/4',
	'bottom-right': 'bottom-0 translate-x-0 sm:right-8 sm:bottom-8',
	'top-left': 'top-0 translate-x-0 sm:left-8 sm:top-8',
	'top-center': 'top-0 translate-x-0 sm:left-2/4 sm:top-8 sm:-translate-x-2/4',
	'top-right': 'top-0 translate-x-0 sm:right-8 sm:top-8'
}

export const ToastContainer: Component<ToastContainerProps> = (props) => {
	const position = props.position ?? defaults.position
	const newestOnTop = props.newestOnTop ?? defaults.newestOnTop

	const classByPosition = CLASSES_BY_POSITION[position]

	return (
		<Portal>
			<aside
				class='fixed z-[9999] flex w-full gap-0 overflow-hidden transition-all duration-700 sm:w-[320px] sm:gap-4'
				classList={{
					'flex-col-reverse': newestOnTop,
					'flex-col': !newestOnTop,
					[classByPosition]: true
				}}
			>
				<For each={toastSignals()}>
					{(toast) => {
						return (
							<Toast
								toast={toast}
								closeOnClick={props.closeOnClick}
								theme={props.theme}
								transition={props.transition}
								position={position}
							/>
						)
					}}
				</For>
			</aside>
		</Portal>
	)
}
