<script lang="ts">
	import { fly } from 'svelte/transition'
	import { deletePassword } from '@components/buhodev/stores/history'
	import { copyToClipboard } from '@components/buhodev/actions/copy_to_clipboard'
	import { addToast } from '@components/buhodev/stores/toast'

	export let password: string, generated: string

	let isPasswordShown = false
</script>

<div
	in:fly={{ y: -20, duration: 200 }}
	out:fly={{ y: -10, duration: 150 }}
	class="hover:bg-neutral-800 rounded-md flex mx-2 px-2 py-1.5 mt-3 justify-between items-center"
>
	<div class="flex flex-col">
		<span class="w-44 overflow-hidden text-ellipsis">{!isPasswordShown ? '••••••••••••' : password}</span>
		<span class="w-44 text-sm text-neutral-300 whitespace-nowrap">Generated on {generated}</span>
	</div>
	<div class="flex gap-2">
		<button on:click={() => (isPasswordShown = !isPasswordShown)}>
			{#if isPasswordShown}
				<!-- phosphoricons/eye -->
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 5.25C4.5 5.25 1.5 12 1.5 12s3 6.75 10.5 6.75S22.5 12 22.5 12s-3-6.75-10.5-6.75Z"
						stroke="#fff"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
						stroke="#fff"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<!-- phosphoricons/eye-slash -->
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m4.5 3.75 15 16.5m-4.978-5.475a3.75 3.75 0 0 1-5.044-5.55"
						stroke="#fff"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.938 6.431C3.112 8.363 1.5 12 1.5 12s3 6.75 10.5 6.75c1.757.014 3.493-.39 5.063-1.181m2.493-1.716C21.6 14.025 22.5 12 22.5 12s-3-6.75-10.5-6.75c-.65-.001-1.3.052-1.94.16"
						stroke="#fff"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12.703 8.316a3.74 3.74 0 0 1 3.028 3.328"
						stroke="#fff"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>
		<button
			use:copyToClipboard={{ text: password }}
			on:copied={() => addToast({ message: 'Copied', type: 'info', timeout: 3000 })}
			on:error={() =>
				addToast({ message: 'Error: Password not copied', type: 'error', timeout: 3000 })}
		>
			<!-- phosphoricons/copy -->
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.75 15.75h4.5v-12h-12v4.5"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.75 8.25h-12v12h12v-12Z"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<button on:click={() => deletePassword(password)}>
			<!-- phosphoricons/trash -->
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20.25 5.25H3.75m6 4.5v6m4.5-6v6m4.5-10.5V19.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V5.25m10.5 0v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v1.5"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</div>
