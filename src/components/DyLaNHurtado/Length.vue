<template>
	<span class="flex justify-center items-center text-3xl">Length:</span>
	<div class="flex justify-between w-full">
		<input
			v-model="value"
			type="range"
			class="w-5/6"
			:min="min"
			:max="max"
			@change="$emit('rangeUpdated', this.value)"
		/>
		<span class="text-center text-3xl p-4 bg-cyan-500 rounded-full aspect-square">{{ value }}</span>
	</div>
</template>
<script>
export default {
	name: 'Length',
	data() {
		return {
			value: 4,
			min: 4,
			max: 20
		}
	},
	emits: ['rangeUpdated']
}
</script>
<style></style>
