import { generatorAlert } from '../store'

export const clipboard = async (password: string) => {
	navigator.clipboard
		.writeText(password)
		.then(() => generatorAlert.success('Password copied to clipboard successfully'))
}
