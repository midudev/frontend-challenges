<!-- borrowed from <https://github.com/simeydotme/pokemon-cards-css> -->
<script lang="ts">
	import { spring } from 'svelte/motion'
	import { onMount } from 'svelte'
	import { activeCard } from '@components/buhodev/stores/activeCard'
	import { orientation, resetBaseOrientation } from '@components/buhodev/stores/orientation'
	import { clamp, round } from '@components/buhodev/helpers/math'

	import Glare from '@components/buhodev/CardGlare.svelte'
	import Shine from '@components/buhodev/CardShine.svelte'

	export let cardBack = '/buhodev/card_back.jpg'
	export let img = cardBack
	export let password: string

	export let showcase = false

	let thisCard
	let rotator
	let debounce
	let active = false
	let interacting = false
	let firstPop = true
	let loading = false

	const springR = { stiffness: 0.066, damping: 0.25 }
	const springD = { stiffness: 0.033, damping: 0.45 }
	let springRotate = spring({ x: 0, y: 0 }, springR)
	let springGlare = spring({ x: 50, y: 50, o: 0 }, springR)
	let springBackground = spring({ x: 50, y: 50 }, springR)
	let springRotateDelta = spring({ x: 0, y: 0 }, springD)
	let springTranslate = spring({ x: 0, y: 0 }, springD)
	let springScale = spring(1, springD)

	const interact = (e) => {
		if ($activeCard && $activeCard !== thisCard) return

		interacting = true

		if (e.type === 'touchmove') {
			e.clientX = e.touches[0].clientX
			e.clientY = e.touches[0].clientY
		}

		const $el = e.target
		const rect = $el.getBoundingClientRect() // get element's current size/position
		const absolute = {
			x: e.clientX - rect.left, // get mouse position from left
			y: e.clientY - rect.top // get mouse position from right
		}
		const percent = {
			x: round((100 / rect.width) * absolute.x),
			y: round((100 / rect.height) * absolute.y)
		}
		const center = {
			x: percent.x - 50,
			y: percent.y - 50
		}

		springBackground.stiffness = springR.stiffness
		springBackground.damping = springR.damping
		springBackground.set({
			x: round(50 + percent.x / 4 - 12.5),
			y: round(50 + percent.y / 3 - 16.67)
		})
		springRotate.stiffness = springR.stiffness
		springRotate.damping = springR.damping
		springRotate.set({
			x: round(-(center.x / 3.5)),
			y: round(center.y / 2)
		})
		springGlare.stiffness = springR.stiffness
		springGlare.damping = springR.damping
		springGlare.set({
			x: percent.x,
			y: percent.y,
			o: 1
		})
	}

	const interactEnd = (e, delay = 500) => {
		setTimeout(function () {
			const snapStiff = 0.01
			const snapDamp = 0.06
			interacting = false

			springRotate.stiffness = snapStiff
			springRotate.damping = snapDamp
			springRotate.set({ x: 0, y: 0 })

			springGlare.stiffness = snapStiff
			springGlare.damping = snapDamp
			springGlare.set({ x: 50, y: 50, o: 0 })

			springBackground.stiffness = snapStiff
			springBackground.damping = snapDamp
			springBackground.set({ x: 50, y: 50 })
		}, delay)
	}

	const touchEnd = (e, delay) => {
		deactivate()
		interactEnd(e, delay)
	}

	const activate = (e) => {
		const isTouch = e.pointerType === 'touch'
		if (!isTouch && $activeCard && $activeCard === thisCard) {
			// deactive if already active
			$activeCard = undefined
		} else {
			$activeCard = thisCard
			resetBaseOrientation()
		}
	}

	const deactivate = (e) => {
		interactEnd()
		$activeCard = undefined
	}

	const reposition = (e) => {
		clearTimeout(debounce)
		debounce = setTimeout(() => {
			if ($activeCard && $activeCard === thisCard) {
				setCenter()
			}
		}, 300)
	}

	const setCenter = () => {
		const rect = thisCard.getBoundingClientRect() // get element's size/position
		const view = document.documentElement // get window/viewport size

		const delta = {
			x: round(view.clientWidth / 2 - rect.x - rect.width / 2),
			y: round(view.clientHeight / 2 - rect.y - rect.height / 2)
		}
		springTranslate.set({
			x: delta.x,
			y: delta.y
		})
	}

	const popover = () => {
		const rect = thisCard.getBoundingClientRect() // get element's size/position
		let delay = 100
		let scaleW = (window.innerWidth / rect.width) * 0.9
		let scaleH = (window.innerHeight / rect.height) * 0.9
		let scaleF = 1.75
		setCenter()
		if (firstPop) {
			delay = 1000
			springRotateDelta.set({
				x: 360,
				y: 0
			})
		}
		firstPop = false
		springScale.set(Math.min(scaleW, scaleH, scaleF))
		interactEnd(null, delay)
	}

	const retreat = () => {
		springTranslate.set({
			x: 0,
			y: 0
		})
		springRotateDelta.set({
			x: 0,
			y: 0
		})
		springScale.set(1)
		interactEnd(null, 100)
	}

	$: {
		if ($activeCard && $activeCard === thisCard) {
			popover()
			active = true
		} else {
			retreat()
			active = false
		}
	}

	$: styles = `
		--mx: ${$springGlare.x}%;
		--my: ${$springGlare.y}%;
		--tx: ${$springTranslate.x}px;
		--ty: ${$springTranslate.y}px;
		--s: ${$springScale};
		--o: ${$springGlare.o};
		--rx: ${$springRotate.x + $springRotateDelta.x}deg;
		--ry: ${$springRotate.y + $springRotateDelta.y}deg;
		--pos: ${$springBackground.x}% ${$springBackground.y}%;
		--posx: ${$springBackground.x}%;
		--posy: ${$springBackground.y}%;
		--hyp: ${
			Math.sqrt(
				($springGlare.y - 50) * ($springGlare.y - 50) +
					($springGlare.x - 50) * ($springGlare.x - 50)
			) / 50
		};
	`

	const orientate = (e) => {
		const x = e.relative.gamma
		const y = e.relative.beta

		const max = { x: 16, y: 18 }
		const degrees = { x: clamp(x, -max.x, max.x), y: clamp(y, -max.y, max.y) }
		const percent = {
			x: 50 + (degrees.x / (max.x * 2)) * 100,
			y: 50 + (degrees.y / (max.y * 2)) * 100
		}

		springBackground.stiffness = springR.stiffness
		springBackground.damping = springR.damping
		springBackground.set({
			x: round(50 + (max.x * 2 * ((50 - -percent.x) / 100) - max.x * 2)),
			y: round(50 + (max.y * 2 * ((50 + percent.y) / 100) - max.y * 2))
		})
		springRotate.stiffness = springR.stiffness
		springRotate.damping = springR.damping
		springRotate.set({
			x: round(degrees.x * -1),
			y: round(degrees.y)
		})
		springGlare.stiffness = springR.stiffness
		springGlare.damping = springR.damping
		springGlare.set({
			x: round(percent.x),
			y: round(percent.y),
			o: 1
		})
	}

	$: {
		if ($activeCard && $activeCard === thisCard) {
			interacting = true
			orientate($orientation)
		}
	}

	onMount(() => {
		if (showcase) {
			let showTimer
			const s = 0.02
			const d = 0.5
			let r = 0
			setTimeout(() => {
				interacting = true
				active = true
				springRotate.stiffness = s
				springRotate.damping = d
				springGlare.stiffness = s
				springGlare.damping = d
				springBackground.stiffness = s
				springBackground.damping = d

				let circle = setInterval(function () {
					r += 0.05
					springRotate.set({ x: Math.sin(r) * 25, y: Math.cos(r) * 25 })
					springGlare.set({ x: 55 + Math.sin(r) * 55, y: 55 + Math.cos(r) * 55, o: 0.8 })
					springBackground.set({ x: 20 + Math.sin(r) * 20, y: 20 + Math.cos(r) * 20 })
				}, 20)

				setTimeout(() => {
					clearInterval(circle)
					interactEnd(0)
				}, 4000)

				thisCard.scrollIntoView({ behaviour: 'smooth', block: 'center' })
			}, 2000)
		}
	})
</script>

<svelte:window on:scroll={reposition} />

<div
	id="buhodev"
	class="card"
	class:active
	class:interacting
	class:loading
	style={styles}
	bind:this={thisCard}
>
	<div id="buhodev" class="card__translater">
		<div
			id="buhodev"
			class="card__rotator"
			bind:this={rotator}
			on:pointerup={activate}
			on:pointermove={interact}
			on:mouseout={interactEnd}
			on:blur={deactivate}
			tabindex="0"
		>
			<img id="buhodev" class="card__back pointer-events-none" src={cardBack} alt="" />
			<div id="buhodev" class="card__front">
				<img src={img} alt="" loading="lazy" class="pointer-events-none" />
				<div class="absolute inset-0 flex flex-col items-center">
					<p
						class="inline-block font-mono -translate-y-10 row h-16 px-4 text-center font-bold text-gray-200"
					>
						Whoa! It looks like you really like this password, here you go:
					</p>
					<div
						class="max-w-[18rem] translate-y-5 overflow-auto bg-black/60 font-mono backdrop-blur-md text-ellipsis mx-auto inline-block text-center text-3xl font-bold text-neutral-200 px-2 py-1 rounded-none isolate"
					>
						<span class="inline-block">{password}</span>
					</div>
				</div>
				<Shine />
				<Glare />
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--mx: 50%;
		--my: 50%;
		--s: 1;
		--o: 0;
		--tx: 0px;
		--ty: 0px;
		--rx: 0deg;
		--ry: 0deg;
		--pos: 50% 50%;
		--posx: 50%;
		--posy: 50%;
		--hyp: 0;
	}

	#buhodev.card {
		--radius: 4.55% / 3.5%;
		z-index: calc(var(--s) * 100);
		transform: translate3d(0, 0, 0.1px);
		will-change: transform, visibility;
		transform-style: preserve-3d;
	}

	#buhodev.card.interacting {
		z-index: calc(var(--s) * 120);
	}

	#buhodev.card.active .card__translater,
	#buhodev.card.active .card__rotator {
		touch-action: none;
	}

	#buhodev.card__translater,
	#buhodev.card__rotator {
		display: grid;
		perspective: 600px;
		transform-origin: center;
		will-change: transform;
	}

	#buhodev.card__translater {
		width: auto;
		position: relative;
		transform: translate3d(var(--tx), var(--ty), 0) scale(var(--s));
	}

	#buhodev.card__rotator {
		--glow: #69d1e9;
		transform: rotateY(var(--rx)) rotateX(var(--ry));
		transform-style: preserve-3d;
		box-shadow: 0px 10px 20px -5px black;
		border-radius: var(--radius);
		outline: none;
		transition: box-shadow 0.4s ease, outline 0.2s ease;
	}

	#buhodev.card.active .card__rotator {
		box-shadow: 0 0 10px 0px var(--glow), 0 0 10px 0px var(--glow), 0 0 30px 0px var(--glow);
	}

	#buhodev.card__rotator:focus {
		box-shadow: 0 0 10px 0px var(--glow), 0 0 10px 0px var(--glow), 0 0 30px 0px var(--glow);
	}

	#buhodev.card.active .card__rotator:focus {
		box-shadow: 0px 10px 30px 3px black;
	}

	#buhodev.card__rotator :global(*) {
		width: 100%;
		display: grid;
		grid-area: 1/1;
		border-radius: var(--radius);
		image-rendering: optimizeQuality;
		transform-style: preserve-3d;
	}

	#buhodev.card__back {
		transform: rotateY(180deg);
		backface-visibility: visible;
	}

	#buhodev.card__front,
	#buhodev.card__front * {
		backface-visibility: hidden;
	}

	#buhodev.card__front {
		opacity: 1;
		transition: opacity 0.2s ease-out;
	}

	#buhodev.loading .card__front {
		opacity: 0;
	}

	#buhodev.loading .card__back {
		transform: rotateY(0deg);
	}

	:global(#buhodev.card__shine) {
		--grain: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMyI+PC9yZWN0Pgo8L3N2Zz4=');
		--space: 5%;
		--angle: 133deg;
		--imgsize: 500px;
		--red: #f80e7b;
		--yel: #eedf10;
		--gre: #21e985;
		--blu: #0dbde9;
		--vio: #c929f1;
	}

	:global(#buhodev.card .card__shine),
	:global(#buhodev.card .card__shine::after) {
		--space: 5%;
		--angle: 133deg;
		--imgsize: 50%;

		background-image: url('/buhodev/illusion.webp'),
			repeating-linear-gradient(
				0deg,
				rgb(255 119 115) calc(var(--space) * 1),
				rgb(255 237 95 / 100%) calc(var(--space) * 2),
				rgb(168 255 95 / 100%) calc(var(--space) * 3),
				rgb(131 255 247 / 100%) calc(var(--space) * 4),
				rgb(120 148 255 / 100%) calc(var(--space) * 5),
				rgb(216 117 255) calc(var(--space) * 6),
				rgb(255 119 115) calc(var(--space) * 7)
			),
			repeating-linear-gradient(
				var(--angle),
				#0e152e 0%,
				hsl(180deg 10% 60%) 3.8%,
				hsl(180deg 29% 66%) 4.5%,
				hsl(180deg 10% 60%) 5.2%,
				#0e152e 10%,
				#0e152e 12%
			),
			radial-gradient(
				farthest-corner circle at var(--mx) var(--my),
				rgb(0 0 0 / 10%) 12%,
				rgb(0 0 0 / 15%) 20%,
				rgb(0 0 0 / 25%) 120%
			);
		background-blend-mode: exclusion, hue, hard-light;
		background-size: var(--imgsize), 200% 700%, 300%, 200%;
		background-position: center, 0% var(--posy), var(--posx) var(--posy), var(--posx) var(--posy);
		filter: brightness(calc((var(--hyp) * 0.3) + 0.5)) contrast(2) saturate(1.5);
	}

	:global(#buhodev.card .card__shine::after) {
		content: '';
		background-size: var(--imgsize), 200% 400%, 195%, 200%;
		background-position: center, 0% var(--posy), calc(var(--posx) * -1) calc(var(--posy) * -1),
			var(--posx) var(--posy);
		filter: brightness(calc((var(--hyp) * 0.5) + 0.8)) contrast(1.6) saturate(1.4);
		mix-blend-mode: exclusion;
	}
</style>
