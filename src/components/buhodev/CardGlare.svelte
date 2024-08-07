<!-- borrowed from <https://github.com/simeydotme/pokemon-cards-css> -->

<div id="buhodev" class="card__glare pointer-events-none" />

<style>
	#buhodev.card__glare {
		transform: translateZ(1px);
		z-index: 4;
		background: radial-gradient(
			farthest-corner circle at var(--mx) var(--my),
			rgba(255, 255, 255, 0.8) 10%,
			rgba(255, 255, 255, 0.65) 20%,
			rgba(0, 0, 0, 0.5) 90%
		);
		mix-blend-mode: overlay;
		opacity: var(--o);
	}
</style>
