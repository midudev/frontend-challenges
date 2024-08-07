import { derived } from 'svelte/store'
import { passwordSettings } from '../store/password-settings'
import { passwordGenerator } from '../utils'

export const passwordGenerated = derived(passwordSettings, ($passwordSettings) =>
	passwordGenerator($passwordSettings)
)
