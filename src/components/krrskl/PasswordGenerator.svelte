<script>
	import { onMount } from 'svelte'

	import Card from '@components/krrskl/Card.svelte'
	import PasswordDisplay from '@components/krrskl/PasswordDisplay.svelte'
	import InputRange from '@components/krrskl/InputRange.svelte'
	import Checkbox from './Checkbox.svelte'
	import { alphabet, numbers, symbols } from './utils'

	const MIN_LENGTH = 4
	const MAX_LENGTH = 30
	let length = 8
	let password = '9rME$@41xViY'
	const settings = {
		uppercase: {
			label: 'uppercase',
			checked: true,
			values: alphabet.toUpperCase()
		},
		lowercase: {
			label: 'lowercase',
			checked: true,
			values: alphabet
		},
		numbers: {
			label: 'numbers',
			checked: true,
			values: numbers
		},
		symbols: {
			label: 'symbols',
			checked: true,
			values: symbols
		}
	}

	function generatePassword() {
		const values = Object.values(settings)
			.filter((setting) => setting.checked)
			.flatMap((setting) => setting.values)

		const suffle = [...values].sort(() => Math.random() - 0.5).join('')

		password = suffle.slice(0, length / 2) + suffle.slice(-length / 2)
	}

	onMount(generatePassword)
</script>

<Card>
	<div class="flex flex-col">
		<span class="mb-4">Generated password</span>
		<PasswordDisplay {password} on:onGenerate={generatePassword} />
		<InputRange
			label="Password length"
			min={MIN_LENGTH}
			max={MAX_LENGTH}
			bind:value={length}
			on:onChange={generatePassword}
		/>

		<div class="grid grid-cols-2">
			{#each Object.entries(settings) as [_, setting]}
				<Checkbox
					bind:checked={setting.checked}
					label={setting.label}
					on:onChange={generatePassword}
				/>
			{/each}
		</div>
	</div>
</Card>
