<script>
	import tw from './tw'
	import IconCopy from './IconCopy.svelte';

	export let password
	let isCopied = false

	const copyPassword = async () => {
		isCopied = true
		navigator.clipboard.writeText(password)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		isCopied = false
	}
</script>

{#if isCopied}
	<p class={tw('box_message')}>Password copied</p>
{/if}
<div on:click={copyPassword} class={tw('pass_container')}>
	<span class={tw('pass_text')}>{password}</span>
	<button class={tw('pass_btn')}>
		<IconCopy />
		<span>Copy</span>
	</button>
</div>
