<span class="--yeraldev-success" />

<style>
	.--yeraldev-success {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		justify-content: center;
		align-items: center;
		padding: 0.1rem;
		width: 3rem;
		height: 3rem;
		border: 1px solid var(--yeraldev-color);
		border-radius: 100%;
		box-shadow: inset var(--yeraldev-text-shadow-hover);
		transform: rotateZ(-45deg);
	}
	.--yeraldev-success::before,
	.--yeraldev-success::after {
		position: absolute;
		content: '';
		width: 1.55rem;
		height: 0.25rem;
		box-shadow: inherit;
		border: inherit;
		transform: translate(2px, 3px);
		background-color: var(--yeraldev-color);
	}
	.--yeraldev-success::after {
		position: absolute;
		transform: translate(-7px, -2px);
		height: 0.9rem;
		width: 0.25rem;
	}
</style>
