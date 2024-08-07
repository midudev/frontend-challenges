<script>
	import icon_arrow_clockwise from '../assets/icon_arrow_clockwise.svg';
	export let clipboardDialog;

	const CHARSET_UPERRCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const CHARSET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
	const CHARSET_NUMBER = '0123456789'
	const CHARSET_SPECIAL = '!@#$%^&*()_+~`|}{[]:;?><,./-='

	let password = ''
	let password_length = 28
	let password_charset = [CHARSET_UPERRCASE, CHARSET_LOWERCASE, CHARSET_NUMBER, CHARSET_SPECIAL]
	let password_strength = {width: "", color: ""}
	let password_strength_values = {
		5: {width: "20%", color: "#dc2626"},
		10: {width: "40%", color: "#dc8426"},
		15: {width: "60%", color: "#dccd26"},
		20: {width: "80%", color: "#66dc26"},
		30: {width: "100%", color: "linear-gradient(90deg, #9333ea, #4a53eb)"}
	}

	function createPassword(animated = true) {
		for (let i = 0; i < password_length; i++) {
			let random_charset = password_charset[Math.floor(Math.random() * password_charset.length)]
			setTimeout(() => {
					password =
						password.slice(0, i) +
						random_charset[Math.floor(Math.random() * random_charset.length)] +
						password.slice(i + 1)
			}, animated ? i * 15 : 0)

			if (i === password_length - 1) {
				password = password.slice(0, i) + random_charset[Math.floor(Math.random() * random_charset.length)]
			}
		}
		password_strength = password_strength_values[Object.keys(password_strength_values).reduce((a, b) => Math.abs(b - password_length) < Math.abs(a - password_length) ? b : a)]
	}
	createPassword()

	function handleCheck(e) {
		if (e.target.checked) {
			password_charset.push(e.target.value)
		} else {
			password_charset = password_charset.filter((item) => item !== e.target.value)
		}
		if (password_charset.length === 1) {
			document.querySelector(`.charset_checkbox[value="${password_charset[0]}"]`).disabled = true
		} else {
			document.querySelectorAll('.charset_checkbox').forEach((item) => (item.disabled = false))
		}
		createPassword()
	}

	function handleClipboard() {
		navigator.clipboard.writeText(password)
		clipboardDialog.showModal()
		setTimeout(() => clipboardDialog.close(), 700)
	}
</script>

<form class="flex flex-col gap-2">
	<div class="password_container relative after:absolute after:h-[3px] after:transition-all" style={`--password_width: ${password_strength.width}; --password_color: ${password_strength.color}`}>
		<textarea readonly value={password} class="bg-white block resize-none text-black w-full h-11 p-2 pl-3 pr-6 text-[15px] leading-[25px] truncate"/>
		<button type="button" title="Other Password" on:click={() => createPassword()} class="bg-white p-[10px] font-bold uppercase scale-90 absolute top-1/2 -translate-y-1/2 right-0 active:-rotate-180 hover:opacity-75 transition-all rounded-full">
			<img src={icon_arrow_clockwise} alt="" class="w-5" />
		</button>
	</div>
	<span class="text-sm mb-3 block">Length: {password_length}</span>

	<fieldset class="flex gap-2 items-center">
		<button type="button"  disabled={password_length <= 3} title="Subtract one"
			on:click={() => {password_length--; createPassword()}}
			class={`bg-white w-6 h-5 border-none rounded-full hover:scale-105 relative grid place-items-center after:absolute after:w-3/5 after:h-[2px] after:bg-black after:rounded-full ${password_length <= 3 ? 'opacity-50 hover:scale-100' : ''}`}
		/>
		<input type="range" min="3" max="40" value={password_length}
			on:input={(e) => {password_length = e.target.value; createPassword(false)}}
			class="input_range cursor-pointer h-[6px] my-[10px] mx-0 w-full rounded-full focus:outline-none appearance-none"
			style={`--left-slider: ${Math.round(((password_length - 3) * 100) / (40 - 3))}`}
		/>
		<button type="button" disabled={password_length >= 40} title="Add one"
			on:click={() => {password_length++; createPassword()}}
			class={`bg-white w-6 h-5 border-none rounded-full hover:scale-105 relative grid place-items-center after:absolute after:w-3/5 after:h-[2px] before:absolute before:w-3/5 before:h-[2px] before:rotate-90 before:left-1/2 before:-translate-x-1/2 before:bg-black after:bg-black after:rounded-full before:rounded-full ${password_length >= 40 ? 'opacity-50 hover:scale-100' : ''}`}
		/>
	</fieldset>

	<button type="button" class="text-white p-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 font-bold uppercase my-4 w-full hover:opacity-95 bg-[length:300%_100%] hover:bg-[100%_0] transition-all duration-300" on:click={handleClipboard} style="box-shadow: 0 0 15px #6447ea7a">Copy</button>

	<fieldset class="flex gap-2 justify-between mt-2">
		<legend class="contents">Characters used:</legend>
		<label class="cursor-pointer" title="Uppercase">
			<input type="checkbox" value={CHARSET_UPERRCASE} on:change={handleCheck} checked
				class="charset_checkbox appearance-none relative w-5 h-5 bg-white border-none cursor-pointer outline-none before:w-full before:h-full before:absolute before:scale-0 checked:before:scale-100 transition-all duration-[150] hover:bg-gray-300 checked:bg-purple-600 hover:checked:bg-purple-500"
			/> ABC
		</label>
		<label class="cursor-pointer" title="Lowercase">
			<input type="checkbox" value={CHARSET_LOWERCASE} on:change={handleCheck} checked
				class="charset_checkbox appearance-none relative w-5 h-5 bg-white border-none cursor-pointer outline-none before:w-full before:h-full before:absolute before:scale-0 checked:before:scale-100 transition-all duration-[150] hover:bg-gray-300 checked:bg-purple-600 hover:checked:bg-purple-500"
			/> abc
		</label>
		<label class="cursor-pointer" title="Numbers">
			<input type="checkbox" value={CHARSET_NUMBER} on:change={handleCheck} checked
				class="charset_checkbox appearance-none relative w-5 h-5 bg-white border-none cursor-pointer outline-none before:w-full before:h-full before:absolute before:scale-0 checked:before:scale-100 transition-all duration-[150] hover:bg-gray-300 checked:bg-purple-600 hover:checked:bg-purple-500"
			/> 123
		</label>
		<label class="cursor-pointer" title="Special characters">
			<input type="checkbox" value={CHARSET_SPECIAL} on:change={handleCheck} checked
				class="charset_checkbox appearance-none relative w-5 h-5 bg-white border-none cursor-pointer outline-none before:w-full before:h-full before:absolute before:scale-0 checked:before:scale-100 transition-all duration-[150] hover:bg-gray-300 checked:bg-purple-600 hover:checked:bg-purple-500"
			/> $@#
		</label>
	</fieldset>
</form>

<style>
	:disabled {
		filter: grayscale(100%);
		cursor: not-allowed !important;
	}
	.password_container::after{
		width: var(--password_width);
		background: var(--password_color);
	}
	/* === Input === */
	.input_range {
		background: rgba(128, 128, 128, 0.6) linear-gradient(white, white) no-repeat;
		background-size: calc(var(--left-slider) * 1%) 100%;
	}
	.input_range::-webkit-slider-thumb {
		height: 30px;
		width: 30px;
		border-radius: 100%;
		cursor: ew-resize;
		-webkit-appearance: none;
		margin-top: -1px;
		transition: transform 0.2s ease;
		background:white url('../assets/icon_unfold_more.svg') no-repeat center;
		background-size: 100%;
		background-position: 1px;
	}
	.input_range:hover::-webkit-slider-thumb {
		transform: scale(1.1);
	}
	:global(body.light-mode) .input_range::-webkit-slider-thumb{
		background: #e4e4fd  url('../assets/icon_unfold_more.svg') no-repeat center;
		background-size: 100%;
		background-position: 1px;
	}
	:global(body.light-mode) .input_range{
		background: rgba(128, 128, 128, 0.6) linear-gradient(#e4e4fd, #e4e4fd) no-repeat;
		background-size: calc(var(--left-slider) * 1%) 100%;
	}
	:global(body.light-mode) textarea{
		background: #e4e4fd;
	}
	/* === Checkboxes === */
	.charset_checkbox::before {
		background: url('../assets/icon_check.svg') no-repeat center center;
		background-size: 100%;
		transition: transform 0.05s ease-out;
	}
</style>