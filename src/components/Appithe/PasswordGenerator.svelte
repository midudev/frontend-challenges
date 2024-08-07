<script>
	import Checkbox from './Checkbox.svelte'
	import ContentCopy from './Assets/ContentCopy.svelte'
	import Check from './Assets/Check.svelte'

	let password = ''
	let passwordLength = 6

	let isSpecial = true
	let containNumbers = true
	let containCapitals = true

	let isCopied = false

	const smalls = 'abcdefghijklmnopqrstuvwxyz'
	const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'
	const specialCharacters = '@:;#&-?/%+*{}[]()|<>$!'

	function checkPassword() {
		let hasSmall = false
		let hasCapital = false
		let hasNumber = false
		let hasSpecial = false

		for (let i = 0; i < password.length; i++) {
			if (smalls.includes(password[i])) {
				hasSmall = true
			} else if (capitals.includes(password[i])) {
				hasCapital = true
			} else if (numbers.includes(password[i])) {
				hasNumber = true
			} else if (specialCharacters.includes(password[i])) {
				hasSpecial = true
			}
		}

		return hasSmall && hasCapital && hasNumber && hasSpecial
	}

	const getRandomString = () => {
		var characterList = smalls

		if (password.length > 0) password = ''
		if (isSpecial) characterList += specialCharacters
		if (containCapitals) characterList += capitals
		if (containNumbers) characterList += numbers

		for (let i = 0; i < passwordLength; i++) {
			var index = Math.floor(Math.random() * characterList.length)
			password += characterList[index]
		}

		if (!checkPassword()) {
			getRandomString()
		}
	}

	const onSliderChange = (e) => {
		passwordLength = e.target.value
		getRandomString()
	}

	const copyToClipboard = () => {
		if (password.length > 0) {
			navigator.clipboard.writeText(password)
			isCopied = true
			setTimeout(() => {
				isCopied = false
			}, 1000)
		}
	}
</script>

<div class="flex flex-col gap-8 items-center">
	<div
		class="bg-[#427AA150] h-12 w-96 max-w-md p-5 border-2 border-[#427AA1] rounded-lg flex space-x-1 flex-row items-center shadow-md shadow-black/25"
	>
		{password}
		<div class="grow" />
		<button on:click={copyToClipboard}>
			{#if isCopied}
				<Check />
			{:else}
				<ContentCopy />
			{/if}
		</button>
	</div>

	<div>
		<input
			type="range"
			name="slide"
			id="slide"
			min="6"
			max="20"
			bind:value={passwordLength}
			on:change={onSliderChange}
			class="input-range w-96 p-1.5"
		/>
		<span>{passwordLength}</span>
		<section class="w-96 flex gap-4 justify-center ">
			<Checkbox
				checkedValue={containNumbers}
				onChange={() => {
					containNumbers = !containNumbers
					getRandomString()
				}}
				label="Add numbers"
			/>

			<Checkbox
				checkedValue={containCapitals}
				onChange={() => {
					containCapitals = !containCapitals
					getRandomString()
				}}
				label="Add capitals"
			/>

			<Checkbox
				checkedValue={isSpecial}
				onChange={() => {
					isSpecial = !isSpecial
					getRandomString()
				}}
				label="Add special characters"
			/>

		</section>
	</div>

	<button
		class="h-12 w-44 text-white bg-[#427AA1] rounded-lg hover:bg-[#3B6D91] active:bg-[#3B6D91] focus:ring-4 focus:ring-[#6097BE]"
		on:click={getRandomString}
	>
		Generate password
	</button>
</div>

<style>
	.input-range {
		-webkit-appearance: none;
		outline: 0;
		background: transparent;
	}

	.input-range::-webkit-slider-runnable-track {
		height: 2px;
		background: #272727;
		border: none;
		border-radius: 3px;
	}

	.input-range::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #fff;
		margin-top: -7px;
		vertical-align: middle;
		border: 5px solid #427aa1;
		transition: 0.15s;
	}

	.input-range::-webkit-slider-thumb:active {
		height: 20px;
		width: 20px;
		margin-top: -9px;
	}
</style>
