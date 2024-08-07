<script>
	export let pinDisplay
	let visibility = false
	
	const changeVisibility = () => {
		visibility = !visibility
		setTimeout(() => {
			visibility = !visibility
		}, 1000);
	}

	const copy = () => {
		navigator.clipboard.writeText(pinDisplay)
		changeVisibility()
	}
</script>

<div class="flex justify-center relative">
	<input type="text"
		id="clipboard"
		value="{ pinDisplay || 'click button to generate password' }" 
		disabled 
		class=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-900 tracking-widest
				focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
				disabled:bg-slate-50 disabled:text-black disabled:border-slate-200 disabled:shadow-none
				invalid:border-pink-500 invalid:text-pink-600
				focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
	/>

	<button type="button" class="mx-5" on:click={copy}>
		<svg 
			class="h-10 w-10 text-white"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			fill="white"
		>
			<path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/>
		</svg>
	</button>
	<p class="absolute -right-24 top-5 animate-ping {visibility ? '': 'hidden'}">
		<span><!-- -->&gt;&gt;&gt;&nbsp;<!-- -->copiado</span>
	</p>
</div>

<style>

	/* From uiverse.io by @namecho */
	button,
	button::after {
		padding: 16px 20px;
		font-size: 18px;
		background: linear-gradient(45deg, transparent 5%, #494748 5%);
		border: 0;
		color: #fff;
		letter-spacing: 3px;
		line-height: 1;
		box-shadow: 6px 0px 0px #00e6f6;
		outline: transparent;
		position: relative;
	}

	button::after {
		--slice-0: inset(50% 50% 50% 50%);
		--slice-1: inset(80% -6px 0 0);
		--slice-2: inset(50% -6px 30% 0);
		--slice-3: inset(10% -6px 85% 0);
		--slice-4: inset(40% -6px 43% 0);
		--slice-5: inset(80% -6px 5% 0);
		content: "COPY :V";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #494748 5%);
		text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
		clip-path: var(--slice-0);
	}

	button:hover::after {
		animation: 1s glitch;
		animation-timing-function: steps(2, end);
	}

	@keyframes glitch {
		0% {
		clip-path: var(--slice-1);
		transform: translate(-20px, -10px);
		}

		10% {
		clip-path: var(--slice-3);
		transform: translate(10px, 10px);
		}

		20% {
		clip-path: var(--slice-1);
		transform: translate(-10px, 10px);
		}

		30% {
		clip-path: var(--slice-3);
		transform: translate(0px, 5px);
		}

		40% {
		clip-path: var(--slice-2);
		transform: translate(-5px, 0px);
		}

		50% {
		clip-path: var(--slice-3);
		transform: translate(5px, 0px);
		}

		60% {
		clip-path: var(--slice-4);
		transform: translate(5px, 10px);
		}

		70% {
		clip-path: var(--slice-2);
		transform: translate(-10px, 10px);
		}

		80% {
		clip-path: var(--slice-5);
		transform: translate(20px, -10px);
		}

		90% {
		clip-path: var(--slice-1);
		transform: translate(-10px, 0px);
		}

		100% {
		clip-path: var(--slice-1);
		transform: translate(0);
		}
	}

</style>