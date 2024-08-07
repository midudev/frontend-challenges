/** credits on https://github.com/fkhadra/react-toastify */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/** @jsxImportSource solid-js */
import type { ParentProps } from 'solid-js'
import type { ToastPosition } from '@components/marsidev/types'
import { onMount, createEffect } from 'solid-js'
import { ENTRANCE_ANIMATION_END } from '@components/marsidev/utils/constants'
import { collapseToast } from '@components/marsidev/lib/toast/collapseToast'

export interface ToastTransitionProps extends ParentProps {
	isActive: boolean
	onFinish: () => void
	position: ToastPosition
	preventExitTransition: boolean
	toastId: string
}

export interface CSSTransitionProps {
	/**
	 * Css class to apply when toast enter
	 */
	enter: string

	/**
	 * Css class to apply when toast leave
	 */
	exit: string

	/**
	 * Append current toast position to the class name.
	 * If multiple classes are provided, only the last one will get the position
	 * For instance `my-class--top-center`...
	 * `Default: false`
	 */
	appendPosition?: boolean

	/**
	 * Collapse toast smoothly when exit animation end
	 * `Default: true`
	 */
	collapse?: boolean

	/**
	 * Collapse transition duration
	 * `Default: 300`
	 */
	collapseDuration?: number
}

/* eslint-disable no-unused-vars */
const enum AnimationStep {
	Enter,
	Exit
}
/* eslint-enable no-unused-vars */

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * CSSTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */
export function CSSTransition(cssProps: CSSTransitionProps) {
	return function ToastTransition(transitionProps: ToastTransitionProps) {
		let toastNode: HTMLDivElement | undefined

		const enterClassName = cssProps.appendPosition
			? `${cssProps.enter}--${transitionProps.position}`
			: cssProps.enter

		const exitClassName = cssProps.appendPosition
			? `${cssProps.exit}--${transitionProps.position}`
			: cssProps.exit

		let baseClassName: string
		let animationStep = AnimationStep.Enter

		onMount(() => {
			const node = document.getElementById(transitionProps.toastId) as HTMLDivElement
			toastNode = node
			onEnter()
		})

		createEffect(() => {
			if (!transitionProps.isActive) {
				transitionProps.preventExitTransition ? onExited() : onExit()
			}
		})

		function onEnter() {
			const node = toastNode!
			baseClassName = node.className
			node.className += ` ${enterClassName}`
			node.addEventListener('animationend', onEntered)
			node.addEventListener('animationcancel', onEntered)
		}

		function onEntered(e: AnimationEvent) {
			if (e.target !== toastNode) return

			const node = toastNode!
			node.dispatchEvent(new Event(ENTRANCE_ANIMATION_END))
			node.removeEventListener('animationend', onEntered)
			node.removeEventListener('animationcancel', onEntered)
			if (animationStep === AnimationStep.Enter && e.type !== 'animationcancel') {
				node.className = baseClassName
			}
		}

		function onExit() {
			animationStep = AnimationStep.Exit
			const node = toastNode!

			node.className += ` ${exitClassName}`
			node.addEventListener('animationend', onExited)
		}

		function onExited() {
			const node = toastNode!

			node.removeEventListener('animationend', onExited)
			cssProps.collapse
				? collapseToast(node, transitionProps.onFinish, cssProps.collapseDuration)
				: transitionProps.onFinish()
		}

		return transitionProps.children
	}
}
