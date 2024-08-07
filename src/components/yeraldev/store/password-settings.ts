import { writable } from 'svelte/store'
import { initSettings, PasswordSetting } from '../models'
import { checkOptions } from '../utils'

const passwordSettingsMethods = () => {
	const { subscribe, update, set } = writable<PasswordSetting>(initSettings)
	const reset = () => set(initSettings)
	const refresh = () => update((setting) => setting)
	const customizePasswordLength = (customPasswordLength: number) =>
		update((setting) => {
			return {
				...setting,
				passwordLength: { ...setting.passwordLength, value: customPasswordLength }
			}
		})
	const switchLowerCase = () =>
		update((setting) => {
			if (checkOptions(setting.lowercase, setting)) return setting
			return { ...setting, lowercase: { ...setting.lowercase, value: !setting.lowercase.value } }
		})
	const switchUpperCase = () =>
		update((setting) => {
			if (checkOptions(setting.uppercase, setting)) return setting
			return { ...setting, uppercase: { ...setting.uppercase, value: !setting.uppercase.value } }
		})
	const switchNumbers = () =>
		update((setting) => {
			if (checkOptions(setting.numbers, setting)) return setting
			return { ...setting, numbers: { ...setting.numbers, value: !setting.numbers.value } }
		})
	const switchSymbols = () =>
		update((setting) => {
			if (checkOptions(setting.symbols, setting)) return setting
			return { ...setting, symbols: { ...setting.symbols, value: !setting.symbols.value } }
		})
	return {
		subscribe,
		reset,
		refresh,
		customizePasswordLength,
		switchLowerCase,
		switchUpperCase,
		switchNumbers,
		switchSymbols
	}
}

export const passwordSettings = passwordSettingsMethods()
