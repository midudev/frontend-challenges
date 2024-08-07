<script lang="ts">
	import { TagValue } from '../models'
	export let data: TagValue, customMethod: () => void
</script>

<button class="--yeraldev-toggle-button" on:click={customMethod}>
	{data.tag}
	<span class="--yeraldev-toggle-back" class:--yeraldev-toggle={!data.value}>
		<em class="--yeraldev-toggle-switch" class:--yeraldev-red-icon={!data.value} />
	</span>
</button>

<style>
	.--yeraldev-toggle-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		height: 2rem;
		min-width: 12.5rem;
		color: inherit;
		text-shadow: inherit;
		transition: all 0.5s ease-in-out;
	}
	.--yeraldev-toggle-button:active {
		text-shadow: var(--yeraldev-text-shadow-hover);
	}
	.--yeraldev-toggle-button:hover {
		text-shadow: var(--yeraldev-text-shadow-hover);
	}
	.--yeraldev-toggle-back {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 2.5rem;
		height: 1rem;
		border-radius: 0.25rem;
		border: 1px solid var(--yeraldev-green);
		box-shadow: inset var(--yeraldev-green) -1px -1px 1px;
		transition: all 0.5s ease-in-out;
		/* overflow: hidden; */
	}
	.--yeraldev-toggle-switch {
		width: 1.25rem;
		height: 1rem;
		background-color: var(--yeraldev-green);
		color: white;
		border-radius: 0.25rem;
		transition: all 0.5s ease-in-out;
		box-shadow: var(--yeraldev-toggle-shadow);
	}
	.--yeraldev-toggle {
		border: 1px solid var(--yeraldev-red);
		box-shadow: inset var(--yeraldev-red) 1px 1px 1px;
	}
	.--yeraldev-red-icon {
		transform: translateX(1.25rem);
		background-color: var(--yeraldev-red);
	}
</style>
