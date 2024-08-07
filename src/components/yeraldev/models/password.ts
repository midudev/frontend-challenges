export interface TagValue {
	tag: string
	value: number | boolean
}
export const enum PasswordTags {
	passwordLength = 'Password length',
	uppercase = 'Uppercase',
	lowercase = 'Lowercase',
	numbers = 'Numbers',
	symbols = 'Symbols'
}
export interface PasswordSetting {
	passwordLength: TagValue
	lowercase: TagValue
	uppercase: TagValue
	numbers: TagValue
	symbols: TagValue
}

export const initSettings: PasswordSetting = {
	passwordLength: { tag: PasswordTags.passwordLength, value: 12 },
	lowercase: { tag: PasswordTags.lowercase, value: true },
	uppercase: { tag: PasswordTags.uppercase, value: true },
	numbers: { tag: PasswordTags.numbers, value: true },
	symbols: { tag: PasswordTags.symbols, value: true }
}
