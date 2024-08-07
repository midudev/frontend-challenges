<script>
	
	import CopyIcon from '@components/accieo/CopyIcon.svelte';

	let passwordLength = 12;
	let password = '';

	function getRandomChar() {
		const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const NUMBERS = '0123456789';
		const SYMBOLS = '!*#?+=-_@$&';
		
		const randomInt = Math.floor(Math.random() * 11);
		
		// 60-20-20 Weight distribution 
		if (randomInt > 0 && randomInt <= 6) {
			return LETTERS[Math.floor(Math.random() * LETTERS.length)];
		} else if (randomInt == 7 || randomInt == 8) {
			return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
		} else if (randomInt == 9 || randomInt == 10) {
			return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
		} else if (randomInt == 0) {
			return getRandomChar();
		}
	}

	function generatePassword(passwordLength) {
		let generatedPassword = '';

		for(let i = 0; i < passwordLength; i++) {
			generatedPassword += getRandomChar();
		}

		password = generatedPassword;
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(password);
	}
	
	generatePassword(passwordLength);

</script>
<div class="flex h-screen">
	<div class="m-auto bg-[#497592] p-10 rounded-xl border-[2px] border-[#8BD4C6]">
		<p class="text-white pb-10 text-center text-3xl">Password Generator</p>
		<p class="text-white text-center text-xl">Characters: {passwordLength}</p>
		<center>
			<input class="w-[250px] p-2 mb-5" type=range bind:value={passwordLength} on:change={generatePassword(passwordLength)} min=8 max=20>
			<div class="">
				<input class="outline-none p-2 w-[320px] text-xl rounded-xl ring-2 ring-[#170F1E]/20" value={password} readonly>
				<button class="ml-[-40px] mt-[-5px] mr-[5px] align-middle drop-shadow" on:click={copyToClipboard}><CopyIcon/></button>
			</div>
			<button class="bg-[#3A566D] rounded p-2 mt-8 text-white text-lg font-medium" on:click={generatePassword(passwordLength)}>Generate Password</button>
		</center>
	</div>
</div>
