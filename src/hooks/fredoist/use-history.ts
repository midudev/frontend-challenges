import { writable } from 'svelte/store'
import { usePassword } from '@hooks/fredoist/use-password'

const history = writable<{ value: string; timestamp: number }[]>(
	JSON.parse(localStorage.getItem('fredoist_history')) || []
)

export function useHistory() {
	const { subscribe, set, update } = history
	const password = usePassword()
	password.subscribe((password) =>
		update((items) => {
			const filtered = items.filter(({ value }) => value !== password)
			return password !== '' ? [{ value: password, timestamp: Date.now() }, ...filtered] : items
		})
	)

	const clear = () => {
		set([])
	}

	subscribe((items) => localStorage.setItem('fredoist_history', JSON.stringify(items)))

	return {
		subscribe,
		clear
	}
}
