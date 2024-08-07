<script>
	export let settings
</script>

<fielset>
	<input type="range" class="w-full mt-6 slider" min="8" max="20" bind:value={settings.length} />
	<p class="text-white font-bold text-3xl md:text-4xl text-center">{settings.length}</p>
</fielset>

<style>
	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 25px;
		background: #ffe27d;
		outline: none;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #64e2ff;
		cursor: pointer;
		-webkit-transition: 0.2s;
		transition: background-color ease-in-out 0.2s;
	}

	.slider::-webkit-slider-thumb:hover {
		background-color: #9092ff;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		background: #04aa6d;
		cursor: pointer;
	}
</style>
