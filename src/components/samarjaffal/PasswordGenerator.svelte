<script>
	import { onMount } from 'svelte'
	import Password from './Password.svelte'
	import Settings from './Settings.svelte'
	import Slider from './Slider.svelte'
	import Button from './Button.svelte'

	const DEFAULT_RANGE_VALUE = 12
	const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const uppderCaseLetters = lowerCaseLetters.toUpperCase()
	const numbers = '0123456789'
	const symbols = '!@#$%*+'

	let password = ''

	let settings = {
		length: DEFAULT_RANGE_VALUE,
		numbers: true,
		symbols: false,
		uppercase: true
	}

	function generatePassword({ settings = {} }) {
		const { length } = settings
		let string = lowerCaseLetters

		if (settings.uppercase) string += uppderCaseLetters
		if (settings.numbers) string += numbers
		if (settings.symbols) string += symbols

		let newPassword = ''
		for (let i = 0; i < length; i++) {
			newPassword += string[Math.floor(Math.random() * string.length)]
		}
		password = newPassword
	}

	onMount(() => {
		generatePassword({ settings })
	})
</script>

<div class="bg-[#0e0318] w-full lg:w-2/5 px-8 lg:px-20 py-10 rounded-3xl ">
	<h1 class="text-2xl md:text-3xl font-special text-white uppercase">Generador de claves</h1>
	<form>
		<Password {password} />
		<Slider {settings} />
		<Settings {settings} />
		<Button on:click={() => generatePassword({ settings })} />
	</form>
</div>

<style>
	h1 {
		text-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
	}
	div {
		box-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
	}
</style>
