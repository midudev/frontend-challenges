<script lang="ts">
  import { fade } from 'svelte/transition'
	import { useHistory } from '@hooks/fredoist/use-history'

	const history = useHistory()

	async function copyPassword(password: string) {
		await navigator.clipboard.writeText(password)
	}
</script>

<div class="lg:max-w-sm">
	<h2 class="uppercase text-xl font-semibold tracking-widest cursor-default">
		Password History
		<span class="text-xs font-normal font-[Barlow,sans-serif]">({$history.length})</span>
	</h2>
	<div
		class="relative my-8 overflow-hidden after:absolute after:inset-x-0 after:-bottom-px after:h-12 after:bg-gradient-to-t after:from-black"
	>
		<div class="fredoist-password-history pb-12 flex flex-col gap-5 overflow-y-auto max-h-64">
			{#each $history as password}
				<div transition:fade class="flex items-center justify-between gap-5">
					<div class="flex-1 truncate">
						<span class="block truncate">{password.value}</span>
						<time
							datetime={new Date(password.timestamp).toISOString()}
							class="text-xs uppercase font-[Barlow,sans-serif] text-neutral-400"
						>
							{new Date(password.timestamp).toLocaleString()}
						</time>
					</div>
					<button type="button" on:click={() => copyPassword(password.value)}>
						<span class="sr-only">Copy password</span>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6 fill-current"
							viewBox="0 0 512 512"
						>
							<path
								d="M456 480H136a24 24 0 01-24-24V128a16 16 0 0116-16h328a24 24 0 0124 24v320a24 24 0 01-24 24z"
							/>
							<path
								d="M112 80h288V56a24 24 0 00-24-24H60a28 28 0 00-28 28v316a24 24 0 0024 24h24V112a32 32 0 0132-32z"
							/>
						</svg>
					</button>
				</div>
			{/each}
		</div>
	</div>
	{#if $history.length > 0}
		<button
			type="button"
			class="w-full py-1 px-2 text-center text-[#f8ef00] tracking-widest"
			on:click={history.clear}
		>
			Clear history
		</button>
	{/if}
</div>

<style>
	.fredoist-password-history::-webkit-scrollbar {
		width: 0.25rem;
	}
</style>
