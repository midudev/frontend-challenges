<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let password = ''

	async function copyToClipboard() {
		await navigator.clipboard.writeText(password)
	}
</script>

<code class="krrskl-password-display mb-4">
	{password}
	<div class="krrskl-password-display__actions">
		<button class="krrskl-btn" on:click={copyToClipboard}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.3333 0.708334H1.83334C1.05417 0.708334 0.416672 1.34583 0.416672 2.125V12.0417H1.83334V2.125H10.3333V0.708334ZM12.4583 3.54167H4.66667C3.88751 3.54167 3.25001 4.17917 3.25001 4.95833V14.875C3.25001 15.6542 3.88751 16.2917 4.66667 16.2917H12.4583C13.2375 16.2917 13.875 15.6542 13.875 14.875V4.95833C13.875 4.17917 13.2375 3.54167 12.4583 3.54167ZM12.4583 14.875H4.66667V4.95833H12.4583V14.875Z"
				/>
			</svg>
		</button>

		<button class="krrskl-btn" on:click={() => dispatch('onGenerate', null)}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<path
					d="M13.2819 2.28831C11.87 0.876375 9.93225 0 7.78026 0C3.47629 0 0 3.48602 0 7.79C0 12.094 3.47629 15.58 7.78026 15.58C11.4123 15.58 14.4407 13.0969 15.3073 9.7375H13.2819C12.4835 12.0063 10.3217 13.6325 7.78026 13.6325C4.55715 13.6325 1.93776 11.0131 1.93776 7.79C1.93776 4.56689 4.55715 1.9475 7.78026 1.9475C9.39669 1.9475 10.8378 2.61939 11.8895 3.68078L8.75401 6.81625H15.5703V0L13.2819 2.28831Z"
				/>
			</svg>
		</button>
	</div>
</code>

<style>
	.krrskl-password-display {
		width: 100%;
		padding: 1rem;
		text-align: center;
		background-color: var(--krrskl-gray-color);
		position: relative;
		color: var(--krrskl-primary-color);
		letter-spacing: 0.15em;
		border-radius: 8px;
	}

	.krrskl-btn {
		background: transparent;
		border: 0;
		outline: none;
		padding: 0;
		cursor: pointer;
	}

	.krrskl-btn svg {
		width: 1rem;
		height: 1rem;
		fill: var(--krrskl-primary-color);
	}

	.krrskl-password-display__actions {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
	}
</style>
