import { writable } from 'svelte/store'
import { GeneratePasswordParams } from '@components/renatomendozac/utils/generate-password'

const initialState: GeneratePasswordParams = {
	length: 4,
	uppercases: true,
	lowercases: true,
	numbers: true,
	symbols: false
}

const { subscribe, update: updateState } = writable<GeneratePasswordParams>(initialState)
const update = (props: Partial<GeneratePasswordParams>): void =>
	updateState(state => ({ ...state, ...props }))

export { initialState, subscribe, update }
