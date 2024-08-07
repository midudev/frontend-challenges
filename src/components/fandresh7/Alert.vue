<script setup lang="ts">
const { show } = defineProps<{ show: boolean }>()
</script>

<template>
	<div
		:class="{ 'opacity-0': !show, 'opacity-100': show }"
		class="f-copy flex items-center justify-around p-1 w-52 rounded-3xl bg-transparent h-12"
	>
		<svg
			width="24"
			height="22"
			viewBox="0 0 24 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="dorknamic-island__StyledHex-sc-144mjgh-3 kIZkoq"
			style="display: block"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.83961 20.0323C6.9791 20.1043 7.13588 20.1437 7.29827 20.1437L16.7017 20.1437C17.059 20.1437 17.3891 19.9531 17.5677 19.6437L22.2694 11.5001C22.4481 11.1907 22.4481 10.8095 22.2694 10.5001L17.5677 2.35644C17.4706 2.18814 17.3286 2.05499 17.1617 1.96855L6.83961 20.0323ZM5.56622 1.85645C5.92349 1.23764 6.58374 0.856445 7.29827 0.856445H16.7017C17.4162 0.856445 18.0765 1.23764 18.4338 1.85644L23.1355 10.0001C23.4927 10.6189 23.4927 11.3812 23.1355 12.0001L18.4338 20.1437C18.0765 20.7625 17.4162 21.1437 16.7017 21.1437H7.29827C6.58374 21.1437 5.92349 20.7625 5.56622 20.1437L0.864507 12.0001C0.507241 11.3812 0.507241 10.6189 0.864507 10.0001L5.56622 1.85645Z"
				fill="currentColor"
			></path>
		</svg>
		<span>Copied</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="rgb(194,217,134)"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"
			/>
		</svg>
	</div>
</template>

<style scoped>
.f-copy {
	box-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
	transition: all 0.2s ease 0s;
}
</style>
