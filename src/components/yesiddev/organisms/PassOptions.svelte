<script>
	import Checkbox from '../atoms/Checkbox.svelte'

	export let isCheckNumberActive
	export let isCheckUpperActive
	export let isCheckSymbolActive
</script>

<Checkbox bind:isChecked={isCheckNumberActive} label="Include numbers" />
<Checkbox bind:isChecked={isCheckUpperActive} label="Include uppercase" />
<Checkbox bind:isChecked={isCheckSymbolActive} label="Include symbols" />
