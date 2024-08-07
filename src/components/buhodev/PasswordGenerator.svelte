<script lang="ts">
	import Badge from './Badge.svelte'

	import { fade, fly } from 'svelte/transition'
	import { flipboard } from '@components/buhodev/transitions/flipboard'
	import { backOut, quadOut, quadIn } from 'svelte/easing'
	import {
		generatePassword,
		type PasswordDefaultOptions,
		type PasswordAdvancedOptions
	} from '@components/buhodev/helpers/generate_password'
	import {
		generatePassphrase,
		type PassphraseOptions
	} from '@components/buhodev/helpers/generate_passphrase'
	import { copyToClipboard } from '@components/buhodev/actions/copy_to_clipboard'
	import { highlight } from '@components/buhodev/helpers/highlight'
	import Toasts from '@components/buhodev/Toasts.svelte'
	import { addToast } from '@components/buhodev/stores/toast'
	import { savedPasswords, addPassword, clearAll } from '@components/buhodev/stores/history'
	import {
		isSidebarOpen,
		isHistoryOpen,
		toggleSidebar,
		toggleHistory
	} from '@components/buhodev/stores/sidebars_state'
	import PasswordEntry from '@components/buhodev/PasswordEntry.svelte'
	import PasswordCard from '@components/buhodev/HoloCard.svelte'
	import { generateDate } from '@components/buhodev/helpers/generate_date'
	import BarChart from '@components/buhodev/BarChart.svelte'
	import { generatePasswordScore } from '@components/buhodev/helpers/generate_password_score'
	import SeedGenerator from '@components/buhodev/SeedGenerator.svelte'

	let isCopied = false
	let animate = true
	let animation = 'fly'
	let length = 12
	let seedType: 'pseudo' | 'date' | 'manual' | 'mouse' = 'pseudo'

	let currentSeed = ''
	let manualSeed = ''
	let mouseSeed = ''

	let view: 'generate' | 'check' = 'generate'
	let sidebarView: 'password' | 'passphrase' = 'password'
	let hasEllipsis = false
	let showEasterEgg = false
	let showSeedGenerator = false
	let isOverlayDimissable = false

	const INCLUDE_OPTIONS = [
		{
			title: 'Lowercase',
			id: 'lowercase',
			characters: 'a-z',
			description: 'Include unicode characters from position 97 to 122.'
		},
		{
			title: 'Uppercase',
			id: 'uppercase',
			characters: 'A-Z',
			description: 'Include unicode characters from position 65 to 90.'
		},
		{
			title: 'Numbers',
			id: 'numbers',
			characters: '0-9',
			description: 'Include unicode characters from position 48 to 57.'
		},
		{
			title: 'Special',
			id: 'symbols',
			characters: '@#$%^&*',
			description: 'Include unicode characters from position 33 to 38, 42, 64, and 94.'
		}
	]

	const SEPARATOR_OPTIONS = [
		{
			title: 'Hyphens',
			id: '-'
		},
		{
			title: 'Underscores',
			id: '_'
		},
		{
			title: 'Periods',
			id: '.'
		},
		{
			title: 'Commas',
			id: ','
		},
		{
			title: 'Spaces',
			id: ' '
		},
		{
			title: 'Slashes',
			id: '/'
		}
	]

	const SEED_OPTIONS = [
		{
			title: 'Pseudo-random',
			id: 'pseudo',
			pill: '',
			description: 'The randomizer function runs without any seed.'
		},
		{
			title: 'Date seed',
			id: 'date',
			pill: '',
			description: "Today's date is used as the randomizer seed."
		},
		{
			title: 'Manual',
			id: 'manual',
			pill: '',
			description: 'Write some random characters to use them as the seed.'
		},
		{
			title: 'Matrix seed',
			id: 'mouse',
			pill: 'Pro',
			description: 'Generate the seed with your mouse movements.'
		}
	]

	const PASSWORD_DEFAULT_OPTIONS: PasswordDefaultOptions = {
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true
	}

	const PASSWORD_ADVANCED_OPTIONS: PasswordAdvancedOptions = {
		using: 'minimum',
		numberOfChars: { uppercase: 1, numbers: 1, symbols: 1 },
		include: '',
		exclude: '',
		sortOption: 'include',
		seed: currentSeed
	}

	const PASSPHRASE_OPTIONS: PassphraseOptions = {
		wordsCount: 3,
		wordList: 'short',
		separator: '-'
	}

	function handleSuccessfulCopy() {
		isCopied = true
		addToast({ message: 'Copied', type: 'info', dismissible: false, timeout: 3000 })
		setTimeout(() => (isCopied = false), 1000)
	}

	function handleSave() {
		if (view === 'generate') {
			if (sidebarView === 'password') addPassword({ password: password, generated: generateDate() })
			if (sidebarView === 'passphrase')
				addPassword({ password: passphrase, generated: generateDate() })
		} else if (view === 'check' && userPassword) {
			addPassword({ password: userPassword, generated: generateDate() })
		} else {
			addToast({ message: "You can't save an empty password", type: 'info', timeout: 3000 })
		}
	}

	function handleClear() {
		if ($savedPasswords[0] !== undefined) {
			clearAll()
		} else {
			addToast({ message: 'There are no passwords to clear', type: 'info', timeout: 3000 })
		}
	}

	function delayUntilDimiss() {
		setTimeout(() => (isOverlayDimissable = true), 500)
	}

	function updateEasterEggCount() {
		setTimeout(() => (easterEggState.count = 1), 1000)

		if (password === easterEggState.lastPassword) {
			easterEggState.count++
		} else {
			easterEggState.count = 1
		}
		if (easterEggState.count >= 5) {
			easterEggState.count = 1
			showEasterEgg = true
			delayUntilDimiss()
		}
		easterEggState.lastPassword = password
	}

	$: if (
		PASSWORD_DEFAULT_OPTIONS.lowercase === false &&
		PASSWORD_DEFAULT_OPTIONS.uppercase === false &&
		PASSWORD_DEFAULT_OPTIONS.numbers === false &&
		PASSWORD_DEFAULT_OPTIONS.symbols === false
	) {
		PASSWORD_DEFAULT_OPTIONS.lowercase = true
	}

	$: if (seedType === 'mouse' && !mouseSeed.length) {
		showSeedGenerator = true
	} else if (seedType === 'mouse' && mouseSeed.length === 36) {
		setTimeout(() => (showSeedGenerator = false), 1000)
		// this avoidsP sending the toast notification when deselecting and selecting again seedType = 'mouse' on the UI
		if (showSeedGenerator === true) {
			setTimeout(
				() => addToast({ message: 'Matrix seed generated', type: 'info', timeout: 3000 }),
				1500
			)
		}
	}

	$: if (seedType === 'date') {
		currentSeed = Date.now().toString()
	} else if (seedType === 'manual') {
		currentSeed = manualSeed
	} else if (seedType === 'mouse') {
		currentSeed = mouseSeed
	} else {
		currentSeed = ''
	}

	$: password = generatePassword(
		length,
		PASSWORD_DEFAULT_OPTIONS,
		PASSWORD_ADVANCED_OPTIONS,
		currentSeed
	)
	$: highlighted_password = highlight(
		generatePassword(length, PASSWORD_DEFAULT_OPTIONS, PASSWORD_ADVANCED_OPTIONS, currentSeed)
	)
	$: passphrase = generatePassphrase(PASSPHRASE_OPTIONS, currentSeed)
	$: highlighted_passphrase = highlight(generatePassphrase(PASSPHRASE_OPTIONS, currentSeed))
	let userPassword = ''

	$: {
		view
		hasEllipsis = false
		length
		password
		passphrase
		setTimeout(() => (hasEllipsis = true), 360)
	}

	$: passwordScore = generatePasswordScore(password)
	$: passphraseScore = generatePasswordScore(passphrase)
	let userPasswordScore

	let easterEggState = { lastPassword: view === 'generate' ? password : userPassword, count: 1 }
</script>

<Toasts />

<header
	class="text-white bg-neutral-900 sticky w-full z-20 top-0 left-0 flex justify-between border-b border-gray-600"
>
	<button
		on:click={toggleSidebar}
		class="border-r p-3 border-gray-600 flex items-center justify-center hover:bg-neutral-800 transition-colors"
	>
		<span class="sr-only">Open sidebar</span>
		<!-- phosphoricons/sidebar-simple -->
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.25 4.5v15m12-15H3.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Z"
				stroke="#fff"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>

	<div class="flex gap-0.5 items-center -mr-20">
		<button
			on:click={() => (view = 'generate')}
			class:text-purple-500={view === 'generate'}
			class="w-40 rounded-md py-1 hover:bg-neutral-800 font-medium">Password Generator</button
		>
		<button
			on:click={() => (view = 'check')}
			class:text-purple-500={view === 'check'}
			class="w-40 rounded-md py-1 hover:bg-neutral-800 font-medium">Password Checker</button
		>
	</div>

	<div class="flex items-center justify-center">
		<button
			on:click={handleSave}
			class="rounded-lg inline-block bg-blue-500 text-white py-1 w-16 mr-6">Save</button
		>

		<button
			on:click={toggleHistory}
			class="border-l p-3 border-gray-600 flex items-center justify-center hover:bg-neutral-800 transition-colors"
		>
			<span class="sr-only">Open history</span>
			<!-- phosphoricons/bookmark-simple -->
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m18 21-6-3.75L6 21V4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75V21Z"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</header>

<div id="buhodev" class="relative container max-w-full overflow-y-scroll">
	<main class="max-w-md flex flex-col mx-auto text-white pb-8">
		{#if view === 'generate'}
			<!-- Password -->
			<button
				use:copyToClipboard={{ text: sidebarView === 'password' ? password : passphrase }}
				on:copied={handleSuccessfulCopy}
				on:error={() =>
					addToast({ message: 'Error: Password not copied', type: 'error', timeout: 3000 })}
				on:click={updateEasterEggCount}
				title="Copy password"
				class="relative flex items-center justify-start font-bold group font-mono text-3xl mt-8 h-12 py-1 px-4 bg-black/20 border border-white/20 rounded-md w-full"
			>
				<span
					class:text-ellipsis={hasEllipsis}
					class="overflow-hidden text-left w-96 whitespace-nowrap"
				>
					{#if !animate}
						{sidebarView === 'password' ? password : passphrase}
					{:else if animation == 'fly'}
						{#key sidebarView === 'password' ? password : passphrase}
							{#each (sidebarView === 'password' ? password : passphrase).split('') as char, i}
								{#if !isNaN(Number(char))}
									<span
										class="inline-block text-pink-400 leading-none"
										in:fly={{
											y: -5,
											delay: 15 * i,
											easing: backOut
										}}
									>
										{char}
									</span>
								{:else if /[^a-zA-Z]/.test(char)}
									<span
										class="inline-block text-blue-400 leading-none"
										in:fly={{
											y: -5,
											delay: 15 * i,
											easing: backOut
										}}
									>
										{char}
									</span>
								{:else}
									<span
										class="inline-block leading-none"
										in:fly={{
											y: -5,
											delay: 15 * i,
											easing: backOut
										}}
									>
										{char}
									</span>
								{/if}
							{/each}
						{/key}
					{:else if animation == 'flipboard'}
						{#key sidebarView === 'password' ? highlighted_password : highlighted_passphrase}
							<span class="leading-none" in:flipboard={{ duration: 300 }}>
								{@html sidebarView === 'password' ? highlighted_password : highlighted_passphrase}
							</span>
						{/key}
					{/if}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="absolute right-2 top-3 w-6 h-6 group-hover:-rotate-6 duration-75 transition-transform"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						class:text-blue-400={isCopied}
						d={!isCopied
							? 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
							: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'}
					/>
				</svg>
			</button>

			<!-- <button
				on:click={() => (password = generatePassword(length, DEFAULT_OPTIONS, currentSeed))}
				title="Refresh password"
				class="rounded-md border border-white/30 hover:border-white/60 active:bg-gray-400/20 group flex items-center justify-center p-2.5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 group-hover:-rotate-6 duration-75 transition-transform spin"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
					/>
				</svg>
			</button> -->
			{#if sidebarView === 'password'}
				<label id="buhodev" for="length" class="mt-10 inline-block w-full">
					<div class="flex items-center justify-between">
						<span class="text-neutral-400 text-sm font-medium"
							>LENGTH: <span class="text-neutral-100 text-base">{length}</span></span
						>
						<Badge strength={passwordScore.strength} />
					</div>

					<div class="flex items-center justify-center mt-2 gap-2">
						<span>4</span>
						<input type="range" min="4" max="30" class="w-full" bind:value={length} />
						<span>30</span>
					</div>
				</label>
				<div class="flex flex-col gap-6 w-full mt-10">
					<span class="text-neutral-400 text-sm font-medium">INCLUDE</span>
					{#each INCLUDE_OPTIONS as { title, id, characters, description } (id)}
						<label
							id="buhodev"
							for={id}
							class="border-lg flex w-full cursor-pointer rounded border border-gray-400/20 bg-gray-800/20 p-4 pl-4 text-white transition hover:bg-gray-500/20 hover:text-gray-100"
						>
							<!-- TODO: find a better way to align the radio input with the title -->
							<input
								{id}
								type="checkbox"
								value=""
								name="id"
								bind:checked={PASSWORD_DEFAULT_OPTIONS[id]}
								class="w-4 h-4 mt-1 mr-2 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2"
							/>
							<div class="flex flex-col">
								<div>
									<span class="font-semibold">{title}</span>
									<span class="text-gray-200">{characters}</span>
								</div>
								<span class="text-gray-200">{description}</span>
							</div>
						</label>
					{/each}
				</div>

				<!-- Generate Password Button -->
				<button
					on:click={() =>
						(password = generatePassword(length, PASSWORD_DEFAULT_OPTIONS, currentSeed))}
					id="buhodev"
					class="generate-password relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white active:translate-y-[1px]"
					>Generate Password</button
				>
			{:else if sidebarView === 'passphrase'}
				<label id="buhodev" for="length" class="mt-10 inline-block w-full">
					<div class="flex items-center justify-between">
						<span class="text-neutral-400 text-sm font-medium"
							>WORDS: <span class="text-neutral-100 text-base">{PASSPHRASE_OPTIONS.wordsCount}</span
							></span
						>
						<Badge strength={passphraseScore.strength} />
					</div>

					<div class="flex items-center justify-center mt-2 gap-2">
						<span>1</span>
						<input
							type="range"
							min="1"
							max="6"
							class="w-full"
							bind:value={PASSPHRASE_OPTIONS.wordsCount}
						/>
						<span>6</span>
					</div>
				</label>
				<!-- Generate Passphrase Button -->
				<button
					on:click={() => (passphrase = generatePassphrase(PASSPHRASE_OPTIONS))}
					id="buhodev"
					class="generate-password relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white active:translate-y-[1px]"
					>Generate Passphrase</button
				>
			{/if}
		{:else}
			<div class="relative mt-8  flex items-center justify-start font-bold font-mono text-3xl">
				<input
					type="text"
					placeholder="Enter a password to check its strength"
					bind:value={userPassword}
					class="h-12 py-1 pl-4 pr-10 bg-black/20 border border-white/20 w-full placeholder:text-lg rounded-md"
				/>
				<button
					disabled={!userPassword}
					class="absolute right-2 top-3 w-6 h-6 hover:-rotate-6 duration-75 transition-transform"
					on:click={updateEasterEggCount}
					use:copyToClipboard={{ text: userPassword }}
					on:copied={handleSuccessfulCopy}
					on:error={() =>
						addToast({ message: 'Error: Password not copied', type: 'error', timeout: 3000 })}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							class:text-blue-400={isCopied}
							d={!isCopied
								? 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
								: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'}
						/>
					</svg>
				</button>
			</div>

			<button
				disabled={!userPassword}
				on:click={() => (userPasswordScore = generatePasswordScore(userPassword))}
				id="buhodev"
				class="generate-password relative inline-flex w-full h-12 mt-8 bg-gradient-to-tr from-blue-700 to-sky-400 cursor-pointer touch-manipulation select-none items-center justify-center whitespace-nowrap rounded-md border-0 px-4 text-lg leading-none text-white active:translate-y-[1px] disabled:cursor-default disabled:translate-y-0"
				>Check Password</button
			>
			{#if userPasswordScore}
				<div class="flex flex-col gap-6 w-full mt-10">
					<div class="flex items-center justify-between">
						<span class="text-neutral-400 text-sm font-medium">PASSWORD</span>
						<span>{userPasswordScore.password}</span>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-2">
							<span class="text-neutral-400 text-sm font-medium">TIME TO CRACK</span>
							<span>{userPasswordScore.timeToCrack}</span>
						</div>
						<Badge strength={userPasswordScore.strength} />
					</div>
					<BarChart password={userPasswordScore.password} />
					<div class="w-full border-b border-b-neutral-600" />
					<div class="flex items-center justify-between">
						<span class="text-neutral-400 text-sm font-medium">SCORE</span>
						<span>{userPasswordScore.score}/4</span>
					</div>
					<!-- {#if userPasswordScore.contains}
						<div class="flex items-center justify-between">
							<span class="text-neutral-400 text-sm font-medium">CONTAINS</span>
							{#each userPasswordScore.contains as contain}
								<span>{contain}</span>
							{/each}
						</div>
					{/if} -->
					{#if userPasswordScore.warning}
						<div class="flex items-center justify-between">
							<span class="text-neutral-400 text-sm font-medium">WARNING</span>
							<span>{userPasswordScore.warning}</span>
						</div>
					{/if}
				</div>
			{/if}
		{/if}
	</main>

	{#if $isSidebarOpen}
		<aside
			in:fly={{ x: -250, opacity: 1, easing: quadOut, duration: 100 }}
			out:fly={{ x: -250, opacity: 1, easing: quadIn, duration: 150 }}
			class="fixed overflow-y-auto top-0 bottom-0 left-0 mt-12 flex w-72 flex-col bg-neutral-900 border-r border-r-gray-600 text-white"
		>
			{#if view === 'generate'}
				<span
					class="inline-flex rounded-md border shadow-sm border-neutral-800 bg-neutral-900 mx-auto mt-6"
				>
					<button
						on:click={() => (sidebarView = 'password')}
						class="{sidebarView === 'password'
							? 'bg-neutral-800 text-purple-500 border-neutral-700 transition-colors'
							: 'text-neutral-200'} inline-block border border-transparent px-4 py-2 rounded-tl-md rounded-bl-md text-sm font-medium focus:relative hover:bg-neutral-700"
					>
						Password
					</button>

					<button
						on:click={() => (sidebarView = 'passphrase')}
						class="{sidebarView === 'passphrase'
							? 'bg-neutral-800 text-purple-500 border-neutral-700 transition-colors'
							: 'text-neutral-200'} inline-block border border-transparent px-4 py-2 rounded-tr-md rounded-br-md text-sm font-medium focus:relative hover:bg-neutral-700"
					>
						Passphrase
					</button>
				</span>
				<!-- TODO: refactor classes of labels and inputs to make them consistent -->
				{#if sidebarView === 'password'}
					<span class="px-4 mt-6 text-neutral-400 text-xs font-medium">STATS</span>
					<div class="px-4 mt-4">
						<BarChart {password} />
					</div>

					<div class="flex flex-col px-4 mt-10 gap-4">
						<span class="text-neutral-400 text-xs font-medium">ADVANCED OPTIONS</span>

						<label
							id="buhodev"
							for="quantityOfCharacters"
							class="flex items-center justify-between text-sm font-medium text-neutral-100"
						>
							Using
							<select
								bind:value={PASSWORD_ADVANCED_OPTIONS.using}
								id="quantityOfCharacters"
								class="border text-sm rounded-lg px-2 py-1 font-normal bg-neutral-800 border-neutral-600 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500"
							>
								<option value="minimum" selected>Minimum</option>
								<option value="maximum">Maximum</option>
							</select>
						</label>

						<label
							id="buhodev"
							for="uppercaseLength"
							class="flex items-center justify-between text-sm text-neutral-100"
						>
							Uppercase
							<div class="flex items-center justify-center gap-2">
								<input
									bind:value={PASSWORD_ADVANCED_OPTIONS.numberOfChars.uppercase}
									type="range"
									min="1"
									max="6"
									class="w-full"
								/>
								<span>{PASSWORD_ADVANCED_OPTIONS.numberOfChars.uppercase}</span>
							</div>
						</label>
						<label
							id="buhodev"
							for="uppercaseLength"
							class="flex items-center justify-between text-sm text-neutral-100"
						>
							Numbers
							<div class="flex items-center justify-center gap-2">
								<input
									bind:value={PASSWORD_ADVANCED_OPTIONS.numberOfChars.numbers}
									type="range"
									min="1"
									max="6"
									class="w-full"
								/>
								<span>{PASSWORD_ADVANCED_OPTIONS.numberOfChars.numbers}</span>
							</div>
						</label>
						<label
							id="buhodev"
							for="uppercaseLength"
							class="flex items-center justify-between text-sm text-neutral-100"
						>
							Symbols
							<div class="flex items-center justify-center gap-2">
								<input
									bind:value={PASSWORD_ADVANCED_OPTIONS.numberOfChars.symbols}
									type="range"
									min="1"
									max="6"
									class="w-full"
								/>
								<span>{PASSWORD_ADVANCED_OPTIONS.numberOfChars.symbols}</span>
							</div>
						</label>

						<div class="flex items-center justify-between space-x-2">
							<label
								id="buhodev"
								for="include-exclude"
								class="text-sm font-medium text-neutral-100"
							>
								<select
									id="include-exclude"
									class="border text-sm rounded-lg px-1.5 py-1 font-normal bg-neutral-800 border-neutral-600 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500"
								>
									<option value="min" selected>Include</option>
									<option value="max">Exclude</option>
								</select>
							</label>

							{#if PASSWORD_ADVANCED_OPTIONS.sortOption === 'include'}
								<label id="buhodev" for="input-include" class="text-sm text-neutral-100 w-full">
									<input
										bind:value={PASSWORD_ADVANCED_OPTIONS.include}
										type="text"
										name=""
										id="input-include"
										placeholder="#$%&/("
										class="border w-full text-sm rounded-lg px-1.5 py-1 font-normal bg-neutral-800 border-neutral-600 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500"
									/>
								</label>
							{:else}
								<label id="buhodev" for="input-exclude" class="text-sm text-neutral-100 w-full">
									<input
										bind:value={PASSWORD_ADVANCED_OPTIONS.exclude}
										type="text"
										name=""
										id="input-exclude"
										placeholder="#$%&/("
										class="border w-full text-sm rounded-lg px-1.5 py-1 font-normal bg-neutral-800 border-neutral-600 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500"
									/>
								</label>
							{/if}
						</div>
					</div>
				{:else}
					<span class="px-4 mt-6 text-neutral-400 text-xs font-medium">STATS</span>
					<div class="px-4 mt-4">
						<!-- TODO: needs refactor -->
						<BarChart password={passphrase} />
					</div>

					<div class="flex flex-col px-4 mt-10 gap-4">
						<span class="text-neutral-400 text-xs font-medium">ADVANCED OPTIONS</span>

						<label
							id="buhodev"
							for="quantityOfCharacters"
							class="flex items-center justify-between text-sm font-medium text-neutral-100"
						>
							Separator
							<select
								bind:value={PASSPHRASE_OPTIONS.separator}
								id="quantityOfCharacters"
								class="border text-sm rounded-lg px-2 py-1 font-normal bg-neutral-800 border-neutral-600 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500"
							>
								{#each SEPARATOR_OPTIONS as { title, id }}
									<option value={id} selected>{title}</option>
								{/each}
							</select>
						</label>
					</div>
				{/if}

				<span class="px-4 mt-10 text-neutral-400 text-xs font-medium">SEED ALGORITHM</span>

				<div class="px-4 flex flex-col gap-6 w-full mt-4 mb-4">
					{#each SEED_OPTIONS as { title, id, pill, description } (id)}
						<label
							id="buhodev"
							for={id}
							class="border-lg flex w-full cursor-pointer rounded border border-gray-400/20 bg-gray-800/20 p-3 text-white transition hover:bg-gray-500/20 hover:text-gray-100"
						>
							<!-- TODO: find a better way to align the radio input with the title -->
							<input
								{id}
								type="radio"
								value={id}
								name="seedType"
								bind:group={seedType}
								class="w-4 h-4 mt-1 mr-2 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2"
							/>
							<div class="flex flex-col">
								<div>
									<span class="font-semibold">{title}</span>
									{#if pill}
										<span
											class="ml-1 bg-green-200 text-green-900 text-sm px-2 font-semibold rounded-full"
											>{pill}</span
										>
									{/if}
								</div>
								<span class="text-gray-200">{description}</span>
								{#if id === 'manual' && seedType === 'manual'}
									<label
										id="buhodev"
										for="input-manual"
										class="text-sm text-neutral-100 w-full mt-2"
									>
										<input
											type="text"
											name=""
											id="input-manual"
											placeholder="Add your seed here"
											bind:value={manualSeed}
											class="border w-full text-sm rounded-lg px-1.5 py-1.5 font-normal bg-neutral-800 border-neutral-600 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500"
										/>
									</label>
								{:else if id === 'mouse' && seedType === 'mouse'}
									<!--Setting the mouseSeed to '' triggers the showSeedGenerator condition to open the SeedGenerator modal  -->
									<button
										on:click={() => (mouseSeed = '')}
										class="w-full bg-blue-600 rounded-md py-1.5 mt-2 text-sm font-medium"
										>Add new seed</button
									>
								{/if}
							</div>
						</label>
					{/each}
				</div>

				<div
					class="m-4 mt-8 p-4 text-sm bg-neutral-600/10 space-x-1 flex text-neutral-300 rounded-md leading-none"
				>
					<span class="w-5 h-5 flex justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block w-5 h-5"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M16.125 9.75 10.622 15l-2.747-2.625"
								stroke="#fff"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
								stroke="#fff"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>

					<span class="leading-normal">
						Tip: Click the copy
						<span class="inline-block w-4"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									class:text-blue-400={isCopied}
									d={!isCopied
										? 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
										: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'}
								/>
							</svg></span
						> button next to the password very fast to see what happens
					</span>
				</div>
			{:else}
				<div
					in:fade={{ delay: 200 }}
					class="m-4 p-10 flex flex-col bg-neutral-600/10 text-gray-100 rounded-md items-center justify-center leading-none whitespace-nowrap"
				>
					<img class="w-10 h-10 mb-4" src="/buhodev/icons/lordicon/butt.webp" alt="" />
					Nothing to show here
				</div>
			{/if}

			<span class="text-center mt-auto mb-2"
				>Made by <a
					class="font-medium"
					href="https://github.com/buhodev"
					target="_blank"
					rel="noreferrer">buhodev</a
				></span
			>
		</aside>
	{/if}

	{#if $isHistoryOpen}
		<aside
			in:fly={{ x: 250, opacity: 1, easing: quadOut, duration: 100 }}
			out:fly={{ x: 250, opacity: 1, easing: quadIn, duration: 150 }}
			class="fixed overflow-y-auto top-0 right-0 bottom-0 mt-12 flex w-72 flex-col bg-neutral-900 border-l border-l-gray-600 text-white"
		>
			<div class="px-4 mt-6 flex items-center justify-between">
				<span class="text-neutral-400 text-xs font-medium">SAVED PASSWORDS</span>

				<button
					class="{$savedPasswords[0] !== undefined
						? 'hover:bg-neutral-800'
						: 'cursor-default'} rounded-md px-2 py-1"
					on:click={handleClear}>Clear all</button
				>
			</div>

			{#each $savedPasswords as { password, generated } (password)}
				<PasswordEntry {password} {generated} />
			{:else}
				<div
					in:fade={{ delay: 200 }}
					class="m-4 p-10 flex flex-col bg-neutral-600/10 text-gray-100 rounded-md items-center justify-center leading-none whitespace-nowrap"
				>
					<img class="w-10 h-10 mb-4" src="/buhodev/icons/lordicon/book-1.webp" alt="" />
					You have no saved passwords
				</div>
			{/each}
		</aside>
	{/if}
</div>

{#if showSeedGenerator}
	<div
		on:click|self={() => {
			showSeedGenerator = false
		}}
		transition:fade={{ duration: 200 }}
		class="absolute flex items-center justify-center bg-black/5 backdrop-blur-xl inset-0 z-[1000]"
	>
		<div class="m-auto z-[99]">
			<SeedGenerator bind:seed={mouseSeed} />
		</div>
	</div>
{/if}

{#if showEasterEgg}
	<div
		on:click|self={() => {
			showEasterEgg = false
			isOverlayDimissable = false
		}}
		transition:fade={{ duration: 200 }}
		class:pointer-events-none={!isOverlayDimissable}
		class="absolute flex items-center justify-center bg-black/5 backdrop-blur-xl inset-0 z-[1000]"
	>
		<div id="buhodev" class="holo-card m-auto z-[99]">
			<PasswordCard
				password={view === 'generate' ? password : userPassword}
				img={'/buhodev/gradient_purple.jpg'}
				showcase={true}
			/>
		</div>
	</div>
{/if}

<style>
	:global(body:has(* #buhodev)) {
		background: rgb(23 23 23);
		overflow-y: hidden;
	}

	#buhodev.container {
		height: calc(100% - 48px);
	}

	#buhodev.container::-webkit-scrollbar {
		display: none;
	}

	/* .group:active .spin {
		animation: spin 0.15s linear;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(180deg);
		}
	} */

	#buhodev.generate-password {
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
		transition: box-shadow 0.05s, transform 0.05s;
		will-change: box-shadow, transform;
	}
	#buhodev.generate-password:focus {
		box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
	}

	#buhodev.generate-password:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#3c4fe0 0 -3px 0 inset;
	}

	#buhodev.generate-password:active {
		box-shadow: #3c4fe0 0 3px 7px inset;
	}

	#buhodev.generate-password:disabled {
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
	}

	/* bg-noise {
		background: linear-gradient(to bottom, rgba(17, 24, 39, 0.6), rgba(0, 0, 0, 0.8)),
			url(/grain-dark.png);
	} */

	label#buhodev:has(input:checked) {
		box-shadow: 0 0 0 2px rgb(59 130 246);
	}

	label#buhodev:has(input[type='checkbox']:focus-visible),
	label#buhodev:has(input[type='checkbox']:hover) {
		transform: scaleX(1.01) scaleY(1.01);
	}

	/* .bg-dots {
		background-color: #080808;
		background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231d1d1d' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
	}

	.bg-texture {
		background-color: #080808;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23272727' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
	} */

	@media screen and (min-width: 600px) {
		#buhodev.holo-card {
			grid-column: 2;
			grid-row: 2/4;
		}
	}

	#buhodev.holo-card {
		max-width: min(330px, 80vw);
	}
</style>
