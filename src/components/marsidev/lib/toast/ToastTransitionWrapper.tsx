/** @jsxImportSource solid-js */
import type { ToastPosition, ToastTransition } from '@components/marsidev/types'
import type { JSX, ParentComponent } from 'solid-js'
import type { ToastTransitionProps } from '@components/marsidev/lib/toast/CSSTransition'
import { Bounce, Flip, Slide, Zoom } from '@components/marsidev/lib/toast/Transitions'

interface TransitionProviderProps {
	transition: ToastTransition
	isActive: boolean
	position: ToastPosition
	toastId: string
	onFinish: () => void
}

export const ToastTransitionWrapper: ParentComponent<TransitionProviderProps> = (props) => {
	if (props.transition === 'none') return props.children

	const Transitions: Record<string, (props: ToastTransitionProps) => JSX.Element> = {
		bounce: Bounce,
		flip: Flip,
		slide: Slide,
		zoom: Zoom
	}

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const Transition = Transitions[props.transition]!

	return (
		<Transition
			isActive={props.isActive}
			onFinish={props.onFinish}
			position={props.position}
			preventExitTransition={false}
			toastId={props.toastId}
		>
			{props.children}
		</Transition>
	)
}
