<script lang="ts">
	import { useAudio } from '@hooks/fredoist/use-audio'

	const audio = useAudio()
</script>

<button
	class="text-[#00f0ff] items-center gap-2 uppercase font-semibold hidden lg:inline-flex"
	on:click={audio.toggle}
>
	{#if $audio}
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5 fill-current"
			viewBox="0 0 512 512"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="square"
				stroke-miterlimit="10"
				stroke-width="32"
				d="M416 432L64 80"
			/>
			<path
				d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47 298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 01-.63 11.74l27.32 27.32A148.8 148.8 0 00352 256zM416 256c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64 16.12 8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256z"
			/>
			<path
				d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49-27 17.22 8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256zM256 72l-73.6 58.78 73.6 73.59V72zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z"
			/>
		</svg>
	{:else}
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5 fill-current"
			viewBox="0 0 512 512"
		>
			<path
				d="M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160"
				fill="none"
				stroke="currentColor"
				stroke-linecap="square"
				stroke-miterlimit="10"
				stroke-width="32"
			/>
			<path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" />
		</svg>
	{/if}
	<span>
		{#if $audio}Enable{:else}Disable{/if} Audio
	</span>
</button>

<audio
	bind:muted={$audio}
	bind:paused={$audio}
	src="https://www.mboxdrive.com/on-the-run.mp3"
	class="hidden"
	controls
	loop
	autoplay
/>

<div class="fredoist-audio fixed -z-10 inset-0 fredoist-audio-grid-bg fredoist-audio-ba-grid fredoist-audio-anim opacity-30" class:hidden={$audio}>
	<div class="fredoist-audio-inner" />
</div>

<style>
	.fredoist-audio {
		--gird-width: 30px;
		--gird-height: 30px;
		--line-color: #ff003c;
		--dot-color: #fafe00;
		--dot-size: 2px;
		--point-gap-width: calc(var(--gird-width) * 4);
		--point-gap-height: calc(var(--gird-height) * 4);
	}

	.fredoist-audio-grid-bg {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.fredoist-audio-ba-grid {
		background: linear-gradient(180deg, black, black, transparent);
	}

	.fredoist-audio-ba-grid:before,
	.fredoist-audio-ba-grid:after,
	.fredoist-audio-inner:before,
	.fredoist-audio-inner:after {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		mix-blend-mode: overlay;
	}

	.fredoist-audio-ba-grid:before {
		background-image: linear-gradient(var(--line-color), transparent 1px),
			linear-gradient(to right, var(--line-color), transparent 1px);
		background-size: 100% var(--gird-height), var(--gird-width) 100%;
	}

	.fredoist-audio-ba-grid:after {
		background-image: radial-gradient(var(--dot-color) 1px, transparent 1px);
		background-size: var(--point-gap-width) var(--point-gap-height);
		background-position: calc(var(--point-gap-width) / 2) calc(var(--point-gap-height) / 2);
	}

	.fredoist-audio-inner:before,
	.fredoist-audio-inner:after {
		background-image: radial-gradient(
			var(--dot-color) var(--dot-size),
			transparent var(--dot-size)
		);
		background-size: var(--point-gap-width) var(--point-gap-height);
		background-position: calc(var(--point-gap-width) / 2) calc(var(--point-gap-height) / 2);
	}

	.fredoist-audio-inner:after {
		transform: scale(1.1, 1.1);
	}

	.fredoist-audio-inner:before {
		/*   background-image: radial-gradient(var(--dot-color) calc(var(--dot-size) + 1px), transparent calc(var(--dot-size) + 1px)); */
		transform: scale(1.2, 1.2);
	}

	.fredoist-audio-anim:after {
		animation: 6.4s linear fredoist-audio-move infinite;
	}

	.fredoist-audio-anim .fredoist-audio-inner:after {
		animation: 3.2s linear fredoist-audio-move infinite;
	}

	.fredoist-audio-anim .fredoist-audio-inner:before {
		animation: 1.6s linear fredoist-audio-move infinite;
	}

	@keyframes fredoist-audio-move {
		0% {
			background-position: calc(var(--point-gap-width) / 2) calc(var(--point-gap-height) / 2);
		}
		100% {
			background-position: calc(var(--point-gap-width) / 2) calc(var(--point-gap-height) / 2 * -1);
		}
	}
</style>
