<script setup lang="ts">
import { Level } from './interfaces'

interface SecurityLevelProps {
	level?: Level
}

const { level } = defineProps<SecurityLevelProps>()
</script>

<template>
	<div class="relative flex justify-between items-center gap-2 my-4">
		<div class="h-1 w-full">
			<div
				class="absolute h-1 transition-all duration-200 rounded"
				:class="[level.color, level.width]"
			></div>
			<small>{{ level.name }}</small>
		</div>
		<img class="w-8" :src="level.image" :alt="level.name" />
	</div>
</template>
