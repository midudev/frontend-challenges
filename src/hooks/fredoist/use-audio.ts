import { writable } from 'svelte/store'

const audio = writable(true)

export function useAudio() {
	const { subscribe, update } = audio

	const toggle = () => update((state) => !state)

	return {
		subscribe,
		toggle
	}
}
