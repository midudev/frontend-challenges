<script lang="ts">
	import { useOptions } from '@hooks/fredoist/use-options'

	const options = useOptions()
	const checkboxes = Object.keys($options).slice(1)

	async function updateCheckbox(event: Event) {
		const input = event.target as HTMLInputElement
		const { name, checked } = input
		options.update({ [name]: checked })
	}
</script>

<div class="grid grid-cols-2 gap-5 mb-16">
	{#each checkboxes as checkbox}
		<label class="inline-flex items-center gap-x-2 capitalize">
			<input
				type="checkbox"
				name={checkbox}
				checked={$options[checkbox]}
				class="appearance-none w-6 h-6 border-2 border-[#f8ef00] checked:bg-[#f8ef00] cursor-pointer"
				on:change={updateCheckbox}
			/>
			{checkbox}
		</label>
	{/each}
</div>
