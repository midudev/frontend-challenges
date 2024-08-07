<script setup lang="ts">
import { ref } from 'vue'

const appearSeconds = 2,
	dissapearSeconds = 4,
	animationDuration = 1

const notifications = ref([])
const notificationQueue = ref([])

const timers = new Map()

const notification = (evt: CustomEvent) => {
	// TODO: Add notifications
	// notifications.value.unshift({
	// 	type: evt.detail.type,
	// 	text: evt.detail.text
	// })
}
</script>

<template>
	<div @notify="notification" class="notification-center">
		<div class="notification" :class="notification.type" v-for="notification in notifications">
			{{ notification.text }}
		</div>
	</div>
</template>

<style scoped>
div.notification-center {
	z-index: 10;
	position: fixed;
	bottom: 1em;
	right: 0.5em;
	width: 10em;
	max-width: 100%;
	max-height: 100vh;
	display: flex;
	flex-flow: column-reverse nowrap;
	overflow: hidden;
	gap: 0.5em;
}

.notification {
	padding: 0.5em;
	border-radius: 0.5em;
	background-color: var(--background-notify);
	color: var(--color-notify);
}

.notification.success {
	--background-notify: var(--primary);
	--color-notify: var(--background);
}
</style>
