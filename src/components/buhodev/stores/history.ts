import { writable } from '@components/buhodev/stores/localStorage'
import { get } from 'svelte/store'
import { addToast } from '@components/buhodev/stores/toast'

type PasswordEntry = {
	password: string
	generated: string
}

export const savedPasswords = writable('saved_passwords', [])

export const addPassword = (passwordEntry: PasswordEntry) => {
	if (passwordEntry.password === get(savedPasswords)[0]?.password) {
		addToast({ type: 'info', timeout: 3000, message: 'Password already saved' })
		// avoid having duplicated keys on each block
		return
	}
	savedPasswords.update((all) => [{ ...passwordEntry }, ...all])
	addToast({ type: 'info', timeout: 3000, message: 'Saved' })
}

export const deletePassword = (password: PasswordEntry['password']) => {
	savedPasswords.update((all) => all.filter((passwordEntry) => passwordEntry.password !== password))
}

export const clearAll = () => {
	savedPasswords.update(() => [])
}
