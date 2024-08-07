<script setup lang="ts">
const { password } = defineProps<{ password: string }>()
</script>

<template>
	<div class="relative flex items-center justify-between bg-gray-900 rounded-md py-2 px-4 h-11">
		<p class="normal-case">{{ password }}</p>
		<button class="w-6 cursor-pointer text-white" @click="$emit('copyPassword')">
			<svg
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				width="20px"
				height="20px"
				viewBox="0 0 40.945 40.945"
				style="enable-background: new 0 0 40.945 40.945"
				xml:space="preserve"
				fill="currentColor"
			>
				<g>
					<path
						d="M35.389,9h-6.166V1.5c0-0.827-0.671-1.5-1.5-1.5H15.454c-0.375,0-0.736,0.142-1.013,0.395L4.543,9.457
						c-0.31,0.285-0.487,0.688-0.487,1.106v19.882c0,0.826,0.671,1.5,1.5,1.5h6.166v7.5c0,0.826,0.671,1.5,1.5,1.5h22.166
						c0.829,0,1.5-0.674,1.5-1.5V10.5C36.889,9.673,36.217,9,35.389,9z M14.318,4.576v5.574H8.229L14.318,4.576z M7.057,28.945V13.15
						h8.761c0.829,0,1.5-0.672,1.5-1.5V3h8.905v6h-3.104c-0.375,0-0.735,0.143-1.013,0.396l-9.897,9.063
						c-0.31,0.283-0.487,0.687-0.487,1.105v9.381H7.057L7.057,28.945z M21.984,13.576v5.572h-6.086L21.984,13.576z M33.889,37.945
						H14.723V22.148h8.762c0.828,0,1.5-0.672,1.5-1.5V12h8.904V37.945z"
					/>
				</g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
			</svg>
		</button>
	</div>
</template>

<style scoped></style>
