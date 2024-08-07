<script lang="ts">
	import { useOptions } from '@hooks/fredoist/use-options'

	const options = useOptions()
	$: bubblePosition = (($options.length - 0) * 100) / (100 - 0)

	async function updateLength(event: Event) {
		const input = event.target as HTMLInputElement
		length = parseInt(input.value)
		options.update({ length })
	}
</script>

<div class="relative my-16">
	<output
		for="length"
		class="absolute w-5 text-center text-xs font-[Barlow,sans-serif] leading-none -top-5 cursor-default"
		style={`left: calc(${bubblePosition}% + (${0 - bubblePosition * 0.15}px))`}
	>
		{$options.length}
	</output>
	<input
		type="range"
		aria-label="Password length"
		value={$options.length}
		min="0"
		max="100"
		data-length={$options.length}
		class="fredoist-slider appearance-none h-1 bg-[#00f0ff] w-full focus:outline-none"
		on:input={updateLength}
	/>
</div>

<style>
	.fredoist-slider:focus::-webkit-slider-thumb {
		outline: auto;
		outline-color: #000;
	}

	.fredoist-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.25rem;
		height: 1.25rem;
		background: #f8ef00;
		cursor: ew-resize;
		position: relative;
	}
</style>
