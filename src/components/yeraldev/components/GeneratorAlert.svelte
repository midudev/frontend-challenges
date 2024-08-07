<script lang="ts">
	import { fade } from 'svelte/transition'
	import { generatorAlert } from '../store'
	import { GeneratorAlertType } from '../models'
	import InfoIcon from '../assets-components/InfoIcon.svelte'
	import WarningIcon from '../assets-components/WarningIcon.svelte'
	import SuccessIcon from '../assets-components/SuccessIcon.svelte'
</script>

{#if $generatorAlert.show}
	<button
		class="--yeraldev-alert-card"
		on:click={generatorAlert.close}
		transition:fade
		style="--yeraldev-opacity-background-color:{$generatorAlert.cardStyle};
--yeraldev-background-color:{$generatorAlert.cardStyle}"
	>
		<span class="--yeraldev-icon">
			{#if $generatorAlert.type === GeneratorAlertType.success}
				<SuccessIcon />
			{:else if $generatorAlert.type === GeneratorAlertType.info}
				<InfoIcon />
			{:else}
				<WarningIcon />
			{/if}
		</span>
		<span class="--yeraldev-message">
			{$generatorAlert.message}
		</span>
	</button>
{/if}

<style>
	.--yeraldev-alert-card {
		position: absolute;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		top: 1.5rem;
		right: 1.5rem;
		background-color: var(--yeraldev-opacity-background-color);
		color: var(--yeraldev-color);
		text-shadow: inherit;
		border-radius: 1rem;
		height: 5rem;
		width: 20rem;
		padding: 0.5rem 1rem;
		z-index: 1;
		box-shadow: inset var(--yeraldev-text-shadow-hover);
	}
	.--yeraldev-message {
		font-size: 1rem;
	}
</style>
