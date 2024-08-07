<script>
	import Canvas from '@components/buhodev/Canvas.svelte'
	import Progress from '@components/buhodev/Progress.svelte'
	import { progress } from '@components/buhodev/stores/progress'

	export let seed = ''

	$: percentage = Math.floor((seed.length * 100) / 36)
	$: {
		progress.set(percentage / 100)
	}
</script>

<div class="w-[300px]">
	<span class="text-white mb-4 text-center inline-block w-full">Move your mouse over the green characters to generate the random seed.</span>
	<textarea value={seed} readonly class="p-2 flex items-center break-all h-24 justify-center text-white rounded-md bg-neutral-900/40 border border-neutral-700 backdrop-blur-sm text-2xl text-center font-mono overflow-x-auto" />
	<Progress value={$progress} />
	<div class="mt-4 rounded-md overflow-hidden h-[300px] w-[300px]"><Canvas bind:seed width={300} height={300} /></div>
</div>
