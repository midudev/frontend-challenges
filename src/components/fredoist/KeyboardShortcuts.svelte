<script lang="ts">
	import { fade } from 'svelte/transition'
	import { useShortcuts } from '@hooks/fredoist/use-shortcuts'
	import { onMount } from 'svelte'

	const shortcuts = useShortcuts()
	const { modal } = shortcuts
	onMount(() => localStorage.getItem('fredoist_modal') !== 'hidden' && shortcuts.show())
</script>

<svelte:window on:keydown={shortcuts.handler} />

{#if $modal}
	<div
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 200 }}
		on:click={e => e.target === e.currentTarget && shortcuts.hide()}
		class="fixed inset-0 z-50 bg-gradient-to-t from-black via-black/80 to-black/50 flex items-center justify-center"
	>
		<div class="bg-black p-12 max-w-lg ring-1 ring-[#ff003c] ring-opacity-10">
			<h3 class="uppercase font-semibold text-xl cursor-default">Keyboard Shortcuts</h3>
			<div class="grid grid-cols-3 gap-5 my-12">
				{#each $shortcuts as shortcut}
					<div class="font-[Barlow,sans-serif]">
						<code
							class="text-xs text-black py-px px-1 leading-none font-semibold bg-[#f8ef00] uppercase cursor-pointer inline-block"
							on:click={() => shortcut.action()}
						>
							{shortcut.key === ' ' ? 'Space' : shortcut.key}
						</code>
						<span class="block text-xs mt-2">{shortcut.description}</span>
					</div>
				{/each}
			</div>
			<button
				class="group relative border border-[#ff003c] focus:outline-none text-[#ff003c] font-semibold uppercase py-5 px-10 w-full inline-flex items-center justify-between gap-x-16 [clip-path:polygon(100%_0,100%_25%,100%_100%,6%_100%,0%_70%,0_0)]"
				on:click={shortcuts.hide}
			>
				<span>Dismiss_</span>
				<span class="fredoist-glitch-animation absolute inset-0 border-2 border-[#ff003c] hidden" />
				<span
					class="absolute bg-black right-5 -bottom-px text-xs font-normal font-[Barlow,sans-serif] leading-none pl-2 pr-5 text-[#fafafa]"
				>
					4
				</span>

				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6 fill-current"
					viewBox="0 0 512 512"
				>
					<path
						d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}

<style>
	.group:hover .fredoist-glitch-animation {
		display: block;
		animation: fredoist-glitch-animation 2s linear infinite;
	}

	@keyframes fredoist-glitch-animation {
		0% {
			opacity: 1;
			transform: translateZ(0);
			clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		}

		2% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(-5px);
		}

		6% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(5px);
		}

		8% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(-5px);
		}

		9% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(0);
		}

		10% {
			clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			transform: translate3d(5px, 0, 0);
		}

		13% {
			clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			transform: translateZ(0);
		}

		13.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			transform: translate3d(5px, 0, 0);
		}

		15% {
			clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			transform: translate3d(5px, 0, 0);
		}

		20% {
			clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			transform: translate3d(-5px, 0, 0);
		}

		20.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			transform: translate3d(5px, 0, 0);
		}

		25% {
			clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			transform: translate3d(5px, 0, 0);
		}

		30% {
			clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			transform: translate3d(-5px, 0, 0);
		}

		30.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		}

		35% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(-5px);
		}

		40% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(5px);
		}

		45% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(-5px);
		}

		50% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(0);
		}

		55% {
			clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			transform: translate3d(5px, 0, 0);
		}

		60% {
			clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			transform: translateZ(0);
			opacity: 1;
		}

		60.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			opacity: 1;
		}

		to {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			opacity: 1;
		}
	}
</style>
