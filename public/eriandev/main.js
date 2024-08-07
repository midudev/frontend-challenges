import { $, updateTextOf, toggleButtonsDisabledState, copyToClipboard } from './utils/dom.js'
import { getRandomPassword } from './utils/pass.js'

/** @type {HTMLButtonElement} */
const $triggerBtn = $('#trigger')
/** @type {HTMLButtonElement} */
const $decreaseBtn = $('#decrease')
/** @type {HTMLButtonElement} */
const $increaseBtn = $('#increase')
/** @type {HTMLSpanElement} */
const $charactersText = $('#characters')
/** @type {HTMLSpanElement} */
const $passwordText = $('#password')
/** @type {SVGElement} */
const $copyBtn = $('#copy')

const MIN_CHARACTERS_NUMBER = 8
const MAX_CHARACTERS_NUMBER = 32
let passwordGenerated = ''
let isGeneratingPassword = false
let charactersNumber = MIN_CHARACTERS_NUMBER

$copyBtn.addEventListener('click', copyTextPassGenerated)
$triggerBtn.addEventListener('click', triggersGeneratePassword)
$decreaseBtn.addEventListener('click', () => triggersUpdateCharactersNumber('decrease'))
$increaseBtn.addEventListener('click', () => triggersUpdateCharactersNumber('increase'))

updateCharactersTextWith(charactersNumber)

/**
 * @param {'decrease' | 'increase'} action
 * Se dispara al realizar la acción de incrementar o disminuir el número de carácteres
 */
function triggersUpdateCharactersNumber(action) {
	action === 'decrease' ? charactersNumber-- : charactersNumber++
	charactersLimitGuard()
	updateCharactersTextWith(charactersNumber)
}

/**
 * @param {number} number
 * Formatea el número y actualiza el número de carácteres que se muestra
 */
function updateCharactersTextWith(number) {
	const formatedCharactersText = number.toString().padStart(2, '00')
	updateTextOf($charactersText, formatedCharactersText)
}

/**
 * Se dispara al realizar la acción generar una nueva contraseña
 */
async function triggersGeneratePassword() {
	if (isGeneratingPassword) return

	isGeneratingPassword = true
	toggleButtonsDisabledState([$triggerBtn, $decreaseBtn, $increaseBtn], true)

	passwordGenerated = await getRandomPassword({ limit: charactersNumber })
	updateTextOf($passwordText, passwordGenerated)

	toggleButtonsDisabledState([$triggerBtn], false)
	isGeneratingPassword = false
	charactersLimitGuard()
}

/**
 * Copia en el portapapeles la contraseña que ha sido generada
 */
async function copyTextPassGenerated() {
	try {
		await copyToClipboard(passwordGenerated)
		console.info('Copying to clipboard was successful!')
	} catch (error) {
		if (error?.cause) console.error(error.cause)
		else console.error(error)
	}
}

/**
 * Función auxiliar para limitar el rango posible de carácteres máximo y mínimo para la contraseña
 */
function charactersLimitGuard() {
	const isOnUpperLimit = charactersNumber >= MAX_CHARACTERS_NUMBER
	const isOnLowerLimit = charactersNumber <= MIN_CHARACTERS_NUMBER

	toggleButtonsDisabledState([$increaseBtn], isOnUpperLimit)
	toggleButtonsDisabledState([$decreaseBtn], isOnLowerLimit)
}
