/** credits on https://github.com/fkhadra/react-toastify */
import { COLLAPSE_DURATION } from '@components/marsidev/utils/constants'

/**
 * Used to collapse toast after exit animation
 */
export function collapseToast(node: HTMLElement, done: () => void, duration = COLLAPSE_DURATION) {
	const { scrollHeight, style } = node

	requestAnimationFrame(() => {
		style.minHeight = 'initial'
		style.height = scrollHeight + 'px'
		style.transition = `all ${duration}ms`

		requestAnimationFrame(() => {
			style.height = '0'
			style.padding = '0'
			style.margin = '0'
			setTimeout(done, duration as number)
		})
	})
}
