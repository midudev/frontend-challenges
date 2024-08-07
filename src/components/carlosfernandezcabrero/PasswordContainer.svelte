<script>
	import CaseOptions from './CaseOptions.svelte'
	import CopyButton from './CopyButton.svelte'
	import CreateButton from './CreateButton.svelte'
	import LengthSlider from './LengthSlider.svelte'

	let password = ''
	let length = 8
	let caseSensitive = 1
</script>

<div class="flex flex-col items-center gap-y-14 w-full">
	<div class="flex flex-col gap-y-4 items-center justify-center lg:flex-row lg:gap-x-4 w-full">
		<p
			class={`bg-[#F0F5F9] text-5xl py-[25px] px-3 sm:rounded-full rounded-sm text-center w-full lg:w-9/12 sm:w-11/12 font-['ShareTechMono'] break-words ${
				password ? 'text-[#1E2022]' : 'text-gray-600 animate-pulse'
			}`}
		>
			{password ? password : '¡Creando una contraseña!'}
		</p>
		<CopyButton textToCopy={password} />
	</div>
	<CaseOptions bind:caseSensitive />
	<LengthSlider bind:length />

	<CreateButton {caseSensitive} {length} bind:password />
</div>

<style>
	@font-face {
		font-family: 'ShareTechMono';
		src: url('/carlosfernandezcabrero/ShareTechMono-Regular.ttf');
		font-display: swap;
	}
</style>
