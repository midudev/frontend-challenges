<script>
	import tw from './tw'
	export let text = 'Generate password'
</script>

<button on:click class={tw('button_copy')}>
	{text}
</button>
