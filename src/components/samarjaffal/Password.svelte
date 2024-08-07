<script>
	import CopyButton from './CopyButton.svelte'

	export let password
	let copied = false

	function copyToClipboard({ password }) {
		navigator.clipboard.writeText(password).then(() => {
			copied = true
			setTimeout(() => {
				copied = false
			}, 1000)
		})
	}
</script>

<div class={`p-6 rounded mt-5 flex justify-between items-center ${copied ? 'copied' : ''}`}>
	<p
		class="font-light text-lg md:text-2xl bg-gradient-to-r from-amber-400 via-blue-400 to-purple-400 text-transparent bg-clip-text break-all"
	>
		{password}
	</p>
	<CopyButton {copied} on:click={() => copyToClipboard({ password })} />
</div>

<style>
	div {
		background: #170f1ee6;
		background: linear-gradient(to right, #170f1ee6 50%, #64e2ff 50%);
		background-size: 200% 100%;
		background-position: left bottom;
		transition: all 0.8s ease;
	}
	.copied {
		background-position: right bottom;
	}
</style>
