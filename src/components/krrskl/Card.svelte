<div class="krrskl-card">
	<slot />
</div>

<style>
	.krrskl-card {
		background-color: var(--krrskl-white-color);
		border-radius: 8px;
		padding: 1rem;
		min-width: 300px;
	}

	@media (max-width: 425px) {
		.krrskl-card {
			width: 95vw;
		}
	}

	@media (min-width: 768px) {
		.krrskl-card {
			min-width: 600px;
		}
	}
</style>
