<template>
	<div
		id="alert-stv-beep"
		class="title-stv-beep content-center bg-green-300 font-bold justify-center items-center rounded-xl mx-2 my-6 py-3 text-green-900 hover:text-green-800 border-4 border-zinc-800 m-9"
	>
		{{ message }}
	</div>
</template>

<script>
export default {
	name: 'AlertMsg',
	props: {
		message: String
	}
}
</script>

<style scoped>
#alert-stv-beep {
	opacity: 1;
	animation: fadeOut 3s;
}
@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
