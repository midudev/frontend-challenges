export interface SliderType {
	min: number
	max: number
	value: number
	changeHandler: (value: number) => void
}

export interface PasswordType {
	passwordLength: number
	charactersTypes: string[]
}

export interface CharacterType {
	onChangeHandler: (list: string[]) => void
}
