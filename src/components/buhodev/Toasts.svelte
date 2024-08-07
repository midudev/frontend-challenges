<script lang="ts">
	import Toast from '@components/buhodev/Toast.svelte';
	import { dismissToast, toasts } from '@components/buhodev/stores/toast';
</script>

{#if $toasts}
	<section class="fixed top-0 left-0 right-0 w-full pointer-events-none flex flex-col mt-4 justify-center z-[1000]">
		{#each $toasts as toast (toast.id)}
			<Toast
				type={toast.type}
				on:dismiss={() => dismissToast(toast.id)}
			>
				{toast.message}
			</Toast>
		{/each}
	</section>
{/if}
