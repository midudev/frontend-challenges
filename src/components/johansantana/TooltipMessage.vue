<script setup>
const props = defineProps({
	message: {
		type: String,
		required: true
	}
})

const { message } = props
</script>

<template>
	<div
		class="flex gap-2 items-center text-sm sm:text-base text-white absolute right-0 -bottom-14 lg:bottom-auto lg:top-1/2 lg:-right-1/2 lg:-translate-y-1/2 lg:translate-x-full bg-gray-700 p-2 px-3 rounded-lg lg:before:content-[''] lg:before:absolute lg:before:top-1/2 lg:before:right-[100%] lg:before:-translate-y-1/2 lg:before:border-8 lg:before:border-y-transparent lg:before:border-l-transparent lg:before:border-r-gray-700"
	>
		{{ message }}
		<slot></slot>
	</div>
</template>
