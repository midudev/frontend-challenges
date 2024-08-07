import { writable } from 'svelte/store'
import {
	GeneratorAlertFormat,
	InitGeneratorAlertFormat,
	GeneratorAlertStyle,
	GeneratorAlertType
} from '../models'

const generatorAlertFormatConfig = () => {
	const { subscribe, update, set } = writable<GeneratorAlertFormat>(InitGeneratorAlertFormat)
	const close = () => set(InitGeneratorAlertFormat)
	const autoClose = () => setTimeout(() => close(), 3000)
	const customStyle = ({ message, cardStyle, iconStyle, type }: Partial<GeneratorAlertFormat>) => {
		update(() => {
			return { message, show: true, type, cardStyle, iconStyle }
		})
		autoClose()
	}
	const success = (message: string) => {
		update(() => {
			return {
				message,
				show: true,
				type: GeneratorAlertType.success,
				cardStyle: GeneratorAlertStyle.successOpacity,
				iconStyle: GeneratorAlertStyle.success
			}
		})
		autoClose()
	}
	const info = (message: string) => {
		update(() => {
			return {
				message,
				show: true,
				type: GeneratorAlertType.info,
				cardStyle: GeneratorAlertStyle.infoOpacity,
				iconStyle: GeneratorAlertStyle.info
			}
		})
		autoClose()
	}
	const warning = (message: string) => {
		update(() => {
			return {
				message,
				show: true,
				type: GeneratorAlertType.warning,
				cardStyle: GeneratorAlertStyle.warningOpacity,
				iconStyle: GeneratorAlertStyle.warning
			}
		})
		autoClose()
	}
	const danger = (message: string) => {
		update(() => {
			return {
				message,
				show: true,
				type: GeneratorAlertType.warning,
				cardStyle: GeneratorAlertStyle.dangerOpacity,
				iconStyle: GeneratorAlertStyle.danger
			}
		})
		autoClose()
	}
	return {
		subscribe,
		close,
		customStyle,
		success,
		info,
		warning,
		danger
	}
}

export const generatorAlert = generatorAlertFormatConfig()
