<script lang="ts">
	import ToggleButton from './components/ToggleButton.svelte'
	import SelectLength from './components/SelectLength.svelte'
	import Header from './components/Header.svelte'
	import CopyButton from './components/CopyButton.svelte'
	import GeneratorAlertFormat from './components/GeneratorAlert.svelte'
	import Footer from './components/Footer.svelte'
	import { passwordSettings } from './store/index'
</script>

<main class="--yeraldev-root">
	<Header />

	<CopyButton />

	<SelectLength
		data={$passwordSettings.passwordLength}
		customMethod={passwordSettings.customizePasswordLength}
	/>

	<section class="--yeraldev-toggle-buttons">
		<span>Password options:</span>
		<ToggleButton
			data={$passwordSettings.lowercase}
			customMethod={passwordSettings.switchLowerCase}
		/>
		<ToggleButton
			data={$passwordSettings.uppercase}
			customMethod={passwordSettings.switchUpperCase}
		/>
		<ToggleButton data={$passwordSettings.numbers} customMethod={passwordSettings.switchNumbers} />
		<ToggleButton data={$passwordSettings.symbols} customMethod={passwordSettings.switchSymbols} />
	</section>

	<Footer />
	<GeneratorAlertFormat />
</main>

<style>
	:root {
		--yeraldev-font-family: 'Cascadia Code', 'Courier New', Courier, monospace;
		--yeraldev-font-size-base: 1.25rem;
		--yeraldev-color: hsl(288, 9%, 89%);
		--yeraldev-red: hsl(0, 80%, 60%);
		--yeraldev-green: hsl(100, 70%, 60%);
		--yeraldev-yellow: hsl(47, 100%, 65%);
		--yeraldev-purple: hsl(239, 100%, 74%);
		--yeraldev-text-shadow-base: hsla(47, 100%, 65%, 0.3) -1px -1px 6px,
			hsla(239, 100%, 74%, 0.3) 1px 1px 6px;
		--yeraldev-text-shadow-hover: hsla(47, 100%, 65%, 0.8) -1px -1px 6px,
			hsla(239, 100%, 74%, 0.8) 1px 1px 6px;
		--yeraldev-toggle-shadow: hsla(47, 100%, 65%, 0.5) -1px -1px 6px,
			hsla(239, 100%, 74%, 0.5) 1px 1px 6px;
	}
	.--yeraldev-root {
		display: grid;
		place-content: center;
		gap: 1rem;
		height: 100vh;
		width: 100vw;
		font-size: var(--yeraldev-font-size-base);
		color: var(--yeraldev-color);
		text-shadow: var(--yeraldev-text-shadow-base);
		font-family: var(--yeraldev-font-family);
		text-align: center;
	}

	.--yeraldev-toggle-buttons {
		display: grid;
		place-content: center;
		gap: 1rem;
	}

	@media (max-width: 600px) {
		.--yeraldev-root {
			font-size: 1.5em;
			padding: 0 1rem;
		}
	}
</style>
