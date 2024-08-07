<script lang="ts">
	import { usePassword } from '@hooks/fredoist/use-password'
	import { useOptions } from '@hooks/fredoist/use-options'
	import { useStrengthMeter } from '@hooks/fredoist/use-strengthmeter'

	const password = usePassword()
	const options = useOptions()
	const strength = useStrengthMeter()

	$: $options && password.generate()

	async function copyPassword(event: Event) {
		event.preventDefault()
		const input = event.target as HTMLInputElement
		input.select()
		await navigator.clipboard.writeText($password)
	}
</script>

<div class="relative">
	<input
		type="text"
		aria-label="Generated password"
		value={$password}
		readonly
		class="p-5 pr-24 w-full border-2 border-[#00f0ff] bg-[#00f0ff] bg-opacity-10 text-[#00f0ff] focus:outline-none font-[inherit] tracking-widest mb-5 cursor-copy"
		on:click={copyPassword}
	/>
	<div
		data-label={$strength.description}
		class="cursor-help absolute right-14 top-5 flex flex-col-reverse gap-0.5 before:absolute before:-top-2 before:right-1/2 before:translate-x-1/2 before:-translate-y-full before:text-xs before:font-[Barlow,sans-serif] before:hidden hover:before:block before:whitespace-nowrap before:py-px before:px-1 before:bg-[#ff003c] before:text-[#fafafa] before:content-[attr(data-label)]"
	>
		{#each Array.from({ length: 4 }) as _, key}
			<span class={`h-1 w-6 ${key < $strength.score ? 'bg-[#ff003c]' : 'bg-[#00f0ff]'}`} />
		{/each}
	</div>
	<button
		class="absolute right-5 top-5 text-[#00f0ff] before:absolute before:-right-2 before:translate-x-full before:text-xs before:top-1 before:font-[Barlow,sans-serif] before:hidden lg:hover:before:block before:whitespace-nowrap before:py-px before:px-1 before:bg-[#ff003c] before:text-[#fafafa] before:content-[attr(data-label)]"
		data-label="Generate Password"
		on:click={password.generate}
	>
		<span class="sr-only">Generate Password</span>
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6 fill-current"
			viewBox="0 0 512 512"
		>
			<path
				d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92"
				fill="none"
				stroke="currentColor"
				stroke-linecap="square"
				stroke-miterlimit="10"
				stroke-width="32"
			/>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="square"
				stroke-miterlimit="10"
				stroke-width="32"
				d="M32 256l44-44 46 44M480 256l-44 44-46-44"
			/>
		</svg>
	</button>
</div>
