<script>
	export let label
	export let isChecked
</script>

<div
	class="flex items-center pl-4 rounded-md border border-slate-400 my-2 hover:border-white duration-300"
>
	<input
		id={label}
		type="checkbox"
		bind:checked={isChecked}
		name="bordered-checkbox"
		class="w-4 h-4 appearance-none border rounded border-slate-400 checked:bg-blue-500 checked:border-transparent focus:outline-none"
	/>
	<label for={label} class="py-4 ml-2 w-full text-sm font-medium text-white cursor-pointer"
		>{label}</label
	>
</div>
