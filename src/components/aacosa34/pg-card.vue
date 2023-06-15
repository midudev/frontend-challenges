<template>
	<div
		class="flex flex-col justify-center items-center h-screen w-screen text-center text-white font-special"
	>
		<h1 class="text-6xl tracking-wide font-extrabold">Password Generator</h1>
		<form
			class="rounded-xl flex flex-col justify-center p-8 m-5 bg-gradient-to-r from-yellow-300 via-cyan-300 to-violet-300 text-slate-900"
		>
			<label class="mb-4" for="password"> Password <input id="password" type="text" /> </label>

			<label class="my-2" for="uppercases">
				<input type="checkbox" name="upper" id="uppercases" /> A-Z
			</label>

			<label class="my-2" for="lowercases">
				<input type="checkbox" name="lower" id="lowercases" /> a-z
			</label>

			<label class="my-2" for="numbers">
				<input type="checkbox" name="numbers" id="numbers" /> 0-9
			</label>

			<label class="my-2" for="symbols">
				<input type="checkbox" name="symbols" id="symbols" /> !@#$%^&*
			</label>

			<label class="my-4" for="lenght"
				>Lenght
				<input type="range" name="lenght" id="lenght" min="5" max="128" value="14" />
				<input type="text" name="lenght-number" id="lenght-number" value="" />
			</label>

			<button
				class="rounded-lg p-4 mt-5 bg-gradient-to-r from-pink-500 to-yellow-500 text-slate-900 font-bold"
			>
				Generate password
			</button>
		</form>
	</div>
</template>
