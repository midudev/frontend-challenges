import { writable } from 'svelte/store'

const DEFAULT_OPTIONS = {
	length: 18,
	numbers: true,
	lowercase: true,
	uppercase: true,
	symbols: true
}

const options = writable(JSON.parse(localStorage.getItem('fredoist_options')) || DEFAULT_OPTIONS)

export const useOptions = () => {
	const { subscribe, update: updateStore } = options

	const update = (values: Partial<typeof DEFAULT_OPTIONS>) =>
		updateStore((current) => ({ ...current, ...values }))

	subscribe((values) => localStorage.setItem('fredoist_options', JSON.stringify(values)))

	return {
		subscribe,
		update
	}
}
