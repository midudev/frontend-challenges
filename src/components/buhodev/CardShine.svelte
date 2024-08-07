<!-- borrowed from <https://github.com/simeydotme/pokemon-cards-css> -->

<div id="buhodev" class="card__shine pointer-events-none" />

<style>
	#buhodev.card__shine {
		display: grid;
		overflow: hidden;
		transform: translateZ(1px);
		background: transparent;
		z-index: 3;
		mix-blend-mode: color-dodge;
		filter: brightness(0.85) contrast(2.75) saturate(0.65);
		background-size: cover;
		background-position: center;
		opacity: var(--o);
	}

	#buhodev.card__shine:after {
		grid-area: 1/1;
	}
</style>
