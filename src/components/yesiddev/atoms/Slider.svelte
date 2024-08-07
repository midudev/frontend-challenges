<script>
	export let value
</script>

<div class="flex flex-col">
	<label for="slider" class="text-white font-semibold py-4">Length: Min 8 - Max 22</label>
	<input id="slider" name="slider" class="mb-2" type="range" min="8" max="22" bind:value />
	<output
		class="text-center text-white text-2xl bg-slate-800 w-16 m-auto rounded-md py-1"
		for="slider">{value}</output
	>
</div>
