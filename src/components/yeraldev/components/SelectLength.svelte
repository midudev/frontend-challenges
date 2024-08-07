<script lang="ts">
	import { TagValue } from '../models'
	export let data: TagValue
	export let customMethod: (e: number) => void
	let min = 4
	let max = 20
	let items: number[] = []
	for (let i = min; i <= max; i++) {
		items = [...items, i]
	}
</script>

<section class="--yeraldev-range-section">
	<div class="--yeraldev-range-selector">
		{#each items as item}
			<span
				class="--yeraldev-slot"
				class:--yeraldev-added={data.value >= item}
				on:mouseenter={() => customMethod(item)}
				on:touchstart={() => customMethod(item)}
			/>
		{/each}
	</div>
	<p>{data.tag}: {data.value}</p>
</section>

<style>
	.--yeraldev-range-section {
		display: grid;
		gap: 1rem;
		transition: all 0.5s ease-in-out;
		text-shadow: var(--yeraldev-text-shadow-base);
	}
	.--yeraldev-range-selector {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.5rem;
		overflow: hidden;
	}
	.--yeraldev-range-selector:hover + p {
		text-shadow: var(--yeraldev-text-shadow-hover);
	}
	.--yeraldev-slot {
		height: 1rem;
		width: 1rem;
		box-shadow: inset var(--yeraldev-red) -1px -1px 3px;
		border: 1px solid var(--yeraldev-red);
		border-radius: 0.25rem;
	}
	.--yeraldev-added {
		background-color: var(--yeraldev-green);
		box-shadow: inset var(--yeraldev-text-shadow-hover);
		transform: scale(1.1);
	}
</style>
