import { writable } from 'svelte/store'
import { generatePassword, GeneratePasswordParams } from '@components/renatomendozac/utils/generate-password'

const initialState = 'HackToBerFest-2022'

const { subscribe, set } = writable<string>(initialState)
const generate = (params: GeneratePasswordParams): void => set(generatePassword(params))

export { initialState, subscribe, generate }
