<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	export let checked = false
	export let label = ''
</script>

<div class="krrskl-checkbox flex items-center">
	<input type="checkbox" bind:checked on:change={dispatch('onChange', checked)} />
	{#if checked}
		<svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M32 0H4C1.8 0 0 1.8 0 4V32C0 34.2 1.8 36 4 36H32C34.2 36 36 34.2 36 32V4C36 1.8 34.2 0 32 0ZM32 32H4V4H32V32ZM29.98 12L27.16 9.16L13.98 22.34L8.82 17.2L5.98 20.02L13.98 28L29.98 12Z"
			/>
		</svg>
	{:else}
		<svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M32 4V32H4V4H32ZM32 0H4C1.8 0 0 1.8 0 4V32C0 34.2 1.8 36 4 36H32C34.2 36 36 34.2 36 32V4C36 1.8 34.2 0 32 0Z"
			/>
		</svg>
	{/if}
	<span class="krrskl-checkbox__label ml-3">Allow {label}</span>
</div>

<style>
	.krrskl-checkbox input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 20px;
		width: 20px;
	}

	.krrskl-checkbox svg {
		fill: var(--krrskl-primary-color);
	}
</style>
