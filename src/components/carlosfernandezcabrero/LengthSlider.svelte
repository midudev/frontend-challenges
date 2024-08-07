<script>
	export let length = 8

	const passwordLengthValues = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
</script>

<fieldset
	class="flex flex-col items-center pt-3 px-2 w-full sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12"
>
	<label for="length" class="text-left w-full text-xl mb-6">
		Longitud de la contraseña:&nbsp;&nbsp;
		<span class="bg-gray-800 px-6 py-2 rounded-full text-2xl">
			{length}
		</span>
	</label>
	<input
		type="range"
		class="bg-transparent w-full mb-3"
		min={passwordLengthValues[0]}
		max={passwordLengthValues.at(-1)}
		list="range-values"
		bind:value={length}
		id="length"
	/>
	<datalist id="range-values" class="flex items-center justify-between w-full">
		{#each passwordLengthValues as value}
			<option
				{value}
				class={`bg-gray-300 rounded-full text-black font-medium text-lg h-8 w-8 flex items-center justify-center ${
					value % 2 !== 0 ? 'invisible' : ''
				}`}>{value}</option
			>
		{/each}
	</datalist>
</fieldset>

<style>
	input[type='range'] {
		appearance: none;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		transform: scale(1.3);
	}

	input[type='range']::-moz-range-thumb:hover {
		transform: scale(1.3);
	}

	input[type='range']::-webkit-slider-thumb {
		transition: transform 0.1s ease-in;
		appearance: none;
		width: 2rem;
		height: 2rem;
		background: #0284c7;
		border-radius: 50%;
		cursor: pointer;
		margin-top: -0.74rem;
		border: 2px solid #d1d5db;
	}

	input[type='range']::-moz-range-thumb {
		transition: transform 0.1s ease-in;
		appearance: none;
		width: 2rem;
		height: 2rem;
		background: #0284c7;
		border-radius: 50%;
		cursor: pointer;
		margin-top: -0.74rem;
		border: 2px solid #d1d5db;
	}

	input[type='range']::-webkit-slider-runnable-track {
		appearance: none;
		width: 100%;
		height: 0.7rem;
		cursor: pointer;
		box-shadow: 1px 2px 1px #000;
		background: #d1d5db;
		border-radius: 1rem;
		border: 1px solid #000;
	}

	input[type='range']::-moz-range-track {
		appearance: none;
		width: 100%;
		height: 0.7rem;
		cursor: pointer;
		box-shadow: 1px 2px 1px #000;
		background: #d1d5db;
		border-radius: 1rem;
		border: 1px solid #000;
	}
</style>
