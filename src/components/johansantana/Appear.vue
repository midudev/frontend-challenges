<script setup>
import { ref, onMounted, computed } from 'vue'
const props = defineProps({
	delay: {
		type: Number,
		default: 0.4
	},
	type: {
		type: String,
		default: 'slideup'
	}
})

const appearType = ref(null)
const { delay, type } = props
const delayToString = computed(() => `${delay}ms`)

onMounted(() => {
	appearType.value = type
})
</script>

<template>
	<div class="opacity-0" :class="appearType" :style="{ animationDelay: delayToString }">
		<slot></slot>
	</div>
</template>

<style>
.slideup {
	animation: slide-up 0.6s forwards;
}

@keyframes slide-up {
	0% {
		transform: translateY(100%);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
