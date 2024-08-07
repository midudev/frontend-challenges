<script>
	export let settings
</script>

<fieldset
	class="mt-5 flex flex-col sm:flex-row items-start justify-start sm:items-center sm:justify-evenly gap-x-4"
>
	<label for="uppercase" id="uppercase-label">
		<input
			id="uppercase"
			name="uppercase"
			type="checkbox"
			class="mr-1"
			bind:checked={settings.uppercase}
		/>
		<span class="text-white">Mayúsculas</span>
	</label>
	<label for="numbers" id="numbers-label">
		<input
			id="numbers"
			name="numbers"
			type="checkbox"
			class="mr-1"
			bind:checked={settings.numbers}
		/>
		<span class="text-white">Números</span>
	</label>
	<label for="symbols" id="symbols-label">
		<input
			id="symbols"
			name="symbols"
			type="checkbox"
			class="mr-1"
			bind:checked={settings.symbols}
		/>
		<span class="text-white">Símbolos</span>
	</label>
</fieldset>

<style>
	input[type='checkbox'] {
		-webkit-appearance: none;
		appearance: none;
		background-color: transparent;
		margin: 0;
		width: 1.2rem;
		height: 1.2rem;
		border: 0.15rem solid white;
		border-radius: 0.2rem;
		transform: translateY(-0.075em);
		vertical-align: middle;
		box-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
		display: inline-grid;
		place-content: center;
	}

	input[type='checkbox']::before {
		content: '';
		width: 0.4rem;
		height: 0.4rem;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em #b4ff39;
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}
</style>
