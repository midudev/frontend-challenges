<template>
	<div class="window modal" style="width: 300px" v-if="isOpened">
		<div class="title-bar">
			<div class="title-bar-text">{{title}}</div>
			<div class="title-bar-controls">
				<button aria-label="Close" @click="closeHandler"></button>
			</div>
		</div>
		<div class="window-body">
			<p>{{text}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "modal",
	props: {
		isOpened: Boolean,
		title: String,
		text: String,
	},
	methods: {
		closeHandler () {
			this.$emit('close');
		}
	}
}
</script>

<style scoped>
.modal {
	position: absolute;
}
</style>