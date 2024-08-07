/** credits on https://github.com/fkhadra/react-toastify */
import { CSSTransition } from './CSSTransition'
import '@components/marsidev/styles/toastify.css'
import '@components/marsidev/styles/toast-bounce-animation.css'
import '@components/marsidev/styles/toast-flip-animation.css'
import '@components/marsidev/styles/toast-slide-animation.css'
import '@components/marsidev/styles/toast-zoom-animation.css'

export const Bounce = CSSTransition({
	enter: 'toastify--animate toastify__bounce-enter',
	exit: 'toastify--animate toastify__bounce-exit',
	appendPosition: true
})

export const Slide = CSSTransition({
	enter: 'toastify--animate toastify__slide-enter',
	exit: 'toastify--animate toastify__slide-exit',
	appendPosition: true
})

export const Zoom = CSSTransition({
	enter: 'toastify--animate toastify__zoom-enter',
	exit: 'toastify--animate toastify__zoom-exit'
})

export const Flip = CSSTransition({
	enter: 'toastify--animate toastify__flip-enter',
	exit: 'toastify--animate toastify__flip-exit'
})
