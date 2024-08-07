<script>

	export let checkedValue
	export let onChange
	export let label

</script>

<label class="flex flex-col items-center text-xs">
	<input
		type="checkbox"
		class="h-4 w-4 appearance-none border-2 border-[#6097BE] rounded-xl checked:bg-[#427AA1] checked:border-0 checked:ring-2"
		bind:checked={checkedValue}
		on:change={onChange}
	/>
	{label}
</label>
