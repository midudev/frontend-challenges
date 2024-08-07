<script>
	import Copy from '../atoms/Copy.svelte'
	import Input from '../atoms/Input.svelte'

	export let value
	let text = 'Copy'

	const copyToClipboard = () => {
		navigator.clipboard.writeText(value)
		if (text === 'Copy') {
			text = 'Copied'
			setTimeout(() => {
				text = 'Copy'
			}, 1500)
		}
	}
</script>

<div class="relative">
	<Input {value} />
	<Copy on:click={copyToClipboard} {text} />
</div>
