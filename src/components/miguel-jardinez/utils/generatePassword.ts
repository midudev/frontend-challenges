import { passwordGenerator } from '../const/charsDictionary'

export type TypePassword = 'UPPER' | 'LOWER' | 'UPPANDLOW' | 'ALL'

interface PasswordGenParams {
	limitPassword: number
	type: TypePassword
}

export const generatePassword = ({ limitPassword, type }: PasswordGenParams): string => {
	return passwordGenerator(limitPassword, type)
}
