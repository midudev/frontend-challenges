<script>
	import tw from './tw.js'
	export let length = 12
	export let min = 10
	export let max = 18
</script>

<div class={tw('slide_container')}>
	<p class={tw('slide_value')}>
		Length: <span>{length}</span>
	</p>
	<div class={tw('slide_wrapper')}>
		<p class={tw('slide_wrapper_numb')}>
			<span>4</span>
		</p>
		<input
			type="range"
			bind:value={length}
			class={tw('slide_wrapper_input')}
			min={min}
			max={max}
		/>
		<p class={tw('slide_wrapper_numb')}>
			<span>20</span>
		</p>
	</div>
</div>
