<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps(['modelValue', 'checkboxMessage', 'disabled'])
const emit = defineEmits(['update:modelValue', 'change'])

const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	}
})
</script>

<template>
	<div class="w-full flex justify-between mb-3 items-center">
		<label class="w-full" :for="props.checkboxMessage">{{ props.checkboxMessage }}</label>
		<input
			:disabled="disabled"
			type="checkbox"
			class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
			:id="props.checkboxMessage"
			:value="checkboxMessage"
			v-model="value"
			@change="emit('change')"
		/>
	</div>
</template>

<style scoped>
.mke-checkbox:disabled {
	border: 8px solid gray !important;
	cursor: not-allowed;
}

.mke-checkbox:checked {
	border: 8px solid #ffcaca;
}

.mke-checkbox:checked::before {
	content: '✓';
	position: absolute;
	transform: translate(-50%, -50%);
	color: #251b37;
}
</style>
