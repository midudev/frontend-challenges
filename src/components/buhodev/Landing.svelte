<script>
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	let ready = false
	onMount(() => (ready = true))

	const FEATURE_CARDS = [
		{
			title: 'Truly random',
			description: 'You can use your mouse to create real random seeds.',
			svgSrc: '/buhodev/icons/lordicon/category.svg',
			webpSrc: '/buhodev/icons/lordicon/category-long.webp'
		},
		{
			title: 'Performant',
			description: 'Get instant feedback while interacting with a delightful UI.',
			svgSrc: '/buhodev/icons/lordicon/speed.svg',
			webpSrc: '/buhodev/icons/lordicon/speed-long.webp'
		},
		{
			title: 'Feature complete',
			description: 'Save-for-later, stats, custom-passwords, and more.',
			svgSrc: '/buhodev/icons/lordicon/chat.svg',
			webpSrc: '/buhodev/icons/lordicon/chat-long.webp'
		},
		{
			title: 'Secure',
			description: 'Made following FBI standards for password generation.',
			svgSrc: '/buhodev/icons/lordicon/check.svg',
			webpSrc: '/buhodev/icons/lordicon/check-long.webp'
		}
	]
</script>

<div
	class="max-w-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mx-auto text-white"
>
	{#if ready}
		<h1 id='buhodev' transition:fly={{ y: -50, duration: 700 }} class="block text-6xl text-center font-bold">
			Unlock the power of world-class password generation
		</h1>

		<div class="flex justify-between gap-4 mt-8">
			{#each FEATURE_CARDS as { title, description, svgSrc, webpSrc }, i}
				<div
					transition:fly={{ y: -50, duration: 500, delay: 200 * (i + 1) - i * 50 }}
					class:mt-12={i % 2 == 1}
					class="group shadow-lg hover:scale-[1.005] hover:shadow-xl transition-all border border-b-0 flex flex-col justify-center h-44 w-48 border-white/10 bg-black/30 backdrop-blur-xl rounded-md p-4"
				>
					<img src={svgSrc} class="group-hover:hidden block w-10 mb-2" alt="" />
					<img src={webpSrc} class="group-hover:block hidden w-10 mb-2" alt="" />
					<h2 class="font-bold">{title}</h2>
					<p>{description}</p>
				</div>
			{/each}
		</div>
		<a
			on:click={() => (ready = false)}
			transition:fly={{ y: -50, duration: 500, delay: 700 }}
			href="/entry/buhodev/app"
			id='buhodev'
			class="primary-button relative mt-8 inline-flex h-12 cursor-pointer touch-manipulation select-none items-center justify-center self-center whitespace-nowrap rounded-lg border-0 bg-blue-600 bg-gradient-to-tr from-blue-700 to-sky-400 py-2 px-12 text-center text-lg leading-none text-white hover:-translate-y-[1px] active:translate-y-[1px]"
			>Get started</a
		>
		<a
			transition:fly={{ y: -50, duration: 500, delay: 900 }}
			class="mt-4 text-slate-900"
			href="https://lordicon.com/">Animated icons by Lordicon.com</a
		>
	{/if}
</div>

<style>
	h1#buhodev {
		text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.75);
		font-family: Coanda, sans-serif;
	}

	#buhodev.primary-button {
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
		transition: box-shadow 0.05s, transform 0.05s;
		will-change: box-shadow, transform;
	}

	#buhodev.primary-button:focus {
		box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
	}

	#buhodev.primary-button:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#3c4fe0 0 -3px 0 inset;
	}

	#buhodev.primary-button:active {
		box-shadow: #3c4fe0 0 3px 7px inset;
	}
</style>
