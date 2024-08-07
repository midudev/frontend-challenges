import { onMounted, ref } from 'vue'

const INITIAL_RANGE_VALUE = 5
const COPIED_MESSAGE_TIME = 400

export const VALID_CHARACTERS_TO_USE = Object.freeze({
	LOWERCASE: 'a-z',
	UPPERCASE: 'A-Z',
	NUMBERS: '0-9',
	SPECIAL_CHARACTERS: '!@#$%^&*()='
})

/**
 * Returns an array of characters using ASCII
 * @param startFrom Start element index
 * @param quantity Elements quantity
 * @returns Characters string
 */
const generateCharacterRange = (startFrom: number, quantity: number) =>
	Array(quantity)
		.fill('')
		.map((_, index) => String.fromCharCode(index + startFrom))

/**
 * Generate a new random characters array depending of what characters are selected to be used
 * @param charactersToUse String array of characters to be used
 * @returns Random characters array
 */
const generateCharactersArray = (charactersToUse: string[]) => {
	const characterToUse = []
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.LOWERCASE)) {
		characterToUse.push(...generateCharacterRange(97, 26)) // a-z
	}
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.UPPERCASE)) {
		characterToUse.push(...generateCharacterRange(65, 26)) // A-Z
	}
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.NUMBERS)) {
		characterToUse.push(...generateCharacterRange(48, 10)) // 0-9
	}
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS)) {
		characterToUse.push(...VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS.split('')) // special characters
	}
	return characterToUse.sort(() => (Math.random() > 0.5 ? 1 : -1)) as string[]
}

export const usePasswordGeneratorRepository = () => {
	let timeoutReference = null

	const charactersToUse = ref<string[]>([
		VALID_CHARACTERS_TO_USE.LOWERCASE,
		VALID_CHARACTERS_TO_USE.UPPERCASE,
		VALID_CHARACTERS_TO_USE.NUMBERS,
		VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS
	])
	const characters = ref<string[]>(generateCharactersArray(charactersToUse.value))
	const range = ref(INITIAL_RANGE_VALUE)
	const password = ref('')
	const copied = ref(false)

	/**
	 * Generate a new random string using the generated random string array
	 */
	const generatePassword = () => {
		password.value = ''
		for (let i = 0; i < range.value; i++) {
			const randomIndex = parseInt(`${Math.random() * characters.value.length}`, 10)
			password.value += characters.value[randomIndex]
		}
	}

	const onSelectedCharactersChange = () => {
		characters.value = generateCharactersArray(charactersToUse.value)
		generatePassword()
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password.value)
		copied.value = true
		if (timeoutReference) {
			clearTimeout(timeoutReference)
		}
		timeoutReference = setTimeout(() => {
			copied.value = false
		}, COPIED_MESSAGE_TIME)
	}

	const isCheckboxDisabled = (charactersSet: string) =>
		charactersToUse.value.length <= 1 && charactersToUse.value.includes(charactersSet)

	onMounted(() => {
		generatePassword()
	})

	return {
		charactersToUse,
		copied,
		copyToClipboard,
		generatePassword,
		isCheckboxDisabled,
		onSelectedCharactersChange,
		password,
		range
	}
}
