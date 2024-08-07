<script>
	import { onMount } from 'svelte'
	import tw from './tw'
	import ButtonGenerate from './ButtonGenerate.svelte'
	import Slide from './Slide.svelte'
  import Password from './Password.svelte'

	let pass = 'generating ...'
	let caracteresPass = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+/.,;:[]{}'
	let lengthPass
	
	const passwordGenerate = async (lengthPass) => {
		let password = ''
		for (let i = 0; i < lengthPass; i++) {
			let indexRandom = Math.floor(Math.random() * caracteresPass.length)
			password += caracteresPass.charAt(indexRandom)
		}
		pass = password
	}

	onMount(() => passwordGenerate(lengthPass))
</script>

<div class={tw('box')}>
	<Password password={pass} />
	<Slide bind:length={lengthPass} />
	<ButtonGenerate on:click={() => passwordGenerate(lengthPass)} />
</div>
