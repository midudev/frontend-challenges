<script lang="ts">
	import { formStore } from '@components/renatomendozac/store'
	import Checkbox from '@components/renatomendozac/components/Checkbox.svelte'

	const { uppercases, lowercases, numbers, symbols } = formStore.initialState
	const options = [
		{
			id: 'uppercases',
			label: 'Include Uppercase Letters',
			checked: uppercases,
			disabled: false,
		},
		{
			id: 'lowercases',
			label: 'Include Lowercase Letters',
			checked: lowercases,
			disabled: false,
		},
		{
			id: 'numbers',
			label: 'Include Numbers',
			checked: numbers,
			disabled: false,
		},
		{
			id: 'symbols',
			label: 'Include Symbols',
			checked: symbols,
			disabled: false,
		}
	]

	let numberOfSelected = Number(uppercases) + Number(lowercases) + Number(numbers) + Number(symbols)

	const onChange = (event: Event) => {
		const { checked, value: name } = event.target as HTMLInputElement
		formStore.update({ [name]: checked })

		checked === true ? numberOfSelected++ : numberOfSelected--

		const optionChanged = options.find(({ id }) => id === name)
		optionChanged.checked = checked

		if (numberOfSelected === 1) {
			const uniqueSelected = options.find(({ checked }) => checked)
			uniqueSelected.disabled = true
		} else {
			options.forEach(option => {
				option.disabled = false
			})
		}
	}
</script>

<div class="flex flex-col gap-2">
	{#each options as { id, label, checked, disabled }}
		<Checkbox
			{id}
			{checked}
			disabled={numberOfSelected === 1 && disabled}
			on:change={onChange}
		>
			{label}
		</Checkbox>
	{/each}
</div>
