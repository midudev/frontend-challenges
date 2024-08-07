<template>
	<div id="grd92" class="flex justify-center items-center flex-col h-full">
		<h1 class="title text-violet-600 text-center mb-3 w-1/3">Password Generator</h1>

		<div
			id="result-password"
			class="flex align-middle border border-gray-400 rounded bg-gray-400 text-white font-bold p-2 mt-4 mb-4 pl-4"
			:class="{ hidden: !password.length }"
		>
			{{ password }}
			<button
				id="copy-button"
				class="bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold ml-3 p-0.5 rounded-r w-5"
				@click="copyPassword"
			>
				<img src="./Icons/copy.svg" alt="" />
			</button>
		</div>

		<div class="bg-slate-200 rounded-lg p-3 w-1/3 text-center mt-3 grid">
			<div class="">
				<label for="lengthSecurity">Longitud de la password</label>
				<br />

				<code>{{ lengthSecurity }}</code>

				<input
					name="lengthSecurity"
					class="text-violet-600 bg-violet-600 w-5/6 m-auto mt-2 mb-2"
					type="range"
					:min="MIN_LIMIT"
					:max="MAX_LIMIT"
					:step="STEP"
					v-model="lengthSecurity"
				/>
			</div>

			<div class="col">
				<button
					class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 mt-3 border border-violet-600 rounded"
					@click="generate"
				>
					Generar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
const STEP = 2
const MIN_LIMIT = 4
const MAX_LIMIT = 32
const CHARS = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default {
	data() {
		return {
			lengthSecurity: MIN_LIMIT,
			password: ''
		}
	},
	created() {
		this.STEP = STEP
		this.MIN_LIMIT = MIN_LIMIT
		this.MAX_LIMIT = MAX_LIMIT
	},
	/* computed() {
		this.lengthSecurity
	}, */
	methods: {
		generate() {
			let newPassword = ''
			for (let i = 0; i < this.lengthSecurity; i++) {
				let positionChar = Math.floor(Math.random() * CHARS.length)
				newPassword = `${newPassword}${CHARS[positionChar]}`
			}
			this.password = newPassword
		},
		copyPassword() {
			navigator.clipboard.writeText(this.password)
		}
	}
}
</script>

<style scoped>
#grd92 * {
	font-size: 18px;
	font-family: monospace, sans-serif;

	--main-green-color: rgb(5 150 105 / var(--tw-bg-opacity));
	--main-violet-color: rgb(124 58 237 / var(--tw-text-opacity));
}
#grd92 #copy-button img {
	filter: invert(1);
}
#grd92 #result-password {
	font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
		Bitstream Vera Sans Mono, Courier New, monospace;
}

#grd92 .title {
	font-size: 3em;
	font-weight: 800;
}

#grd92 input[type='range'] {
	display: block;
	cursor: grab;
}

#grd92 input[type='range']:active {
	cursor: grabbing;
}
#grd92 input[type='range']:focus {
	outline: none;
}

#grd92 input[type='range'],
#grd92 input[type='range']::-webkit-slider-runnable-track,
#grd92 input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
}

#grd92 input[type='range']::-webkit-slider-thumb {
	background-color: var(--main-violet-color);
	border: 3px solid var(--main-violet-color);
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-top: -9px;
}

#grd92 input[type='range']::-moz-range-thumb {
	background-color: var(--main-violet-color);
	border: 3px solid var(--main-violet-color);
	width: 15px;
	height: 15px;
	border: 3px solid #333;
	border-radius: 50%;
}

#grd92 input[type='range']::-ms-thumb {
	background-color: white;
	border: 3px solid var(--main-violet-color);
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

#grd92 input[type='range']::-webkit-slider-runnable-track {
	background-color: rgb(160, 160, 160);
	border: 1px solid rgb(160, 160, 160);
	height: 1px;
}

#grd92 input[type='range']:focus::-webkit-slider-runnable-track {
	outline: none;
}

#grd92 input[type='range']::-moz-range-track {
	background-color: rgb(160, 160, 160);
	border: 1px solid rgb(160, 160, 160);
	height: 1px;
}

#grd92 input[type='range']::-ms-track {
	background-color: rgb(160, 160, 160);
	border: 1px solid rgb(160, 160, 160);
	height: 1px;
}

#grd92 input[type='range']::-ms-fill-lower {
	background-color: rgb(160, 160, 160);
	border: 1px solid rgb(160, 160, 160);
}

#grd92 input[type='range']::-ms-fill-upper {
	background-color: whirgb(160, 160, 160);
	border: 1px solid rgb(160, 160, 160);
}
</style>
