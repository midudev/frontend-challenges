<script>
	import Button from '../atoms/Button.svelte'
	import Slider from '../atoms/Slider.svelte'
	import Title from '../atoms/Title.svelte'
	import PassInput from '../molecules/PassInput.svelte'
	import PassOptions from './PassOptions.svelte'

	// strings
	const numbers = '0123456789'
	const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
	const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const symbols = '!@#$%^&*_-+=[](){}'
	let newPass

	// booleans
	let isCheckNumberActive = false
	let isCheckUpperActive = false
	let isCheckSymbolActive = false

	// numbers
	let length = 8

	const generatePass = () => {
		let pass = ''
		let chars = ''

		if (isCheckNumberActive) {
			chars += numbers
		}
		if (isCheckUpperActive) {
			chars += upperChars
		}
		if (isCheckSymbolActive) {
			chars += symbols
		}

		chars += lowerChars

		while (pass.length < length) {
			pass += chars.charAt(Math.floor(Math.random() * chars.length))
		}

		return pass
	}

	const handleClick = () => {
		newPass = generatePass()
	}
</script>

<div class="w-5/6 lg:w-2/4 h-auto py-5 px-8 bg-slate-600 rounded-2xl">
	<Title />
	<PassInput value={newPass} />
	<Slider bind:value={length} />
	<PassOptions bind:isCheckNumberActive bind:isCheckUpperActive bind:isCheckSymbolActive />
	<Button on:click={handleClick} />
</div>
