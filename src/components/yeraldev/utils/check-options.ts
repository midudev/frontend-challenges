import { PasswordTags, PasswordSetting, TagValue } from '../models'
import { generatorAlert } from '../store'

export const checkOptions = (current: TagValue, passwordSetting: PasswordSetting) => {
	const { tag, value } = current
	const status = !value ? 'enabled' : 'disabled'
	const booleans = Object.values(passwordSetting)
		.filter(({ tag }) => tag !== PasswordTags.passwordLength)
		.filter(({ value }) => value).length
	const checkAlert = booleans === 1 && value === true
	if (checkAlert) generatorAlert.danger('Your password required one character type')
	if (!checkAlert) generatorAlert.info(`${tag} ${status}`)
	return checkAlert
}
