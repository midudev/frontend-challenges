export const enum GeneratorAlertStyle {
	success = 'hsl(100, 70%, 60%)',
	successOpacity = 'hsl(100, 70%, 60%, 0.3)',
	info = 'hsl(239, 100%, 74%)',
	infoOpacity = 'hsla(239, 100%, 74%, 0.3)',
	warning = 'hsla(47, 100%, 65%)',
	warningOpacity = 'hsla(47, 100%, 65%, 0.3)',
	danger = 'hsla(0, 80%, 60%)',
	dangerOpacity = 'hsla(0, 80%, 60%, 0.3)'
}
export const enum GeneratorAlertType {
	success = 'success',
	info = 'info',
	warning = 'warning'
}

export interface GeneratorAlertFormat {
	message: string
	show: boolean
	type: string
	cardStyle: string
	iconStyle: string
}

export const InitGeneratorAlertFormat: GeneratorAlertFormat = {
	message: '',
	show: false,
	type: '',
	cardStyle: '',
	iconStyle: ''
}
