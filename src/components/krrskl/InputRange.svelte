<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let label = ''
	export let min = 0
	export let max = 100
	export let value = 0
	export let step = 1

	function onRangeChanged() {
		dispatch('onChange', { value })
	}
</script>

<div class="krrskl-input-range flex flex-col mb-4">
	<span class="krrskl-input-range__label mb-4">{label}</span>
	<strong class="krrskl-input-range__value">{value}</strong>
	<input type="range" {min} {max} bind:value {step} on:change={onRangeChanged} />
</div>

<style>
	.krrskl-input-range {
		position: relative;
	}

	.krrskl-input-range__value {
		position: absolute;
		right: 0;
	}

	.krrskl-input-range input[type='range'] {
		-webkit-appearance: none;
		height: 0.5rem;
		background: var(--krrskl-primary-color);
		outline: none;
		border-radius: 8px;
	}

	.krrskl-input-range input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: var(--krrskl-primary-color);
		border: 2px solid var(--krrskl-white-color);
		cursor: ew-resize;
	}

	.krrskl-input-range input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
	}
</style>
