import { writable } from 'svelte/store'
import { usePassword } from '@hooks/fredoist/use-password'

const DEFAULT_VALUES = {
	score: 0,
	description: 'Empty'
}

const StrongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{16,})/
const RegularPassword =
	/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{12,}))/
const WeakPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,})/

export function useStrengthMeter() {
	const { subscribe, set } = writable(DEFAULT_VALUES)

	usePassword().subscribe((password) => {
		if (password.length > 0) {
			if (StrongPassword.test(password)) {
				set({
					score: 4,
					description: 'Strong'
				})
			} else if (RegularPassword.test(password)) {
				set({
					score: 3,
					description: 'Regular'
				})
			} else if (WeakPassword.test(password)) {
				set({
					score: 2,
					description: 'Weak'
				})
			} else {
				set({
					score: 1,
					description: 'Very Weak'
				})
			}
		} else {
			set(DEFAULT_VALUES)
		}
	})

	return {
		subscribe
	}
}
