<script>
	import Form from './components/Form.svelte'
	import DarkToggle from './components/DarkToggle.svelte'
  import { onMount } from 'svelte'
	let clipboardDialog

	onMount(() => {
		document.body.style.setProperty('--cursorY', '0.5')
		document.body.style.setProperty('--cursorX', '0.5')
		document.addEventListener("mousemove", (e) => {
			let x = e.clientX / window.innerWidth
			let y = e.clientY / window.innerHeight
			if(x < 0.55 && x > 0.45) {
				document.body.style.setProperty('--cursorX', x)
			}
			if(y < 0.55 && y > 0.45 ) {
				document.body.style.setProperty('--cursorY', y)
			}
		})
	})

</script>

<div class="box">
	<main class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2B38] bg-opacity-75 p-10 w-11/12 max-w-[30rem] text-white overflow-hidden after:w-4/5 after:h-80 after:-top-40 after:absolute after:-z-10" style="box-shadow: 0 0 40px #6447ea14;">
		<h1 class="uppercase font-bold mb-3 text-[17px]">P4SSW0RD G3NER4T0R</h1>
		<Form {clipboardDialog}/>
	</main>
</div>
<dialog bind:this={clipboardDialog} class="transition-all px-6 bg-[#2A2B38] text-white font-bold block -top-5 bottom-auto opacity-0 open:top-2 open:opacity-100 backdrop:bg-transparent">
	<p class="">Copied to clipboard!</p>
</dialog>
<DarkToggle/>

<style>
	:global(body.light-mode) {
		background: #e4ebff;
	}
	:global(body) {
		background-color: #1c1c1f;
	}
	:global(body::after){
		content: "";
    position: absolute;
    left: 0px;
		top: 0;
    background-image: url(./assets/pattern_square.svg);
    opacity: 0.2;
		mask-image: radial-gradient(70% 80% at 50% 50%, black 40%, transparent 70%);
		-webkit-mask-image: radial-gradient(70% 80% at 50% 50%, black 40%, transparent 70%);
		mask-image: radial-gradient(70% 80% at calc(var(--cursorX) * 100%) calc(var(--cursorY) * 100%), black 40%, transparent 70%);
		-webkit-mask-image: radial-gradient(70% 80% at calc(var(--cursorX) * 100%) calc(var(--cursorY) * 100%), black 40%, transparent 70%);
    width: 100%;
    height: 100%;
    z-index: -100;
	}
	.box{
		height: 100%;
		width: 100%;
	}
	@keyframes binary {
		25% {
			content: '01100110 01101111 01110010 00100000 01100001 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101 00100001 00100001 01100110 01101111 01110010 00100000 01100001 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101 00100001 00100001 01100110 01101111 01110010 00100000 01100001 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101 00100001 00100001';
		}
		50% {
			content: '01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100';
		}
		75% {
			content: '01100110 01101111 01110010 00100000 01100001 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101 00100001 00100001 01100110 01101111 01110010 00100000 01100001 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101 00100001 00100001 01100110 01101111 01110010 00100000 01100001 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101 00100001 00100001';
		}
		100% {
			content: '01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100';
		}
	}
	.box::before,
	.box::after {
		animation: 1s linear 1s infinite normal none running binary;
		content: '01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100';
		left: 0px;
		color: white;
		font-size: 14px;
		pointer-events: none;
		position: absolute;
		text-align: center;
		width: 100%;
		opacity: 0.3;
		-webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 95%);
		mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 95%);
		white-space: nowrap;
		overflow: hidden;
		z-index: 200;
	}
	.box::before{
		bottom: 0px;
	}
	:global(body.light-mode) .box::before,
	:global(body.light-mode) .box::after {
		color: black;
		opacity: 0.5;
	}
	:global(body.light-mode)::after {
		filter: invert(1);
		opacity: .4;
	}
	:global(body.light-mode) main{
		background: rgba(255, 255, 255, 0.75);
		color: black;
	}
	:global(body.light-mode) dialog{
		background: white;
		color: black;
	}
</style>