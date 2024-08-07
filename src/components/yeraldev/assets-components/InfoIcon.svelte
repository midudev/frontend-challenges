<span class="--yeraldev-info" />

<style>
	.--yeraldev-info {
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
	}
	.--yeraldev-info::before,
	.--yeraldev-info::after {
		content: '';
		width: 0.25rem;
		height: 1.25rem;
		box-shadow: inherit;
		border: inherit;
		background-color: var(--yeraldev-color);
	}
	.--yeraldev-info::before {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: inherit;
	}
</style>
