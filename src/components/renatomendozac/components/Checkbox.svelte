<script lang="ts">
	export let id: string
	export let checked: boolean
	export let disabled: boolean
</script>

<div class="checkbox-container">
	<input
		id={`checkbox-${id}`}
		{checked}
		value={id}
		{disabled}
		type="checkbox"
		on:change
	/>
	<label class="text-sm" for={`checkbox-${id}`}>
		<slot />
	</label>
</div>

<style>
	.checkbox-container {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	input[type=checkbox] {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		height: 18px;
		width: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(155, 70, 89);
		border: 2px solid rgb(155, 70, 89);
		border-radius: 5px;
		cursor: pointer;
	}

	input[type=checkbox]::after {
		content: '\2713';
		color: rgb(155, 70, 89);
		font-weight: 900;
		display: none;
	}

	input[type=checkbox]:hover {
		border: 2px solid #4ADE80;
	}

	input[type=checkbox]:checked {
		border: 2px solid rgb(90, 214, 93);
		background-color: rgb(90, 214, 93);
	}

	input[type=checkbox]:checked::after {
		display: block;
	}

	input[type=checkbox]:disabled {
		opacity: 0.2;
	}

	label {
		cursor: pointer;
	}
</style>