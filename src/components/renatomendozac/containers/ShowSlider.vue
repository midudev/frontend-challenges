<script setup lang="ts">
	import { ref } from 'vue'
	import { formStore } from '@components/renatomendozac/store'
	import Slider from '@components/renatomendozac/components/Slider.vue'

	const CharacterLength = ref("4")

	function onChange(event: Event) {
		const rangeValue = (event.target as HTMLInputElement).value
		CharacterLength.value = rangeValue

		formStore.update({ length: parseInt(rangeValue) })
	}
</script>

<template>
	<main class="mb-3">
		<div class="flex justify-between items-center">
			<h2 class="text-xs font-semibold">
				Character Length
			</h2>
			<span class="text-green-300 text-xl font-bold">
				{{ CharacterLength }}
			</span>
		</div>
		<Slider :value="CharacterLength" @change="onChange" />
	</main>
</template>
