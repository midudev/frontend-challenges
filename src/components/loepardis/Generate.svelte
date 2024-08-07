<script>
	let raw_password = ''
	let pass_len = 8
	const MIN_LEN_PASS = 4
	const MAX_LEN_PASS = 50
	let isCliped = false

	function generatePassword() {
		isCliped = false
		const passwordCharacters = []
		let charCodes = arrayFromLowToHigh(33,126)

		 for (let i = 0; i < pass_len; i++) {
			const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
			passwordCharacters.push(String.fromCharCode(characterCode))
		}
		raw_password = passwordCharacters.join('')
	}

	function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

	function toClip () {
		navigator.clipboard.writeText(raw_password)
		isCliped = true
	}

</script>

<p class="text-white rounded-md text-xl py-4">
	<button 
		on:click={toClip} 
		class="relative text-center break-words text-green-500 w-full"
	>
		{raw_password}
		{#if raw_password.length > MIN_LEN_PASS - 1}
	<svg
	 class="absolute right-2 bottom-0 z-10"
	 width={24}
	 fill="white"
	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g id="Text-files">
	<path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
		C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
		c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
		h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
		C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
		c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
		c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
		 M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
		c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
		c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
		h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
	<path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
		c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
		C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"/>
	
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
{/if}
	{#if isCliped}
  <small class="absolute right-0 px-1 bg-white rounded-md text-black" >Copied</small>
	{/if}
	</button>
</p>

<p class='password-length text-white'>
	Length: {pass_len}
</p>
<div class='flex input-range-box text-white pb-8'>
	<span class="pr-2">{MIN_LEN_PASS}</span>
	<input
		class="range-accent w-full accent-green-500"
		type='range'
		min={MIN_LEN_PASS}
		max={MAX_LEN_PASS}
		step={1}
		value={pass_len}
		on:input={e => {
			pass_len = e.target.value
		}}
		on:change={e => {
			pass_len = e.target.value
		}}
	/>
	<span class="pl-2">{MAX_LEN_PASS}</span>
</div>
<button
	on:click={generatePassword}
	class='relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group w-full'
>
	<span 
	class='absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-fuchsia-600 via-transparent to-lime-700 group-hover:opacity-60'
	></span>
	<span class='absolute
	parent opacity-5'></span>
	<span class='absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5'></span>
	<span class='absolute inset-0 w-full h-full border border-white rounded-md opacity-10'></span>
	<span class='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5'></span>
	<span class='relative'>Generate Random Password</span>
</button>