<script>
	export let textToCopy

	function copyToClipboard() {
		const modalContainer = document.querySelector('#modal')

		navigator.clipboard.writeText(textToCopy)
		modalContainer.classList.remove('hide')
		modalContainer.classList.add('show')

		setTimeout(() => {
			modalContainer.classList.remove('show')
			modalContainer.classList.add('hide')
		}, 2_000)
	}
</script>

<button
	class="p-4 rounded-full bg-[#29BB89] border-4 border-[#29BB89] hover:bg-[#289672] active:bg-[#1E6F5C] active:border-[#1E6F5C]"
	on:click={copyToClipboard}
	aria-label="Copy to clipboard"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-10 w-10"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<rect x="8" y="8" width="12" height="12" rx="2" />
		<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
	</svg>
</button>
