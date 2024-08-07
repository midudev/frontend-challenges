<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
	name: string
	min: number
	max: number
}>()

const mid = computed(() => (props.max + props.min) / 2)

const chars = ref(mid.value)
</script>

<template>
	<label>
		<span> Caracteres: {{ chars }}</span>
		<input :name="name" v-model="chars" type="range" :min="min" :max="max" />
	</label>
</template>

<style scoped>
label {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-around;
}

input {
	align-self: stretch;
}
</style>
