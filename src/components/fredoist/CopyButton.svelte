<script lang="ts">
	import { usePassword } from '@hooks/fredoist/use-password'

	const password = usePassword()

	async function copyPassword(e: Event) {
		e.preventDefault()
		await navigator.clipboard.writeText($password)
	}
</script>

<button
	type="button"
	class="group motion-reduce:animate-none focus:outline-[#fafafa] relative bg-[#f8ef00] text-black font-semibold uppercase py-5 px-10 border-r-[3px] border-[#ff003c] inline-flex items-center justify-between gap-x-16 [clip-path:polygon(100%_0,100%_25%,100%_100%,6%_100%,0%_70%,0_0)]"
	on:click={copyPassword}
>
	<span>Copy Password_</span>
	<span class="fredoist-glitch-animation absolute inset-0 bg-[#f8ef00] hidden" />
	<span
		class="absolute bg-black right-5 -bottom-px text-xs font-normal font-[Barlow,sans-serif] leading-none pl-2 pr-5 text-[#fafafa] border-l-[3px] border-[#ff003c]"
		>R25</span
	>
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">
		<path
			fill="none"
			stroke="currentColor"
			stroke-linecap="square"
			stroke-miterlimit="10"
			stroke-width="48"
			d="M268 112l144 144-144 144M392 256H100"
		/>
	</svg>
</button>

<style>
	.group:hover .fredoist-glitch-animation {
		display: block;
		animation: fredoist-glitch-animation 2s linear infinite;
	}

	@keyframes fredoist-glitch-animation {
		0% {
			opacity: 1;
			transform: translateZ(0);
			clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		}

		2% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(-5px);
		}

		6% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(5px);
		}

		8% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(-5px);
		}

		9% {
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			transform: translate(0);
		}

		10% {
			clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			transform: translate3d(5px, 0, 0);
		}

		13% {
			clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			transform: translateZ(0);
		}

		13.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			transform: translate3d(5px, 0, 0);
		}

		15% {
			clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			transform: translate3d(5px, 0, 0);
		}

		20% {
			clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			transform: translate3d(-5px, 0, 0);
		}

		20.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			transform: translate3d(5px, 0, 0);
		}

		25% {
			clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			transform: translate3d(5px, 0, 0);
		}

		30% {
			clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			transform: translate3d(-5px, 0, 0);
		}

		30.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		}

		35% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(-5px);
		}

		40% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(5px);
		}

		45% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(-5px);
		}

		50% {
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			transform: translate(0);
		}

		55% {
			clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			transform: translate3d(5px, 0, 0);
		}

		60% {
			clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			transform: translateZ(0);
			opacity: 1;
		}

		60.1% {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			opacity: 1;
		}

		to {
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			opacity: 1;
		}
	}
</style>
