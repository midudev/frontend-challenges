import { writable, get } from 'svelte/store'
import { usePassword } from '@hooks/fredoist/use-password'
import { useOptions } from '@hooks/fredoist/use-options'
import { useHistory } from '@hooks/fredoist/use-history'
import { useAudio } from '@hooks/fredoist/use-audio'

const modal = writable(false)
const password = usePassword()
const options = useOptions()
const history = useHistory()
const audio = useAudio()

const SHORTCUTS = [
	{ key: ' ', description: 'Generate a new password', action: password.generate },
	{ key: 'Backspace', description: 'Clear history', action: history.clear },
	{
		key: 'c',
		description: 'Copy password to clipboard',
		action: () => navigator.clipboard.writeText(get(password))
	},
	{
		key: 'n',
		description: 'Toggle numbers',
		action: () => options.update({ numbers: !get(options).numbers })
	},
	{
		key: 'l',
		description: 'Toggle lowercase',
		action: () => options.update({ lowercase: !get(options).lowercase })
	},
	{
		key: 'u',
		description: 'Toggle uppercase',
		action: () => options.update({ uppercase: !get(options).uppercase })
	},
	{
		key: 's',
		description: 'Toggle symbols',
		action: () => options.update({ symbols: !get(options).symbols })
	},
	{
		key: 'a',
		description: 'Toggle Audio Playback',
		action: () => audio.toggle()
	},
	{
		key: 'k',
		description: 'Toggle Keyboard Shortcuts Modal',
		action: () =>
			!localStorage.getItem('fredoist_modal')
				? useShortcuts().hide()
				: modal.update((value) => !value)
	}
]

export function useShortcuts() {
	const { subscribe } = writable(SHORTCUTS)

	const show = () => modal.set(true)
	const hide = () => {
		localStorage.setItem('fredoist_modal', 'hidden')
		modal.set(false)
	}

	const handler = (event: KeyboardEvent) => {
		const focusedElement = document.activeElement as HTMLInputElement
		const isSpaceKey = event.key === ' '
		if (!event.ctrlKey && (focusedElement?.type !== 'checkbox' || !isSpaceKey)) {
			const shortcut = SHORTCUTS.find((shortcut) => shortcut.key === event.key)
			if (shortcut) {
				event.preventDefault()
				return shortcut.action()
			}
			if (event.key === 'Escape') return hide()
		}
	}

	return {
		subscribe,
		show,
		hide,
		handler,
		modal: { subscribe: modal.subscribe }
	}
}
