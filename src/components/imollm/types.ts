export interface PasswordData {
	password: string
	strength: string
	type: 'alphanumeric' | 'random' | 'numbers'
	length: number
}
