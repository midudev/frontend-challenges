<script>
	export let caseSensitive
</script>

<div class="flex flex-col items-start gap-y-2 sm:flex-row sm:gap-x-10 sm:items-center">
	<fieldset class="flex items-center gap-x-2">
		<input
			type="radio"
			bind:group={caseSensitive}
			name="case"
			id="case"
			value={1}
			class="appearance-none rounded-full h-6 w-6 border-[3px] border-neutral-200 bg-neutral-200 checked:bg-[#FC5185]"
		/>
		<label for="case" class="text-xl">Incluir Ambas</label>
	</fieldset>
	<fieldset class="flex items-center gap-x-2">
		<input
			type="radio"
			bind:group={caseSensitive}
			name="case"
			id="uppercase"
			value={2}
			class="appearance-none rounded-full h-6 w-6 border-[3px] border-neutral-200 bg-neutral-200 checked:bg-[#FC5185]"
		/>
		<label for="uppercase" class="text-xl">Incluir Mayúsculas</label>
	</fieldset>
	<fieldset class="flex items-center gap-x-2">
		<input
			type="radio"
			bind:group={caseSensitive}
			name="case"
			id="lowercase"
			value={3}
			class="appearance-none rounded-full h-6 w-6 border-[3px] border-neutral-200 bg-neutral-200 checked:bg-[#FC5185]"
		/>
		<label for="lowercase" class="text-xl">Incluir Minúsculas</label>
	</fieldset>
</div>
